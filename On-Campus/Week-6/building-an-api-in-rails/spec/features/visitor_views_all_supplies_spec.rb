require 'rails_helper'

feature "Visitor views all supplies" do

  context "by visiting the campers url" do
    let!(:supply_1) { create :supply, name: "Bacon!" }
    let!(:supply_2) { create :supply, name: "Eggs!" }

    before do 
      visit '/supplies'
    end

    scenario "displays all the supplies" do
      expect(page).to have_content("All Supplies:")
      expect(page).to have_content(supply_1.name)
      expect(page).to have_content(supply_2.name)
    end
  end
end
