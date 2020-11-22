class Jukebox

  def initialize(requested_songs)
    
    @requested_songs = requested_songs
    @approved_playlist = []
    @loaded_songs = [
      {name: "Hello", artists: "Lionel Ritchie"}, 
      {name: "Kokomo", artists: "The Beach Boys"},
      {name: "Girl You Know It’s True", artists: "Milli Vanilli"},
      {name: "Agadoo", artists: "Black Lace"},
      {name: "Down Under", artists: "Men at Work"},
      {name: "Nothing's Gonna Stop Us Now", artists: "Starship"},
      {name: "Get Outta My Dreams, artists: Get Into My Car", artists: "Billy Ocean"},
      {name: "I Just Called To Say I Love You", artists: "Stevie Wonder"},
      {name: "Hangin' Tough", artists: "New Kids on the Block"},
      {name: "We Built This City", artists: "Starship"},
      {name: "Wake Me Up Before You Go Go", artists: "Wham!"},
      {name: "We Didn't Start The Fire", artists: "Billy Joel"},
      {name: "I Wanna Dance With Somebody", artists: "Whitney Houston"},
      {name: "U Can't Touch This", artists: "MC Hammer"}]
  end

  attr_reader :approved_playlist, :loaded_songs, :requested_songs

  def song_sorter
    i = 0
    j = 0
    while i < @requested_songs.length
      while j < @loaded_songs.length
        if @requested_songs[i].eql?(@loaded_songs[j][:name])
          @approved_playlist.push(@requested_songs[i])
        end
        j += 1
      end
      j = 0
      i += 1
    end
    return @approved_playlist
  end

  def shuffle_songs!
    @approved_playlist.shuffle!()
  end
 
  def play!
    puts "Now playing #{@approved_playlist[0]}"
    @approved_playlist.shift()
  end

  def add_track(name)
    newsong = name
    j = 0
    while j < @loaded_songs.length
      if newsong.eql?(@loaded_songs[j])
        @approved_playlist.push(newsong)
      else 
        return false
      end
      j += 1
    end
  end

end

jukebox1 = Jukebox.new(["Ride The Lightning", "Hello", "Agadoo", "Down Under"])

