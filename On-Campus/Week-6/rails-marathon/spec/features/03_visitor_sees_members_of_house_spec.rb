require "rails_helper"


feature "visitor sees list of members in the house on the house show page" do
  scenario "sees members for specific house" do
    baratheon = House.create(name: "Baratheon", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Ours is the Fury")
    king_robert = Member.create(first_name: "Robert", last_name: "Baratheon", house: baratheon)

    visit house_path(baratheon)

    expect(page).to have_content baratheon.name
    expect(page).to have_content king_robert.first_name
    expect(page).to have_content king_robert.last_name
    expect(page).to have_content king_robert.created_at.strftime("%B %d %Y")
  end

  scenario "does not see other members for other houses" do
    tully = House.create(name: "Tully", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Family, Duty, Honor")
    blackfish = Member.create(first_name: "Brynden", last_name: "Tully", house: tully)

    baratheon = House.create(name: "Baratheon", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Ours is the Fury")
    king_robert = Member.create(first_name: "Robert", last_name: "Baratheon", house: baratheon)

    visit house_path(tully)

    expect(page).to have_content tully.name
    expect(page).to have_content blackfish.first_name

    expect(page).not_to have_content baratheon.name
    expect(page).not_to have_content king_robert.first_name
  end
end
