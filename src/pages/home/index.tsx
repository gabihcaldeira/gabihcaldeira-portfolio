import AboutMe from "../../components/aboutMe";
import NavBar from "../../components/navBar";
import ProjectCard from "../../components/projectCard";
import { PageContainer } from "./style";

const Home = () => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <AboutMe />
        <ProjectCard />
      </PageContainer>
    </>
  );
};

export default Home;
