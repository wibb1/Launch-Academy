class Song < ActiveRecord::Base
  validates :year, presence: true, length: { minimum: 2, maximum: 4 }
end
