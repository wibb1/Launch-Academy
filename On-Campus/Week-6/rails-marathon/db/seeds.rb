# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#House.create(name: "Stark", author: "George R. R. Martin", source: "A Game of Thrones")
#House.create(name: "Atreides", author: "Frank Herbert", source: "Dune")
#House.create(name: "Baratheon", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Ours is the Fury")

Member.create(first_name: "Robert", last_name: "Baratheon", house: baratheon)
Member.create(first_name: "Paul", last_name: "Atredies", house: atreides)
Member.create(first_name: "Eddard", last_name: "Stark", house: stark)