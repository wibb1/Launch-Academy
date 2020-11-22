require "rails_helper"


feature "visitors can add members of houses" do
  scenario "adds a member of a house successfully" do
    baratheon = House.create(name: "Baratheon", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Ours is the Fury")

    visit new_house_member_path(baratheon)

    expect(page).to have_content "New House Baratheon Member Form"

    fill_in "First Name", with: "Edmure"
    fill_in "Last Name", with: "Tully"
    click_button "Add Member"

    expect(page).to have_content "Member added successfully"
    expect(page).to have_content "Edmure Tully"
    expect(page).to have_content baratheon.name
  end

  scenario "adds a member of a house unsuccessfully" do
    baratheon = House.create(name: "Baratheon", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Ours is the Fury")

    visit house_path(baratheon)

    click_link "Add a House Member"
    expect(page).to have_content "New House Baratheon Member Form"

    fill_in "First Name", with: "Whatever"

    click_button "Add Member"

    expect(page).to have_content "New House Baratheon Member Form"
    expect(page).to have_content "Last name can't be blank"
  end
end
