import styled from "styled-components";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      text-align: center;
      margin: 0 1rem;
      a {
        font-size: 1rem;
        text-decoration: none;
        color: ${(props) => props.theme.color.black};
      }
    }
  }
  .active {
    color: ${(props) => props.theme.color.primary};
  }
`;
