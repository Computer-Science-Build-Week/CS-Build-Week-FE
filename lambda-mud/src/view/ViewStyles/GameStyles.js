import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  padding: 20px;
`;
export const GameArena = styled.section`
  position: relative;
  display: grid;
  grid-template: ${({ width, height }) =>
    `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
  justify-content: center;
  justify-self: center;
  align-self: center;
  box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
  border: 1px solid green;
  @media (min-width: 90rem) {
    grid-template: ${({ width, height }) =>
      `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
  }
`;

export const StyledBorder = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template: ${({ width, height }) =>
    `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
  z-index: 10;
  @media (min-width: 90rem) {
    grid-template: ${({ width, height }) =>
      `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
  }
`;


export const StyledCharacter = styled.div`
  background: gold;
  margin: 2px;
  border-radius: 2px;
`