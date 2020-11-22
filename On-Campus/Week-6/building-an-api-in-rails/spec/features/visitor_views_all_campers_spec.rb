require 'rails_helper'

feature "Visitor views all campers" do

  context "by visiting the campers url" do
    let!(:camper_1) { create :camper }
    let!(:camper_2) { create :camper }

    before do 
      visit '/campers'
    end

    scenario "displays all the campers" do
      expect(page).to have_content("All Campers:")
      expect(page).to have_content(camper_1.name)
      expect(page).to have_content(camper_2.name)
    end
  end
end
