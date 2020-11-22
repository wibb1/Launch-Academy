import React from "react"
import Enzyme, { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Adapter from "enzyme-adapter-react-16"

import TwitterFeed from "./TwitterFeed"
import Tweet from "./Tweet"

Enzyme.configure({ adapter: new Adapter() })

describe("TwitterFeed", () => {
  let wrapper
  let data = [
    {
      id: 1,
      text: "This doesn't look like Kansas",
      user: {
        name: "Todo",
        profile_image_url:
          "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg"
      }
    }
  ]

  beforeEach(() => {
    act(() => {
      wrapper = mount(<TwitterFeed data={data} />)
    })
  })

  //YOUR TEST CODE HERE
  it("should return true", () => {
    expect(true).toEqual(true)
  })
})
