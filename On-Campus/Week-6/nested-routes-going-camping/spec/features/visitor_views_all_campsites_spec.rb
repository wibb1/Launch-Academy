require 'rails_helper'

feature "Visitor views all campsites" do

  context "by visiting the campsites url" do
    let!(:campsite_a) { create :campsite, name: "Campsite A" }
    let!(:campsite_b) { create :campsite, name: "Campsite B" }

    before do
      visit '/campsites'
    end

    scenario "displays all the campsites" do
      expect(page).to have_content("All Campsites:")
      expect(page).to have_content(campsite_a.name)
      expect(page).to have_content(campsite_b.name)
    end
  end
end
