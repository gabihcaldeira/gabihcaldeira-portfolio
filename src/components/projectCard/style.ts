import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;

  .card_name {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) =>
      theme.mode === "light"
        ? theme.colors.primary.dark
        : theme.colors.primary.light};

    position: relative;
  }

  .card_skills {
    max-width: 350px;
    margin: 10px 0px;

    overflow-x: scroll;
    display: flex;
    gap: 10px;

    position: relative;

    > .card_skill {
      padding: 2px 10px;
      border-radius: 5px;

      color: ${({ theme }) =>
        theme.mode === "light"
          ? theme.colors.primary.dark
          : theme.colors.primary.light};
      background-color: ${({ theme }) =>
        theme.mode === "light"
          ? theme.colors.primary.light
          : theme.colors.primary.dark};

      font-size: 12px;
    }
  }

  > .card_main {
    width: 215px;
    height: 150px;
    border-radius: 20px;

    position: relative;

    :hover {
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.shadows.box};
    }

    > .card_info {
      width: 215px;
      height: 150px;
      padding: 15px 10px;

      background-color: ${({ theme }) => theme.colors.background.card};
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: absolute;
    }

    > .card_img {
      width: 215px;
      height: 150px;

      border-radius: 20px;
    }
  }
`;

export const ModalCard = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.background.main};

  > .card_content {
    width: 310px;
    padding: 25px;
    margin: 350px auto;

    border-radius: 25px;

    box-shadow: ${({ theme }) => theme.shadows.box};
    background-color: ${({ theme }) => theme.colors.secondary.dark};

    @media (min-width: 768px) {
      margin-top: 300px;
    }

    @media (min-width: 1024px) {
      margin-top: 200px;
    }

    @media (min-width: 1440px) {
      margin-top: 300px;
    }

    .card_name {
      font-size: 20px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondary.light};

      position: relative;
      z-index: 9;
    }

    .card_skills {
      max-width: 350px;
      margin: 10px 0px;

      overflow-x: scroll;
      display: flex;
      gap: 10px;

      position: relative;
      z-index: 9;

      > .card_skill {
        padding: 2px 10px;
        border-radius: 5px;

        background-color: ${({ theme }) => theme.colors.secondary.light};
        color: ${({ theme }) => theme.colors.secondary.dark};

        font-size: 12px;
      }
    }

    .card_icon {
      font-size: 25px;
      color: ${({ theme }) => theme.colors.secondary.light};

      position: absolute;
      z-index: 9;
      top: 15px;
      right: 30px;

      opacity: 0.5;

      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

      :hover {
        cursor: pointer;
        opacity: 1;

        transform: scale(1.2);
      }
    }

    > .card_description {
      > p {
        height: 200px;
        overflow-y: scroll;

        text-align: justify;
        font-size: 14px;

        color: ${({ theme }) => theme.colors.text.main};
      }
    }

    > .card_links {
      margin: 20px 0px;
      display: flex;
      gap: 20px;

      > .card_link {
        color: ${({ theme }) => theme.colors.secondary.main};
        font-weight: 600;

        :hover {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.secondary.light};
        }
      }
    }
  }
`;
