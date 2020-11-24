class Artist < ApplicationRecord
  has_many :songs
  validates_presence_of :name
end
