import React from "react"

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props

  return (
    <div className="controls panel">
      <button
        disabled={!closed}
        data-testid="lockButton"
        onClick={toggleLocked}
        className="toggle-btn"
      >
        {locked ? "Unlock Gate" : "Lock Gate"}
      </button>
      <button
        disabled={locked}
        data-testid="gateButton"
        onClick={toggleClosed}
        className="toggle-btn"
      >
        {closed ? "Open Gate" : "Close Gate"}
      </button>
    </div>
  )
}

export default Controls
