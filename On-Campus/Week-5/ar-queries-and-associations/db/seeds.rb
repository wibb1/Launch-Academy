# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Example:
#
Recipe.create(name: "Brussel Sprouts", directions: "All you need is a little vinegar and a microwave")
Comment.create(article_id: 1, body: "Don't cook Brussel Sprouts indoors, they smell like feet!")
Comment.create(article_id: 1, body: "Brussel Sprouts don't smell as bad as MY feet!")


Recipe.create(name: "Pigs Feet", directions: "Buy them pickled and leave them on a shelf")
Comment.create(article_id: 2, body: "Buying something isn't a recipe!")
Comment.create(article_id: 2, body: "Does anyone actually enjoy eating these!")


Recipe.create(name: "Scrambled Eggs", directions: "Take care not to overcook!")
Comment.create(article_id: 3, body: "When overcooked they are dry and rubbery")
Comment.create(article_id: 3, body: "My son loves them rubbery, so I gave up eating them even when I cook them.")


Recipe.create(name: "Haggis", directions: "The national dish of Scotland - sheep's plucks, oatmeal, and fat rapped in a sheeps stomach - MMMmmmmmmmmmmmm.")
Comment.create(article_id: 4, body: "Ok you made this up, noone would really eat that!")
Comment.create(article_id: 4, body: "WTH are 'sheep's plucks? OMG I looked that up, are you kidding me! Where can you even find heart, lungs and liver around here, SERIOUSLY, noone is going to eat that!")


Recipe.create(name: "Buffalo Wings", directions: "Wings, Franks Red Hot, and time is all you need.")
Comment.create(article_id: 5, body: "Use Mayo with the red hot to get it to stick better!")
Comment.create(article_id: 5, body: "Frank's Red Hot, I put that SH-T on EVERYTHING!")