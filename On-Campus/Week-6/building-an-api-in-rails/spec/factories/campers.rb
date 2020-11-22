FactoryBot.define do
  factory :camper do
    name  { Faker::Name.name }
    campsite
  end
end
