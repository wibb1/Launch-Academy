require 'rails_helper'

feature "sees horses" do
  scenario "see all the horses" do
    horse = Horse.create(name: "Seabiscuit")
    another_horse = Horse.create(name: "Secretariat")
    yet_another_horse = Horse.create(name: "American Pharoah")

    visit horses_path
    expect(page).to have_content(horse.name)
    expect(page).to have_content(another_horse.name)
    expect(page).to have_content(yet_another_horse.name)
  end
end
