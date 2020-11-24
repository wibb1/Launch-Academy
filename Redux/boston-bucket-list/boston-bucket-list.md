## Getting Set Up

We've built a Boston Bucket List for all those who want to get their tourist on! You can get the app set up (and take a look at it!) by running the following commands:

One tab:

```sh
et get boston-bucket-list
cd boston-bucket-list
yarn install
bundle install
yarn start
```

Second tab:

```sh
rake db:create db:migrate db:seed
rails s
```

You should see a list of activities on the bucket list, with checkboxes next to them, some checked and some unchecked. Clicking on a checkbox should toggle the "completed" status of the activity and change whether or not a check is appearing next to the activity.

### Let's talk about code

If we take a look at the code in our application, we can see that we have the following:

**On the Rails side:**

- An `activities` table
- An API endpoint for`activities#index` to fetch all activities on our bucket list
- An API endpoint for `activities#update` to toggle the completed status of each activity
- A `homes/index.html.erb` file which loads up our React app

**On the React side:**

- A `BucketListContainer` that displays each activity on our page via an `ActivityTile`
- A Redux store that uses our `activities` reducer
- A `modules/activities.js` file that holds our reducer and action creators, including our fetch calls
- The `BucketListContainer` is connected to the `activityList` via `mapStateToProps` and to the two action creators that run our fetch calls (`getActivities` and `patchActivity`) via `mapDispatchToProps`

### Your job

We want to make sure our Redux application is fully unit tested. This means we should have two files within `spec/javascript`: `actions/activities.js` and `reducers/activities.js`. They should test the following units:

#### Vanilla Action Creators

- `getActivitiesRequestSuccess`, which takes the fetched array of activities and adds it to the `activityList` in state
- `updateActivityStatus`, which takes the updated activity whose checkbox was clicked, and updates that one activity's status in our `activityList` array

#### Thunk Action Creators

- `getActivities`, which runs our fetch call to `/api/v1/activities.json` and dispatches the `getActivitiesRequestSuccess` action creator upon success
- `patchActivity`, which runs our PATCH fetch call to update a specific activity's "complete" status, and dispatches the `updateActivityStatus` action creator upon success

#### Reducer

- `activities` reducer, which sets an `initialState` and has a switch case for two different action types, `GET_ACTIVITIES_REQUEST_SUCCESS` and `UPDATE_ACTIVITY_STATUS`

Run `yarn test` to run your tests once, or `yarn test:dev` to have them continually run and update their status with any updates to your tests!
