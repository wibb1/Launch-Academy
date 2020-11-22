import React from 'react'

const Restaurant = (props) => {

  const defaultRestaurantData = {
    id: 'jm-curley-boston',
    name: 'JM Curleys',
    location: '21 Temple Pl, Boston, MA, 02111',
    description: 'Eatery specializing in innovative American comfort food, also serving beer, boozy shakes & drinks.',
    categories: ['gastropub', 'bar'],
    image: 'https://s3.amazonaws.com/horizon-production/images/restaurants/jm-curley.jpg',
    website: 'http://jmcurleyboston.com/'
  }

  return(
    <div className="grid-x grid-margin-x grid-padding-y">
      <h3></h3>
      <div className="cell">
        <img src={defaultRestaurantData.image} alt={defaultRestaurantData.name} />
      </div>

      <div className="cell">
        <p>
          <a href="#">
            <strong>{defaultRestaurantData.name}</strong>
          </a>
        </p>

        <p>{defaultRestaurantData.location}</p>
      </div>

    </div>
  )
}

export default Restaurant
