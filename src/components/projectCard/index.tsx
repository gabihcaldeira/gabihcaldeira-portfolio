import { CardContainer } from "./style";

const ProjectCard = () => {
  return (
    <CardContainer>
      <h4 className="card_name">Auquimia</h4>

      <div className="card_skills">
        <p className="card_skill">React</p>
        <p className="card_skill">TypeScript</p>
        <p className="card_skill">CSS</p>
      </div>

      <div className="card_description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          nisl id mauris pretium, ut eleifend massa dictum. Mauris fringilla
          fringilla eros nec volutpat. Duis ultrices purus ut nisi volutpat
          varius. Nulla facilisi. Nullam scelerisque pharetra risus, nec tempor
          nisl molestie at. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Pellentesque nec lorem libero. Proin egestas est a ligula
          scelerisque interdum. Fusce iaculis cursus libero eget lobortis.
        </p>
      </div>

      <div className="card_links">
        <a className="card_link">Repositório</a>
        <a className="card_link">Deploy</a>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
