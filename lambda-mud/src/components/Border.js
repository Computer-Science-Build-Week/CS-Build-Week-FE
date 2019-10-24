import React from "react"
import { StyledBorder } from "../components/styles/ComponentStyles"

const { min } = Math

const showBorder = dir => (dir ? "1px solid #f8f8ff" : "1px solid #1b1e23")

export const Border = ({ maze }) => (
  <StyledBorder>
    {maze.map(row =>
      row.map(({ x, y, top, left, right, bottom }) => (
        <div
          key={`${x}-${y}`}
          style={{
            gridColumn: `${min(x + 1, 30)} / span 1`,
            gridRow: `${min(y + 1, 30)}/ span 1`,
            borderRight: showBorder(right),
            borderLeft: showBorder(left),
            borderTop: showBorder(top),
            borderBottom: showBorder(bottom)
          }}
        />
      ))
    )}
  </StyledBorder>
)
