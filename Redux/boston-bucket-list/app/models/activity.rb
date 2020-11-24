class Activity < ApplicationRecord
  validates :name, presence: true
  validates :complete, inclusion: { in: [true, false] }
end
