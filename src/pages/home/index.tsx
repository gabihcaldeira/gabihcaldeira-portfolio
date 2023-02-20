import AboutMe from "../../components/aboutMe";
import NavBar from "../../components/navBar";
import { PageContainer } from "./style";

const Home = () => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <AboutMe />
      </PageContainer>
    </>
  );
};

export default Home;
