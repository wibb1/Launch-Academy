music_data = [
  {
    artist: { name: 'Demi Lovato' },
    songs: [
      {
        title: 'Sorry Not Sorry',
        album_name: 'Tell Me You Love Me',
        year: 2017
      }
    ]
  },
  {
    artist: { name: 'Billy Joel' },
    songs: [
      {
        title: 'The Downeaster Alexa',
        album_name: 'Storm Front',
        year: 1989
      },
      {
        title: 'The River of Dreams',
        album_name: 'The River of Dreams',
        year: 1993
      },
      {
        title: 'Big Shot',
        album_name: '52nd Street',
        year: 1978
      }
    ]
  },
  {
    artist: { name: 'Stevie Wonder' },
    songs: [
      {
        title: 'Shoo-Be-Doo-Be-Doo-Da-Day',
        album_name: 'For Once in My Life',
        year: 1968
      }
    ]
  },
  {
    artist: { name: 'Bill Withers' },
    songs: [
      {
        title: 'Lovely Day',
        album_name: 'Menagerie',
        year: 1977
      },
      {
        title: 'Use Me',
        album_name: 'Still Bill',
        year: 1972
      }
    ]
  },
  {
    artist: { name: "Guns N' Roses" },
    songs: [
      {
        title: 'Nightrain',
        album_name: 'Appetite for Destruction',
        year: 1987
      },
      {
        title: 'Live and Let Die',
        album_name: 'Use Your Illusion I',
        year: 1991
      }
    ]
  },
  {
    artist: { name: 'Drake' },
    songs: [
      {
        title: 'Best I Ever Had',
        album_name: 'So Far Gone',
        year: 2008
      },
      {
        title: 'Own It',
        album_name: 'Nothing Was The Same',
        year: 2013
      },
      {
        title: 'One Dance',
        album_name: 'Views',
        year: 2016
      },
      {
        title: "God's Plan",
        album_name: 'Scorpion',
        year: 2018
      },
      {
        title: "In My Feelings",
        album_name: 'Scorpion',
        year: 2018
      }
    ]
  },
  {
    artist: { name: 'Thin Lizzy' },
    songs: [
      {
        title: 'The Boys Are Back in Town',
        album_name: 'Jailbreak',
        year: 1976
      }
    ]
  }
]

music_data.each do |music|
  artist = Artist.find_or_create_by(music[:artist])
  music[:songs].each { |song| Song.find_or_create_by(song.merge({artist: artist})) }
end
