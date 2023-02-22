import ColorModeButton from "../colorModeButton";
import { LinksContainer, NavContainer, StyledTitle } from "./style";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <NavContainer>
      <ColorModeButton />
      <StyledTitle>
        Gabriela
        <span>Caldeira</span>
      </StyledTitle>

      <LinksContainer>
        <HashLink to="#section_AboutMe">Sobre Mim</HashLink>
        <HashLink to="#section_projects">Projetos</HashLink>
        <HashLink to="">Experiência</HashLink>
      </LinksContainer>
    </NavContainer>
  );
};

export default NavBar;
