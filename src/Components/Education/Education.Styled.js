import styled from "styled-components";

import { ResetList } from "../../Styles/Mixins";

export const EducationStyled = styled.section`
  article {
    margin: 0 2rem;
  }
`;

export const EducationSubjects = styled.ul`
  ${ResetList};
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SubjectStyled = styled.li`
  background-color: ${(props) => props.background};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 250px;
  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.color.white};
  }
`;
