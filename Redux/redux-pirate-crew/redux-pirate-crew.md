Launch Academy has decided to take to the high seas, and started a pirate crew. However, it's an incredibly difficult task to keep track of our crew with all the swashbuckling that's happening! Let's build an app so we can keep track of who's currently in our crew.

## Setup

To get started, run the following:

```no-highlight
et get redux-pirate-crew
cd redux-pirate-crew
open index.html
```

You should see a page that looks like the below, with no errors in your console.

![Redux Pirate Crew Starter App][initial-screenshot]

## User Stories

Before getting started, take a good look at the provided `index.html` file to see what the different sections of the page are. Then, get started on the below user stories.

##### Add a new pirate to our crew

```no-highlight
As a captain
I want to add a new pirate to my crew
So I can keep track of any new crew members
```

Acceptance Criteria:

- Using the "Add a new Crew Member" form, a captain can type in the name of a new crew member.
- When they hit submit, the new crew member should be added to a list of `currentCrewMembers` in the store.

##### List current crew members

```no-highlight
As a captain
I want to see a list of my current crew members
So I can manage Roll Call
```

Acceptance Criteria:
- In order to handle [Roll Call][roll-call-video], we need our page to include a list of all current crew members.
- All members should be listed underneath "The Current Crew" section.

##### Make pirates walk the plank

```no-highlight
As a captain
I want to make my oldest crew members walk the plank
So that I avoid long-standing allegiances and potential mutinies
```

Acceptance Criteria:

- Upon clicking the "Walk the Plank" button, the first (and most long-standing) member of the current crew should be forced to walk the plank.
- This member should be removed from the current crew list, and added to a list under "Who walked the plank?"
- Additionally, the number of pirates who have walked the plank should be updated.
- Tip: When organizing your state, try to maintain the least amount of data possible! In other words, have as few key-value pairs in your state as you can while still holding the information you need to update your page.

[initial-screenshot]: https://s3.amazonaws.com/horizon-production/images/redux-pirate-preview.png
[roll-call-video]:https://www.youtube.com/watch?v=vyKwJRzfz60