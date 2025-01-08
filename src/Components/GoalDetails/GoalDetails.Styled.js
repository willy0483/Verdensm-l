import styled from "styled-components";

export const GoalDetailsStyled = styled.section`
  p {
    margin: 1rem 0;
  }
  article {
    margin: 0 2rem;
  }
  iframe {
    margin: 0 2rem;
  }
  h2 {
    margin: 1rem 2rem;
  }
`;

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  padding-top: 30.5%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
