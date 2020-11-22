require "rails_helper"


feature "visitor sees a list of houses" do
  scenario "sees a list of houses with no details as links, and a link for new house" do
    House.create(name: "Stark", author: "George R. R. Martin", source: "A Game of Thrones")
    House.create(name: "Atreides", author: "Frank Herbert", source: "Dune")

    visit houses_path

    expect(page).to have_content "Stark"
    expect(page).to have_link "Atreides"
    expect(page).to_not have_content "Game of Thrones"

    click_link "Add New House"

    expect(page).to have_content "New House Form"
  end

  scenario "clicks link and is taken to show page for given house" do
    House.create(name: "Stark", author: "George R. R. Martin", source: "A Game of Thrones", motto: "Winter is Coming")
    visit root_path

    click_link "Stark"

    expect(page).to have_content "George R. R. Martin"
    expect(page).to have_content "A Game of Thrones"
    expect(page).to have_content "Winter is Coming"
  end
end
