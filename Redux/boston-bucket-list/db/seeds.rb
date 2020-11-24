activities = [
  {
    name: 'Ride the Swan Boats',
    complete: false
  },
  {
    name: 'Visit Harpoon Brewery',
    complete: true
  },
  {
    name: 'Walk the Freedom Trail',
    complete: true
  },
  {
    name: 'Tour Fenway Park',
    complete: true
  },
  {
    name: 'Duck Tour!',
    complete: false
  },
  {
    name: "Taste test: Mike's vs. Modern Cannolis",
    complete: true
  },
  {
    name: 'Explore the Museum of Science',
    complete: false
  },
  {
    name: 'Ice Skate at the Frog Pond',
    complete: false
  },
  {
    name: 'Kayak on the Charles',
    complete: false
  }
]

activities.each { |activity| Activity.create(activity) }
