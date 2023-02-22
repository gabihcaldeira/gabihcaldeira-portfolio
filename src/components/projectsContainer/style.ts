import styled from "styled-components";

export const ProjectsSection = styled.div`
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.background.main};

  @media (min-width: 768px) {
    padding: 40px;
  }

  .projects_title {
    height: fit-content;
    padding: 25px 0px;

    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 28px;
    font-weight: 300;

    @media (min-width: 768px) {
      padding: 0px 35px;
    }

    @media (min-width: 1024px) {
      width: fit-content;
      margin: auto;
      font-size: 40px;
    }
  }

  .projects_content {
    width: 100%;
    padding: 40px 0px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 30px;

    overflow-x: scroll;
    position: relative;
    z-index: 99;

    @media (min-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    @media (min-width: 1024px) {
      gap: 30px;
    }
  }
`;
