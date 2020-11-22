class Ship <ActiveRecord::Base
  has_many :members

  validates :name, presence: true
  validates :ship_class, presence: true
  validates :location, presence: true
end