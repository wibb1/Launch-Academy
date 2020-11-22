require "spec_helper"

feature "when navigating to index page" do
  scenario "user sees all article items" do
    CSV.open("articles.csv", "a", headers: true) do |csv|
      title = "Unicorns: What You Should Know"
      description = "Everything!!!"
      url = "http://www.unicornknowledge.com"
      csv.puts([title, description, url])
    end

    visit "/articles"
    expect(page).to have_content("Unicorns: What You Should Know")
    expect(page).to have_content("Everything!!!")
    expect(page).to have_content("http://www.unicornknowledge.com")
  end
end

feature "when adding a new article" do
  scenario "user is redirected to index and sees article if successful" do
    visit "/articles/new"

    fill_in "Title", with: "Mushrooms are from Space"
    fill_in "Description", with: "totes aliens yo"
    fill_in "URL", with: "http://www.mushroomsspace.com"
    click_on "Add Article"

    expect(page).to have_content("Mushrooms are from Space")
    expect(page.current_path).to eq "/articles"
  end

  scenario "user remains on page if form submission is unsuccessful" do
    visit "/articles/new"
    click_on "Add Article"

    expect(page.current_path).to eq "/articles/new"
  end
end
