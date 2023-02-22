import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 30px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.background.nav};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 30px 10%;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }

  .footer_title {
    margin: 10px 0px 15px;
    color: ${({ theme }) => theme.colors.text.main};
    font-size: 18px;
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: 20px;
      padding-left: 10%;
    }
  }

  > .footer_contacts {
    width: 100%;

    @media (min-width: 768px) {
      width: 70%;
      max-width: 500px;
    }

    .contacts_container {
      width: 100%;

      display: flex;
      justify-content: space-around;

      .contacts_contact {
        width: fit-content;

        display: flex;
        align-items: center;
        gap: 5px;

        color: ${({ theme }) => theme.colors.text.main};

        .contact_icon {
          color: ${({ theme }) => theme.colors.primary.main};
          font-size: 16px;
        }

        .contact_text {
          font-size: 14px;
          line-height: 14px;
          font-weight: 300;
        }

        .contact_logo {
          font-size: 10px;
        }
      }
    }
  }

  > .footer_socials {
    width: 100%;

    @media (min-width: 768px) {
      width: 30%;
      max-width: 200px;
    }

    .socials_links {
      display: flex;
      align-items: center;
      gap: 20px;

      padding-left: 20px;

      .socials_link {
        color: ${({ theme }) => theme.colors.primary.light};

        .link_icon {
          font-size: 20px;
          transition: transform 1s ease-in-out;
        }

        :hover {
          color: ${({ theme }) => theme.colors.primary.main};

          > .link_icon {
            transform: scale(1.4);
          }
        }

        :visited {
          color: ${({ theme }) => theme.colors.primary.darks};
        }
      }
    }
  }
`;
