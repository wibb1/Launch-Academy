class Comment < ActiveRecord::Base
  belongs_to :recipe

  validates :body, presence: true
end