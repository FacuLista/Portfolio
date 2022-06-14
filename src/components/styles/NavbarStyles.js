import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgb(244, 245, 249);
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: rgb(244, 245, 249);
  }

  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;
