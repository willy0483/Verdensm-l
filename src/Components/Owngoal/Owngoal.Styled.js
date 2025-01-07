import styled from "styled-components";

export const OwngoalStyled = styled.section``;

export const MakeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 0;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Create = styled.div`
  padding: 1rem;

  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    margin-bottom: 2rem;
  }

  section {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
      input {
        padding: 0.5rem;
        border: 1px solid #999999;
        color: #999999;
        border-radius: 4px;
        width: 300px;
      }
    }

    div:first-child {
      label {
        margin-right: 1rem;
      }
    }
  }
`;

export const YourGoal = styled.section`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.color.white};

  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
