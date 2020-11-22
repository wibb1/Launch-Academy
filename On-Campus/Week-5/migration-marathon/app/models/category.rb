class Category < ActiveRecord::Base
  has_many :categorization
  has_many :books, through: :categorizations
  
  validates :name, presence: true
end