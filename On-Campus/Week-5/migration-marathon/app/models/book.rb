class Book < ActiveRecord::Base
  has_many :checkouts
  has_many :categorizations
  has_many :categories, through: :categorizations
  
  validates :title, presence: true
  validates :author, presence: true
  #validates :favorite, presence: true #NEED TO GET THE TRUE FALSE call from marathon
  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
end