class Recipe < ActiveRecord::Base
  has_many :comments

  validates :name, presence: true
  validates :directions, presence: true
end