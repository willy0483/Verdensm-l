import styled from "styled-components";

import image from "../../Assets/Footer-Background.png";

export const FooterStyled = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    grid-template-columns: repeat(2, 1fr);
  }

  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
`;

export const FooterArticle = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.color.white};
  p {
    margin: 0.5rem 0;
  }
`;

export const FooterOrganizations = styled.div`
  color: ${(props) => props.theme.color.white};
  h4 {
    margin: 0 1rem;
  }
  img {
    margin: 1rem;
  }
`;

export const TimerContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 10px;
  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
