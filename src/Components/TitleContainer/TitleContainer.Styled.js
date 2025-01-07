import styled from "styled-components";

export const TitleContainerStyled = styled.div`
  background-color: ${(props) => props.theme.color.background};
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  h2 {
    color: ${(props) => props.theme.color.text};
    font-size: 1.5rem;
    margin: 0;
    padding: 0.5rem;
  }
`;
