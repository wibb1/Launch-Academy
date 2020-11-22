require 'rails_helper'

feature "Visitor views campers nested under campsites" do
  let(:campsite_a) { create :campsite, name: "Campsite A" } 
  let(:campsite_b) { create :campsite, name: "Campsite B" } 
  let!(:camper_1) { create :camper, campsite: campsite_a }
  let!(:camper_2) { create :camper, campsite: campsite_b }

  context "by visiting the nested campsites/:campsite_id/campers url" do

    before do
      visit "/campsites/#{campsite_a.id}/campers"
    end

    scenario "displays the campers belonging to that campsite" do
      expect(page).to have_content("Campers bunking in #{campsite_a.name}")
      expect(page).to have_content(camper_1.name)
      expect(page).to_not have_content(camper_2.name)
    end
  end
end
