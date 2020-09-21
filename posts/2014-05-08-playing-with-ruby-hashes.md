---
title: "Playing with ruby hashes"
date: 2014-05-08 23:55:53 -0700
categories: [ruby]
---

Ruby's `Hash#new` method accepts an optional parameter which is
returned when you try to access a key that does not exist in the hash (the default is nil). For example:

```ruby
h = Hash.new('bar') #=> {}
puts h[:foo]        #=> 'bar'
```

While the first example may not very useful, `Hash#new` also accepts a
block that will be called with the hash object and the key whenever you try to access
a key that does not exist in the hash, for example:

<!-- more -->

```ruby
upcase = Hash.new { |hash, k| "#{k}".upcase }  #=> {}
upcase['foo']                                  #=> "FOO"
```

You can also modify the hash within the callback. Here's a more useful
example where we create a
[memoized](http://en.wikipedia.org/wiki/Memoization) version of the fibonacci sequence:

```ruby
fibonacci = Hash.new do |hash, k|
  case k
  when 0
    hash[k] = 0
  when 1, 2
    hash[k] = 1
  else
    hash[k] = hash[k-1] + hash[k-2]
  end
end
```

Using this hash, whenever we compute the nth
fibonacci number all the n - 1 fibonacci
numbers will be cached in the hash, significantly reducing the number of
recursive calls needed to compute the next fibonacci number.

```ruby
puts fibonacci[5]    #=> 5
puts fibonacci       #{2=>1, 1=>1, 3=>2, 4=>3, 5=>5}
```
