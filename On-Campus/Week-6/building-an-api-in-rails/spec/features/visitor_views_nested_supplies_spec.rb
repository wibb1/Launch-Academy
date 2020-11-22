require 'rails_helper'

feature "Visitor views supplies nested under campers" do

  context "by visiting the nested campers/:camper_id/supplies url" do
    let(:camper_a) { create :camper } 
    let(:camper_b) { create :camper } 
    let!(:supply_1) { create :supply, name: "Bacon!", camper: camper_a }
    let!(:supply_2) { create :supply, name: "Eggs!", camper: camper_b }

    before do 
      visit "/campers/#{camper_a.id}/supplies"
    end

    scenario "displays the supplies belonging to that camper" do
      expect(page).to have_content("Supplies Brought by #{camper_a.name}")
      expect(page).to have_content(supply_1.name)
      expect(page).to_not have_content(supply_2.name)
    end
  end
end
