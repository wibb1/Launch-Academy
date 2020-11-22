def print_puzzle(word, guessed = [])
  word.each_char do |char|
    if guessed.include?(char)
      print char
    elsif char == " "
      print "_"#added this to allow multiple words - the program automatically gives you the spaces
    else
      print "-"# had to change this to allow spaces above
    end
  end
  puts
end
puts print_puzzle(word,guessed)