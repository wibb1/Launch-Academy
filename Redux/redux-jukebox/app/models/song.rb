class Song < ApplicationRecord
  belongs_to :artist
  has_many :playlist_songs
  validates_presence_of :title
end
