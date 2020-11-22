class Checkout < ActiveRecord::Base
  belongs_to :book
  
  validates :name, presence: true
end
