require 'rails_helper'

feature "Visitor views a single campers name" do

  context "by visiting the campers/:id url" do
    let!(:camper_1) { create :camper }
    let!(:camper_2) { create :camper }

    before do
      visit "/campers/#{camper_1.id}"
    end

    scenario "displays all the campers" do
      expect(page).to have_content(camper_1.name)
      expect(page).to have_content(camper_1.campsite.name)
    end
  end
end
