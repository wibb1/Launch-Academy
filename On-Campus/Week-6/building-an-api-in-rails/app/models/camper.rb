class Camper < ApplicationRecord
  belongs_to :campsite
  has_many :supplies
end
