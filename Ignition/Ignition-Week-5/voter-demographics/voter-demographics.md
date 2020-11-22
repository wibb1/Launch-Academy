You're the new campaign manager for the Committee to Elect Mary Sue and Mary needs to learn more about her constituency.

## Getting Started
```no-highlight
et get voter-demographics
cd voter-demographics
code .
```

### Instructions

Given the sample size of data below, supply Mary with a report of:

* Average age
* Average income
* Average household size
* Female Percentage
* Male Percentage
* Unspecified Gender Percentage
* Percent of those who obtained a college education level
* Percent of those who obtained no higher than a high school education level
* Percent of those that did not finish high school

Here is the data:

```no-highlight
First Name, Last Name, Age, Income, Household Size, Gender, Education
Jon, Smith, 25, 50000, 1, Male, College
Jane, Davies, 30, 60000, 3, Female, High School
Sam, Farelly, 32, 80000, 2, Unspecified, College
Joan, Favreau, 35, 65000, 4, Female, College
Sam, McNulty, 38, 63000, 3, Male, College
Mark, Minahan, 48, 78000, 5, Male, High School
Susan, Umani, 45, 75000, 2, Female, College
Bill, Perault, 24, 45000, 1, Male, Did Not Complete High School
Doug, Stamper, 45, 75000, 1, Male, College
Francis, Underwood, 52, 100000, 2, Male, College
```

Sample Output:

```no-highlight
Average Age: 37.4
Average Income: 69100.0
Average Household Size: 2.4
Female %: 30.0
Male %: 60.0
Unspecified Gender %: 10.0
College %: 70.0
High School %: 20.0
Did Not Finish High School %: 10.0
```

{% show_hint %}
* Use an array of hashes and loop through the data to calculate values
{% endshow_hint %}
