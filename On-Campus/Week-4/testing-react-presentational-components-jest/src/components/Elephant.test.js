import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import Elephant from "./Elephant"

describe("Elephant", () => {
  it("should return true", () => {
    expect(true).toEqual(true)
  })
})
