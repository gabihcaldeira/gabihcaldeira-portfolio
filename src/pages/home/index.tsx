import AboutMe from "../../components/aboutMe";
import BackgroundSection from "../../components/background";
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
        <BackgroundSection />
      </PageContainer>
    </>
  );
};

export default Home;
