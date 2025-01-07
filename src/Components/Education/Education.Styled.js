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
