require 'rails_helper'

feature "sees trains" do
  scenario "see all the trains", pending: true do
    train = Train.create(name: "Thomas The Tank Engine")
    another_train = Train.create(name: "Ben")

    visit trains_path
    expect(page).to have_content(train.name)
    expect(page).to have_content(another_train.name)
  end
end
