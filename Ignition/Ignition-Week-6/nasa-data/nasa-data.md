We've obtained some data from the NASA API  (https://data.nasa.gov/resource/64xd-c8tb.json) to learn more about
some of the companies that attended South x Southwest in 2016. Now, we want to use that data to answer some questions.

## Getting Started
```no-highlight
et get nasa-data
cd nasa-data
code .
```

### Instructions

In this challenge, you'll write a program in `code.rb` that traverses through
the compound data structure we got back from our API call to print out some data
in a particular format and answer a series of questions.

Calling `nasa_data` will give you the whole structure to work with (i.e.
`nasa_data.each do |something|`, etc).

_**Please read through ALL the directions before beginning!**_

* Make sure you're using **logic** to get to the solutions, not hard coding the solution.

### Tips

* Use `.each`. Use it a lot!

* Break down the compound data structure into its smallest parts. Isolate a data structure and ask yourself what composes it. Is it an array of hashes? An array of strings? An array of arrays?

* Reference the Ruby docs for
  [Arrays](http://www.ruby-doc.org/core-2.2.0/Array.html),
  [Hashes](http://www.ruby-doc.org/core-2.2.0/Hash.html) and
  [Strings](http://www.ruby-doc.org/core-2.2.0/String.html)
  to explore what methods Ruby has to offer.

### Meeting Expectations Requirements

Write code to produce the terminal output shown in each example block. (Put
another way, when you run `ruby code.rb`, your program should display all of
this data sequentially in your terminal as shown in the example output blocks.) You must use **logic** to output the answers. **No hardcoding answers**

1. Create a method called company_name that takes in two arguments, an array and a company name.The method must return the entire hash for the given company.
```
{"computed_region_cbhk_fwbd"=>17, "computed_region_nnqa_25f4"=>1237, "country"=>"USA", "domain"=>"com", "email_hosts"=>"garmin.com", "location_1"=>{"type"=>"Point", "coordinates"=>[-94.819128, 38.881396]}, "location_1_city"=>"Olathe", "location_1_state"=>"KS", "position"=>"Product Architect, Mobile & Wearable Devices"}
```
2. Create a method called location that takes in an array and returns the city and state for every company.
```
Direct Marketing News: New York, NY
Amoeba Culture: Seoul,
Intrepid Solutions: Austin, TX
The Van Blargan Groups: Dallas, TX
Telewander: Santiago de Chile,
Folk: Montreal, QC
National Instruments: Austin, TX
Nottingham Spirk: Westlake, OH
ANG Marketing and Advertising: Joint Base Andrews, MD
Garmin International: Olathe, KS
Arlington Economic Development: Arlington, VA
VCU Brandcenter: Richmond, VA
```
3. Create a method called id_number that takes in an array and returns each company name and its computed_region_cbhk_fwbd id number.
```
Direct Marketing News: 46
Amoeba Culture: 32
Intrepid Solutions: 23
The Van Blargan Groups: 23
Telewander: 17
Folk: 68
National Instruments: 23
Nottingham Spirk: 38
ANG Marketing and Advertising: 45
Garmin International: 17
Arlington Economic Development: 23
VCU Brandcenter: 40
```
4. Create a method called position that returns each company name and their listed position.
```
Direct Marketing News: Special Features Editor
Amoeba Culture: Music Producer
Intrepid Solutions: Owner
The Van Blargan Groups: Consultant
Telewander: Jose Manuel Lizama Gonzalez
Folk: Co-Founder/Brand Strategist
National Instruments: Staff Software Engineer
Nottingham Spirk: Principal
ANG Marketing and Advertising: Chief, ANG Mktg & Advertising
Garmin International: Product Architect, Mobile & Wearable Devices
Arlington Economic Development: Business Dev Mgr
VCU Brandcenter: Student
```
5. Create a method called type that takes in an array and returns each company name followed by their location_1 type.
```
Direct Marketing News: Point
Amoeba Culture: Dot
Intrepid Solutions: Point
The Van Blargan Groups: Point
Telewander: Dot
Folk: Point
National Instruments: Point
Nottingham Spirk: Point
ANG Marketing and Advertising: Point
Garmin International: Point
Arlington Economic Development: Point
VCU Brandcenter: Dot
```
6. Create a method called number that takes in an array and returns the name of the company that has the highest computed_region_nnqa_25f4 number.
```
Amoeba Culture
```
7. Create a method called gmail that takes in an array and returns the amount of companies that have gmail.com as their email_hosts.
```
3
```
8. Create a method called no_domain that takes in an array and returns the number of companies that **do not** have a domain listed in nasa_data.
```
5
```
