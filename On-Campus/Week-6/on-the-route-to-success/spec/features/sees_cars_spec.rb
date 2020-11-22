require 'rails_helper'

feature "sees cars" do
  scenario "see all the cars", pending: true do
    car = Car.create(name: "ferrari")
    another_car = Car.create(name: "audi")

    visit cars_path
    expect(page).to have_content(car.name)
    expect(page).to have_content(another_car.name)
  end
end
