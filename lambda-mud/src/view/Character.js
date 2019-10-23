import React from "react"
import { StyledCharacter } from "./ViewStyles/GameStyles"


const { min } = Math

export const Character = ({ x, y }) => {
  return (
    <StyledCharacter style={{ gridColumn: min(x + 1, 30), gridRow: min(y + 1, 30) }} />
  )
}
