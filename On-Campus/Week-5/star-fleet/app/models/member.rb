class Member <ActiveRecord::Base
  belongs_to :ship

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :specialty, presence: true
end