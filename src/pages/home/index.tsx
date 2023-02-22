import AboutMe from "../../components/aboutMe";
import NavBar from "../../components/navBar";
import ProjectsContainer from "../../components/projectsContainer";
import { PageContainer } from "./style";

const Home = () => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <AboutMe />
        <ProjectsContainer />
      </PageContainer>
    </>
  );
};

export default Home;
