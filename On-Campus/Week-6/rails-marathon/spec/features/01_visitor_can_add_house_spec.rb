require "rails_helper"


feature "visitors can add houses" do
  scenario "visitor adds new house successfully" do

    visit new_house_path
    expect(page).to have_content "New House Form"

    fill_in "Name", with: "Ravenclaw"
    fill_in "Author", with: "JK Rowling"
    fill_in "Source", with: "Harry Potter and the Sorcerer's Stone"
    fill_in "Motto", with: "Wit beyond measure is man's greatest treasure"

    click_button "Add House"

    expect(page).to have_content "House added successfully"
    expect(page).to have_content "Ravenclaw"
    expect(page).to have_content "Wit beyond measure is man's greatest treasure"
  end

  scenario "visitor does not provide proper information for a house" do
    visit new_house_path

    click_button "Add House"
    expect(page).to have_content "Name can't be blank"
    expect(page).to have_content "Author can't be blank"
    expect(page).to have_content "Source can't be blank"
  end
end
