# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#


alpha = Campsite.create name: "Alpha"
beta = Campsite.create name: "Beta"
gamma = Campsite.create name: "Gamma"
delta = Campsite.create name: "Delta"

rovaira = Camper.create name: "Rovaira", campsite: alpha

jorge = Camper.create name: "Jorge", campsite: alpha

brian = Camper.create name: "Brian", campsite: alpha

jesse = Camper.create name: "Jesse", campsite: beta

maribeth = Camper.create name: "Maribeth", campsite: beta

kelly = Camper.create name: "Kelly", campsite: beta

david = Camper.create name: "David", campsite: gamma

philip = Camper.create name: "Phillip", campsite: gamma

kevin = Camper.create name: "Kevin", campsite: gamma


Supply.create name: "Eggs", camper: rovaira
Supply.create name: "Bacon", camper: philip
Supply.create name: "Plates", camper: david
Supply.create name: "Blankets", camper: jesse
Supply.create name: "Sleeping Bags", camper: jorge
Supply.create name: "Cups", camper: brian
Supply.create name: "Machete", camper: maribeth
Supply.create name: "Trash bags", camper: kelly
Supply.create name: "Compass", camper: kelly
Supply.create name: "Fire logs", camper: philip
Supply.create name: "Pocket knife", camper: rovaira
