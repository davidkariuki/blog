---
title: Computing rankings in MySQL
description: When SQL gets ugly
date: June 1, 2014 14:51:13
category: SQL
---

Say we wanted to calculate individual subject rankings and overall rankings
for a group of students, given their Math, English and Biology scores. We can accomplish
this with a single query if we leverage MySQL's
[user-defined variables](http://dev.mysql.com/doc/refman/5.0/en/user-variables.html) and derived tables.
Derived tables are basically subqueries inside a from clause of a SQL
statement. User-defined variables allow you to store a value in one statement and access
it later in another statement, which makes them perfect for our use case. Let's walk through an example.

<!-- more -->

### Schema

Our schema consists of a `students` table and three other tables to store
scores for each subject.

```sql
CREATE TABLE students (
  id int auto_increment primary key,
  name varchar(30)
);

CREATE TABLE english_scores (
  id int auto_increment primary key,
  student_id integer,
  score integer,
  KEY index_english_scores_on_student_id (student_id)
);

CREATE TABLE math_scores (
  id int auto_increment primary key,
  student_id integer,
  score integer,
  KEY index_math_scores_on_student_id (student_id)
);

CREATE TABLE biology_scores (
  id int auto_increment primary key,
  student_id integer,
  score integer,
  KEY index_biology_scores_on_student_id (student_id)
);
```

### Dataset

```sql
INSERT INTO students (name)
VALUES ('David'), ('Steve'), ('Bruce'), ('Beck'), ('Jeffrey'), ('Dan');

INSERT INTO english_scores (student_id, score)
VALUES (1, 85), (2, 79), (3, 41), (4, 62), (5, 74), (6, 28);


INSERT INTO math_scores (student_id, score)
VALUES (1, 69), (2, 93), (3, 21), (4, 90), (5, 59), (6, 83);

INSERT INTO biology_scores (student_id, score)
VALUES (1, 87), (2, 49), (3, 72), (4, 45), (5, 38), (6, 99);
```

### Initial Query

Let's start by selecting the names and scores of the students:

```sql
SELECT s.name,
       es.score AS english_score,
       bs.score AS biology_score,
       ms.score AS math_score,
       es.score + bs.score + ms.score AS total_score
FROM students s
JOIN english_scores es on es.student_id = s.id
JOIN math_scores ms ON ms.student_id = s.id
JOIN biology_scores bs ON bs.student_id = s.id
```

Giving us the following results:

```
| name    | english_score | biology_score | math_score | total_score |
| ------- | ------------- | ------------- | ---------- |------------ |
| David   | 85            | 87            | 69         | 241         |
| Steve   | 79            | 49            | 93         | 221         |
| Bruce   | 41            | 72            | 21         | 134         |
| Beck    | 62            | 45            | 90         | 197         |
| Jeffrey | 74            | 38            | 59         | 171         |
| Dan     | 28            | 99            | 83         | 210         |
```

### Key Steps

First, we order the results of our initial query by descending math score and select
the results into a derived table `data_ordered_by_math_score`. Next, we initialize our user-defined
variable, `@math_rank`, by selecting it into a derived table, `math_rank_derived_table`, and setting
its value to zero. Finally, we select every record in `data_ordered_by_math_score` and increment
the value of `@math_rank` for each row returned by the statement.

```sql
SELECT data_ordered_by_math_score.*, @math_rank := @math_rank + 1 AS math_rank
FROM
  (SELECT @math_rank := 0) AS math_rank_derived_table,
  (SELECT s.name,
          es.score AS english_score,
          bs.score AS biology_score,
          ms.score AS math_score,
          es.score + bs.score + ms.score AS total_score
   FROM students s
   JOIN english_scores es on es.student_id = s.id
   JOIN math_scores ms ON ms.student_id = s.id
   JOIN biology_scores bs ON bs.student_id = s.id
   ORDER BY math_score DESC) AS data_ordered_by_math_score
```

### Results

Here are the results with math rank:

```
| name    | english_score | biology_score | math_score | total_score | math_rank |
| ------- | ------------- | ------------- | ---------- | ----------- | --------- |
| Steve   | 79            | 49            | 93         | 22          | 1         |
| Beck    | 62            | 45            | 90         | 19          | 2         |
| Dan     | 28            | 99            | 83         | 21          | 3         |
| David   | 85            | 87            | 69         | 24          | 4         |
| Jeffrey | 74            | 38            | 59         | 17          | 5         |
| Bruce   | 41            | 72            | 21         | 13          | 6         |
```

The next step is to order the results of the above query by
`english_score` and compute `@english_rank` just like we did with `@math_rank`.

```sql
SELECT data_ordered_by_english_score.*, @english_rank := @english_rank + 1 AS english_rank
FROM
  (SELECT @english_rank := 0) AS english_rank_derived_table,
  (SELECT data_ordered_by_math_score.*, @math_rank := @math_rank + 1 AS math_rank
   FROM
     (SELECT @math_rank := 0) AS math_rank_derived_table,
     (SELECT s.name,
             es.score AS english_score,
             bs.score AS biology_score,
             ms.score AS math_score,
             es.score + bs.score + ms.score AS total_score
      FROM students s
      JOIN english_scores es ON es.student_id = s.id
      JOIN math_scores ms ON ms.student_id = s.id
      JOIN biology_scores bs ON bs.student_id = s.id
      ORDER BY math_score DESC) AS data_ordered_by_math_score) AS data_ordered_by_english_score
ORDER BY english_score DESC

```

Results with math and english rank:

```
| name    | english_score | biology_score | math_score | total_score | math_rank | english_rank |
| ------- | ------------- | ------------- | ---------- | ----------- | --------- | ------------ |
| David   | 85            |  87           |  69        |  241        | 4         | 1            |
| Steve   | 79            |  49           |  90        |  218        | 1         | 2            |
| Jeffrey | 74            |  38           |  59        |  171        | 5         | 3            |
| Beck    | 62            |  45           |  90        |  197        | 2         | 4            |
| Bruce   | 41            |  72           |  21        |  134        | 6         | 5            |
| Dan     | 28            |  99           |  83        |  210        | 3         | 6            |
```

Following the same pattern we add biology rank to the query:

```sql
SELECT data_ordered_by_biology_score.*, @biology_rank := @biology_rank + 1 AS biology_rank
FROM
  (SELECT @biology_rank := 0) AS biology_rank_derived_table,
  (SELECT data_ordered_by_english_score.*, @english_rank := @english_rank + 1 AS english_rank
   FROM
     (SELECT @english_rank := 0) AS english_rank_derived_table,
     (SELECT data_ordered_by_math_score.*, @math_rank := @math_rank + 1 AS math_rank
      FROM
        (SELECT @math_rank := 0) AS math_rank_derived_table,
        (SELECT s.name,
                es.score AS english_score,
                bs.score AS biology_score,
                ms.score AS math_score,
                es.score + bs.score + ms.score AS total_score
         FROM students s
         JOIN english_scores es ON es.student_id = s.id
         JOIN math_scores ms ON ms.student_id = s.id
         JOIN biology_scores bs ON bs.student_id = s.id
         ORDER BY math_score DESC) AS data_ordered_by_math_score) AS data_ordered_by_english_score
   ORDER BY english_score DESC) AS data_ordered_by_biology_score
ORDER BY biology_score DESC
```

Results with math, english and biology ranks:

```
| name    | english_score | biology_score | math_score | total_score | math_rank | english_rank | biology_rank |
| ------- | ------------- | ------------- | ---------- | ----------- | --------- | ------------ | ------------ |
| Dan     | 28            | 99            | 83         | 210         | 3         | 6            | 1            |
| David   | 85            | 87            | 69         | 241         | 4         | 1            | 2            |
| Bruce   | 41            | 72            | 21         | 134         | 6         | 5            | 3            |
| Steve   | 79            | 49            | 90         | 218         | 2         | 2            | 4            |
| Beck    | 62            | 45            | 90         | 197         | 1         | 4            | 5            |
| Jeffrey | 74            | 38            | 59         | 171         | 5         | 3            | 6            |
```

And that's it! We can follow the same pattern to grab the overall rank,
(just order by the total score) and add a new user-defined variable.

You may have noticed that the query above doesn't account for ties. For
example, Steve and Beck both have a math score of 90, yet Beck has the
higher math rank. We can solve this by modifying the part of the query
that updates the user-defined variable from this:

```sql
SELECT @math_rank := @math_rank + 1 AS math_rank
```

to this:

```sql
SELECT (@increment_math_rank := IF(@current_math_score = math_score, 0, 1)) AS increment_math_rank,
       (@current_math_score := math_score) AS current_math_score_derived_table,
       (@math_rank := IF(@increment_math_rank = 1, @math_rank + 1, @math_rank)) AS math_rank
```

Basically we create two more user-defined variables, one to track the
current math score and another to track whether we need to increment the
math rank (i.e the current math score is higher then the previous one).
As you can see, it gets ugly fast. The final query, only accounting for
ties in the math score, looks like this:

```sql
SELECT english_score,
       biology_score,
       math_score,
       total_score,
       math_rank,
       english_rank,
       biology_rank,
       @overall_rank := @overall_rank + 1 AS overall_rank
FROM
  (SELECT @overall_rank := 0) AS overall_rank_derived_table,
  (SELECT data_ordered_by_biology_score.*, @biology_rank := @biology_rank + 1 AS biology_rank
   FROM
     (SELECT @biology_rank := 0) AS biology_rank_derived_table,
     (SELECT data_ordered_by_english_score.*, @english_rank := @english_rank + 1 AS english_rank
      FROM
        (SELECT @english_rank := 0) AS english_rank_derived_table,
        (SELECT data_ordered_by_math_score.*,
                (@increment_math_rank := IF(@current_math_score <> math_score, 1, 0)) AS increment_math_rank,
                (@current_math_score := math_score) AS math_score_derived_table,
                (@math_rank := IF(@increment_math_rank = 1, @math_rank + 1, @math_rank)) AS math_rank
         FROM
           (SELECT @math_rank := 0) AS math_rank_derived_table,
           (SELECT s.name,
                   es.score AS english_score,
                   bs.score AS biology_score,
                   ms.score AS math_score,
                   es.score + bs.score + ms.score AS total_score
            FROM students s
            JOIN english_scores es ON es.student_id = s.id
            JOIN math_scores ms ON ms.student_id = s.id
            JOIN biology_scores bs ON bs.student_id = s.id
            ORDER BY math_score DESC) AS data_ordered_by_math_score) AS data_ordered_by_english_score
      ORDER BY english_score DESC) AS data_ordered_by_biology_score
   ORDER BY biology_score DESC) AS data_ordered_by_overall_score
```

The only difference in the results is that now the math ranks are:

```
1, 1, 2, 3, 4, 5
```

instead of:

```
1, 2, 3, 4, 5, 6
```

I've put an SQL Fiddle of this code
[here](http://sqlfiddle.com/#!2/a5f693/39). If there are better
alternatives to this approach, please leave me a note, I would love to hear them!
