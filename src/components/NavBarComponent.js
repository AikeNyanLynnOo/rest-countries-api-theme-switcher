import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.textColor};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 90%;
  margin: 0 auto;
`;
const HeadingOne = styled.h1`
  font-weight: 600;
`;
const IconGp = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  font-weight: 600;
  &:hover .modeIcon {
    box-shadow: 0 1px 2px 0 ${(props) => props.theme.textColor};
    border-radius: 50%;
  }
`;

const NavBar = (props) => {
  const icon = props.theme === "light" ? "moon" : "sun";
  return (
    <Nav>
      <Container>
        <HeadingOne>Where in the world?</HeadingOne>
        <IconGp>
          <img
            src={`./images/${icon}.png`}
            alt="theme"
            className="modeIcon"
            onClick={() =>
              props.theme === "light"
                ? props.changeTheme("dark")
                : props.changeTheme("light")
            }
          />
          <span>{props.theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </IconGp>
      </Container>
    </Nav>
  );
};
export default NavBar;
