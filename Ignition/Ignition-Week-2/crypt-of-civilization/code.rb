# Your code, here.
crypt_of_civilization = []
crypt_of_civilization.push("Comptometer")
crypt_of_civilization.push("Box of phonographic records")
crypt_of_civilization.push("Plastic savings bank")
crypt_of_civilization.push("Set of scales")
crypt_of_civilization.push("Toast-O-Lator")
crypt_of_civilization.push("Sample of aluminum foil")
crypt_of_civilization.push("Donald Duck doll")

extra = ["Container of soda", "Lionel model train set", "Ingraham pocket watch"]

crypt_of_civilization = crypt_of_civilization + extra

#How many items are in the array? (10)
puts crypt_of_civilization.length

#What is the first item in the array? (Comptometer)
puts crypt_of_civilization[0]

#What is the last item in the array? (Ingraham pocket watch)
puts crypt_of_civilization[crypt_of_civilization.length-1]

#What is the second item in the array? (Box of phonographic records)
puts crypt_of_civilization[1]

#What is the third item in the array? (Plastic savings bank)
puts crypt_of_civilization[2]

#What is the second from last item in the array? (Lionel model train set)
puts crypt_of_civilization[crypt_of_civilization.length-2]

#What is the index of "Toast-O-Lator"? (4)
puts crypt_of_civilization.index("Toast-O-Lator")

#Does the array contain "Container of soda"? (True)
puts crypt_of_civilization.include?("Container of soda")

#Does the array contain "Toast-O-Lator"? (True)
puts crypt_of_civilization.include?("Toast-O-Lator")

#Does the array contain "Plastic bird"? (False)
puts crypt_of_civilization.include?("Plastic bird")

#Sort by word length
crypt_of_civilization.sort_by!(&:length)
puts "***********"
puts crypt_of_civilization

#Sort in alphabetical order
crypt_of_civilization.sort!
puts "***********"
puts crypt_of_civilization

#Sort in reverse alphabetical order
crypt_of_civilization.sort!.reverse!
puts "***********"
puts crypt_of_civilization