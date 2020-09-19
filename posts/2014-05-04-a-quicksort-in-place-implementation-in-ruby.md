---
layout: post
title: "Quicksort (in-place) with Ruby"
date: 2014-05-04 18:35:38 -0700
comments: true
categories: [Algorithms, ruby, rspec, TDD]
---

Quicksort is a popular [sorting algorithm](http://en.wikipedia.org/wiki/Sorting_algorithm) with <span class='courier'>O(nlogn)</span> best and average-case
performance, and <span class='courier'>O(n<sup>2</sup>)</span> worst case performance when sorting
<span class='courier'>n</span> elements.

## The Algorithm

1. If the list only has a single element return it.
2. Pick a pivot.
3. Move elements around until bigger elements are to the right and smaller elements are to the left of the pivot.
4. Recursively apply the above steps to the left and right groups of elements.
<!-- more -->

## The Code

Here are a few test cases to check that our implementation does what
it's supposed to do:

```ruby
it 'returns a single-element array wihout calling partition' do
  expect(subject.any_instance).not_to receive(:partition)
  subject.new(single_element_array).sort!
  expect(single_element_array).to eq(single_element_array)
end

it 'sorts the array in place' do
  subject.new(ten_element_array).sort!
  expect(ten_element_array).to eq((1..10).to_a)
end

it 'sorts a partially sorted array' do
  subject.new(partially_sorted_array).sort!
  expect(partially_sorted_array).to eq((1..10).to_a)
end

it 'sorts a fully sorted array' do
  subject.new(sorted_array).sort!
  expect(sorted_array).to eq([1, 2, 3])
end

it 'sorts a single element array' do
  subject.new(single_element_array).sort!
  expect(single_element_array).to eq([1])
end
```

And then the implementation:

```ruby
class Algorithms::QuickSort
  # in-place implementation of the Quicksort Algorithm, source: http://en.wikipedia.org/wiki/Quicksort
  attr_reader :array

  def initialize(array)
    @array = array
  end

  def sort!(left_index = 0, right_index = array.size - 1)
    if left_index < right_index
      pivot_index = rand(left_index..right_index)
      new_pivot_index = partition(left_index, right_index, pivot_index)
      sort!(left_index, new_pivot_index - 1)
      sort!(new_pivot_index + 1, right_index)
    end
    array
  end

  private

  def partition(left_index, right_index, pivot_index)
    pivot = array[pivot_index]
    array[pivot_index], array[right_index] = array[right_index], array[pivot_index]
    new_pivot_index = left_index
    (left_index..right_index - 1).each do |i|
      if array[i] <= pivot
        array[i], array[new_pivot_index] = array[new_pivot_index], array[i]
        new_pivot_index += 1
      end
    end
    array[new_pivot_index], array[right_index] = array[right_index], array[new_pivot_index]
    new_pivot_index
  end

end

```

## An example

Given the following array:

```ruby
array = [2, 3, 1, 5]
```

The first step is to pick a pivot. The choice of a pivot can significantly improve
the performance of Quicksort. For this implementation we will use a random element in the array as a pivot.
One alternative would be to use the 'Median-of-three' as suggested by
[Robert Sedgewick](http://algs4.cs.princeton.edu/23quicksort/) (pick the first, middle and last
elements of the array and use their median as a pivot).

```ruby
pivot_index = rand(left_index..right_index)
```

Say the result of the above operation is `pivot_index = 0`. The next step is
to call the partition function, which will move all elements less than 2 to the left and all elements
greater than 2 to the right of the pivot and return the new position of the
pivot.

We need to track the position of the new pivot index, so we start off
by setting it to the left-most element. Next we move the pivot out of the way by swapping
it with the right-most element, resulting
in the following changes:

```ruby
array = [5, 3, 1, 2]; pivot = 2; new_pivot_index = 0
```

```ruby
new_pivot_index = left_index
```

Now we loop through all the elements **excluding the pivot** -- left to right --
comparing them with the pivot. If an element is less than or equal to
the pivot, we swap that element with the element at the position of the
new pivot index and increment the new pivot index by 1.

The first two elements, 5 and 3, are
less than 2 so no operations are performed. On the third comparison, we swap 1 and
5 and increment the new pivot index by 1
resulting in the following changes:

```ruby
array = [1, 3, 5, 2]; pivot = 2; new_pivot_index = 1
```

The loop is complete so the next step is to swap the pivot with the element at the new pivot index resulting in the following changes:

```ruby
array = [1, 2, 5, 3]; pivot = 2; new_pivot_index = 1
```

We return the new pivot index to the calling function as now we have
successfully partitioned the array around the pivot, <span
class='courier'>2</span>.

Next we call sort! recursively on the
elements to the left of 2. However since
that's an array with a single element, 1,
that recursive fork ends with no additional operations.

For the elements to the right of we follow the same steps as above:

- Pick a pivot: (a random element in our array: `[5, 3]`)
- Say we picked 3, call partition on the
  array, starting with the following configuration:

```ruby
array = [5, 3]; pivot = 3; new_pivot_index = 0
```

- Since the pivot is the right-most element, we don't need to move it
  out of the way.
- First and only comparison: 5 is greater
  than the pivot so no operations performed.
- Loop exits, now we swap the pivot with the element at the new pivot
  index resulting in the following changes:

```ruby
array = [3, 5]; pivot = 3; new_pivot_index = 0
```

The array is successfully partitioned and we return the new pivot index to the calling
function.

Continuing with the recursion, we call sort! recursively on elements to
the left and right of the pivot, 3. But
since there are no elements to the left of, and a single
element to the right of the pivot, the right fork of the main recursive
fork is done.

Finally we return the array, which is completely sorted at this point!

You can find the complete code on
[github](https://github.com/davidkariuki/algorithms/blob/master/lib/algorithms/quick_sort.rb)
