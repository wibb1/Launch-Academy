require 'rails_helper'

feature "sees airplanes" do
  scenario "see all the airplanes", pending: true do
    airplane = Airplane.create(name: "Air Force One")
    another_airplane = Airplane.create(name: "Spirit of St. Louise")

    visit airplanes_path
    expect(page).to have_content(airplane.name)
    expect(page).to have_content(another_airplane.name)
  end
end
