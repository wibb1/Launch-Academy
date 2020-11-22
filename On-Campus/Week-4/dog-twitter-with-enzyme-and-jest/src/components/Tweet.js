import React from "react"

const Tweet = ({tweet, className, handleClick })=> {
  const { userPhoto, text, user: {profile_image_url: profileImageUrl, name}} = tweet
  return (
    <div onClick={handleClick} className={`tweet-box ${className}`}>
      <img src={profileImageUrl} />
      <span>{name}</span>
      <p>{text}</p>
    </div>
  )
}
export default Tweet
