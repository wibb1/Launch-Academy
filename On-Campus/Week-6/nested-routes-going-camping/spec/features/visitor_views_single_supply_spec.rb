require 'rails_helper'

feature "Visitor views a single campers name" do

  context "by visiting the campers/:id url" do
    let!(:camper_1) { create :camper }
    let!(:camper_2) { create :camper }
    let!(:supply_1) { create :supply, name: "Bacon!", camper: camper_1 }

    before do
      visit "/supplies/#{supply_1.id}"
    end

    scenario "displays all the campers" do
      expect(page).to have_content(camper_1.name)
      expect(page).to have_content(camper_1.supplies[0].name)
      expect(page).to_not have_content(camper_2.name)
    end
  end
end
