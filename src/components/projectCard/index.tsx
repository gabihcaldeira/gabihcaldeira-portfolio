import { CardContainer, ModalCard } from "./style";
import img from "../../assets/projectsImg/Auquimia.png";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";

const ProjectCard = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <CardContainer>
      <div className="card_main" onClick={handleShowInfo}>
        <div className="card_info">
          <h4 className="card_name">Auquimia</h4>
          <div className="card_skills">
            <p className="card_skill">React</p>
            <p className="card_skill">TypeScript</p>
            <p className="card_skill">CSS</p>
          </div>
        </div>
        <img alt="imagem do projeto" src={img} className="card_img" />
      </div>

      {showInfo && (
        <ModalCard onClick={handleShowInfo}>
          <button onClick={handleShowInfo}>
            <CgCloseO className="card_icon" />
          </button>
          <h4 className="card_name">Auquimia</h4>

          <div className="card_skills">
            <p className="card_skill">React</p>
            <p className="card_skill">TypeScript</p>
            <p className="card_skill">CSS</p>
            <p className="card_skill">CSS</p>
            <p className="card_skill">CSS</p>
            <p className="card_skill">CSS</p>
            <p className="card_skill">CSS</p>
          </div>

          <div className="card_description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              finibus nisl id mauris pretium, ut eleifend massa dictum. Mauris
              fringilla fringilla eros nec volutpat. Duis ultrices purus ut nisi
              volutpat varius. Nulla facilisi. Nullam scelerisque pharetra
              risus, nec tempor nisl molestie at. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Pellentesque nec lorem libero.
              Proin egestas est a ligula scelerisque interdum. Fusce iaculis
              cursus libero eget lobortis.
            </p>
          </div>

          <div className="card_links">
            <a className="card_link">Repositório</a>
            <a className="card_link">Deploy</a>
          </div>
        </ModalCard>
      )}
    </CardContainer>
  );
};

export default ProjectCard;
