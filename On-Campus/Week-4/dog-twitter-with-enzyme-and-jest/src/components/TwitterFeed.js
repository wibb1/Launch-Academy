import React, { useState } from "react"
import Tweet from "./Tweet"

const TwitterFeed = (props) => {
  const [selectedTweetId, setSelectedTweetId] = useState(null)
  const handleSelectedTweet = (id) => {
    setSelectedTweetId(id)
  }

  let className;

  const tweets = props.data.map((tweet) => {
    if (tweet.id === selectedTweetId) {
      className = "selected"
    } else {
      className = ""
    }

    let handleClick = () => {
      handleSelectedTweet(tweet.id)
    }

    return (
      <Tweet
        key={tweet.id}
        tweet={tweet}
        handleClick={handleClick}
        className={className}
      />
    )
  })
  
  return (
    <div>
      <h1>Welcome to Dog Twitter</h1>
      {tweets}
    </div>
  )
}

export default TwitterFeed
