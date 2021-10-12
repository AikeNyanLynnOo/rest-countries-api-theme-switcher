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
  font-weight: 800;
  @media (max-width: 580px) {
    font-weight: 600;
    font-size: 20px;
  }
  @media (max-width: 200px) {
    font-weight: 600;
    font-size: 14px;
  }
`;
const IconGp = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
`;

const Icon = styled.img`
  display: inline-block;
  height: 18px;
  margin-right: 5px;
  vertical-align: middle;
  padding: 7px;
  cursor: pointer;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  &:hover {
    box-shadow: 0 1px 2px 0 ${(props) => props.theme.textColor};
  }
`;
const NavBar = (props) => {
  const icon = props.theme === "light" ? "moon" : "sun";
  return (
    <Nav>
      <Container>
        <HeadingOne>Where in the world?</HeadingOne>
        <IconGp>
          <Icon
            src={`./images/${icon}.png`}
            alt="theme"
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
