### Learning Goals
* Become acquainted with third party api documentation as well as the associated API keys
* Construct a backend API request with Faraday
* Understand how to interact with a third party API in a full-stack application with React

### Getting Started
```no-highlight
et get interacting-with-a-third-party-api
cd interacting-with-a-third-party-api
bundle install
ruby server.rb
```

In a seperate tab:
```no-highlight
yarn install
yarn start
```

Note: This exercise uses the OpenWeather API. However, API providers change their rules all the time. If you cannot complete this assignment with OpenWeather, try the [Giphy API](https://developers.giphy.com/) instead, and grab a gif from your favorite TV show!

Navigating to <http://localhost:4567/home> should show the text "Interacting with a Third Party Api" on the screen, which is being rendered by React.

### Instructions

Much of the app has been set up for you, however you will need to follow the steps below to understand how it will work in its entirety.

1. Create a [new account](https://home.openweathermap.org/users/sign_up) on OpenWeather to get an API key.

  After signing in, you should see a [API Keys](https://home.openweathermap.org/api_keys) tab where your default secret key is located.

  Navigating to the OpenWeather API Subscriptions [page](https://home.openweathermap.org/subscriptions) shows us further that you are limited in terms of the number of times you can make an HTTP for information in a given period of time. Your API key is OpenWeather's way of tracking your request count. This is why it is essential that you keep your key secret from the internet, less someone malicious uses it and either locks you out of your account or charges your credit card (if linked to one). As such, please do not commit your API key to git to avoid it being shared with the public.

  For now, add your key to the `server.rb` file at the constant `OPEN_WEATHER_API_KEY`.

  In the future, we would ideally add this key to a hidden file (e.g. dotenv or secrets.yml) that is specifically not committed in Git.

2. Test out your internal API endpoint, that is setup to communicate with OpenWeather.

  Lets evaluate our route at `get "/api/v1/forecast"`.

  ```ruby
  get "/api/v1/forecast" do
    city_name = params[:city_name]

    url = "api.openweathermap.org/data/2.5/weather?q=#{city_name}&appid=#{OPEN_WEATHER_API_KEY}"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)

    status 200
    content_type :json

    json parsed_response
  end
  ```

  Here, we have an **internal API endpoint**, in that this is a route whose responsibility it is to return JSON information on request. However, we wish to interact with OpenWeather's **third-party-api**. It's a "third-party" in that it is not our own, and requires additional setup to allow us to connect with it.

  This endpoint is expecting a request with one param, `city_name`. It will then use those two params to make our third-party api request using the Faraday gem. An example of a request we need to hit this endpoint could then look like the following:

  ```
  http://localhost:4567/api/v1/forecast?city_name=boston
  ```
  `city_name` is added as a param by using the `?` notation at the end of the path. This designates that the subsequent key value pairs are parameters. An HTTP key value pair is designated with an `=`, and each parameter should be separated with a `&`.

3. Interact with the OpenWeather API

  Once we have our required params and our API key, we are ready to make a request to OpenWeather.

  How do we know that these two items are what we need? In the corresponding documentation, OpenWeather has given us a [sample format](https://openweathermap.org/current)

  ```
  api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  <!-- or, as a possible example -->
  api.openweathermap.org/data/2.5/weather?q=London
  ```

  Other APIs will often have a similar format, or they will require that you designate parameters as more standard query parameters (which we used for our internal endpoint request!) e.g.

  ```
  https://api.openweathermap.org/data/2.5/weather?q=boston&appid=12345678901234567890
  ```

  More advanced APIs may even require specific headers and additional options or keys!

  As long as our Faraday HTTP request matches this pattern, our request should succeed. Navigate to http://localhost:4567/api/v1/forecast?city_name=boston and we should see the JSON from OpenWeather returned from our own endpoint.


```js
{
  "coord": {
    "lon": -71.06,
    "lat": 42.36
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 279.25,
    "feels_like": 273.25,
    "temp_min": 277.04,
    ...
```

Fantastic! We have successfully made contact with another web application! This is an absolutely essential skill to learn, as no web application exists in a vacuum.

### Using Our New Data

We now have a great endpoint to make fetch requests to.

4. Using Sinatra, React and the Fetch API, retrieve the current forecast for Boston. Make sure to show the summary, nearest storm distance, probability of precipitation and temperature!

5. **Bonus:** Add a form to the page that allows the user to add their own latitude and longitude as inputs. This form should submit its fetch request to the same endpoint as earlier, and ideally update the page with the correct forecast based on those coordinates.
