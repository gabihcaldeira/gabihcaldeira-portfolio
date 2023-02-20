import { SectionContainer, StyledName } from "./style";
import ProfileImg from "../../assets/profilePhoto.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { useContext } from "react";
import { ColorModeContext } from "../../context/themeColorMode";

const AboutMe = () => {
  const { mode } = useContext(ColorModeContext);
  return (
    <SectionContainer id="section_AboutMe">
      <div className="section_info">
        <figure className="info_figure">
          <img alt="foto de perfil" src={ProfileImg} className="figure_img" />
          <figcaption className="figure_caption">foto de perfil</figcaption>
        </figure>
        <div className="info">
          <span className="info_span"> Óla, meu nome é</span>
          <StyledName>Gabriela Caldeira</StyledName>
          <p className="info_text">
            Formada em engenharia química, mas me tornei Desenvolvedora
            Full-Stack pela{" "}
            <Link
              to="https://kenzie.com.br"
              target="_blank"
              className="text_link"
            >
              Kenzie Academy Brasil
            </Link>
            . Gosto muito de usar minha criatividade e organização nos meus
            códigos, e acho fascinante em como existem várias maneiras de codar
            em uma ou diversas linguagens.
          </p>
        </div>
      </div>

      <div className="section_skills">
        <h3 className="skills_title">Tecnologias</h3>

        <div className="skills_icons">
          <figure className="icon_figure">
            <Icon icon="vscode-icons:file-type-html" className="icon_icon" />
            <figcaption className="icon_caption">HTML</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="vscode-icons:file-type-css" className="icon_icon" />
            <figcaption className="icon_caption">CSS</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="logos:javascript" className="icon_icon" />
            <figcaption className="icon_caption">JavaScript</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="logos:react" className="icon_icon" />
            <figcaption className="icon_caption">React</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon
              icon="vscode-icons:file-type-typescript-official"
              className="icon_icon"
            />
            <figcaption className="icon_caption">TypeScript</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="vscode-icons:file-type-node" className="icon_icon" />
            <figcaption className="icon_caption">Node</figcaption>
          </figure>

          <figure className="icon_figure">
            {mode === "light" ? (
              <Icon icon="skill-icons:expressjs-light" className="icon_icon" />
            ) : (
              <Icon icon="skill-icons:expressjs-dark" className="icon_icon" />
            )}
            <figcaption className="icon_caption">Express</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="logos:python" className="icon_icon" />
            <figcaption className="icon_caption">Python</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="vscode-icons:file-type-django" className="icon_icon" />
            <figcaption className="icon_caption">Django</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="skill-icons:styledcomponents" className="icon_icon" />
            <figcaption className="icon_caption">Styled-components</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="logos:react-router" className="icon_icon" />
            <figcaption className="icon_caption">React Router</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="logos:postgresql" className="icon_icon" />
            <figcaption className="icon_caption">PostgeSQL</figcaption>
          </figure>

          <figure className="icon_figure">
            <Icon icon="logos:typeorm" className="icon_icon" />
            <figcaption className="icon_caption">TypeORM</figcaption>
          </figure>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
