import styled from "styled-components";

export const SeventeenGoalsStyled = styled.section`
  background-color: ${(props) => props.theme.color.background};
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    padding: 0 2rem 2rem 2rem;
    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.m}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: ${(props) =>
        props.theme.grid.breakpoints.l}) {
      grid-template-columns: repeat(6, 1fr);
    }

    a {
      text-decoration: none;
    }
  }
`;
