import React from "react"
import { render, fireEvent, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import Controls from "./Controls"

afterEach(cleanup)

describe("Controls", () => {
  it("when locked, gate button does not call toggleClosed", () => {
    const toggleClosed = jest.fn()
    const props = {
      locked: true,
      closed: true,
      toggleLocked: () => {},
      toggleClosed
    }
    const { getByTestId } = render(<Controls {...props} />)
    fireEvent.click(getByTestId("gateButton"))
    expect(toggleClosed).not.toHaveBeenCalled()
  })
  it("when not locked, gate button does call toggleClosed", () => {
    const toggleClosed = jest.fn()
    const props = {
      locked: false,
      closed: true,
      toggleLocked: () => {},
      toggleClosed
    }
    const { getByTestId } = render(<Controls {...props} />)
    fireEvent.click(getByTestId("gateButton"))
    expect(toggleClosed).toHaveBeenCalled()
  })

  it("when closed, does call toggleLocked", () => {
    const toggleLocked = jest.fn()
    const props = {
      locked: false,
      closed: true,
      toggleLocked
    }
    const { getByTestId } = render(<Controls {...props} />)
    fireEvent.click(getByTestId("lockButton"))
    expect(toggleLocked).toHaveBeenCalled()
  })
  it("when open, does not call toggleLocked", () => {
    const toggleLocked = jest.fn()
    const props = {
      locked: false,
      closed: false,
      toggleLocked
    }
    const { getByTestId } = render(<Controls {...props} />)
    fireEvent.click(getByTestId("lockButton"))
    expect(toggleLocked).not.toHaveBeenCalled()
  })
})
