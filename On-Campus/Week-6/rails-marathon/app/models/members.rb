class Member < ApplicationRecord
  belongs_to :house
  
  validates :first_name, presence: true
  validates :last_name, presence: true
end