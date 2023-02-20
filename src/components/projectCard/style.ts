import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 350px;
  padding: 25px;

  border-radius: 25px;

  box-shadow: ${({ theme }) => theme.shadows.box};

  > .card_name {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  > .card_skills {
    margin: 10px 0px;
    display: flex;
    gap: 10px;

    > .card_skill {
      padding: 2px 10px;
      border-radius: 5px;

      background-color: ${({ theme }) => theme.colors.secondary.light};
      color: ${({ theme }) => theme.colors.secondary.dark};

      font-size: 12px;
    }
  }

  > .card_description {
    > p {
      max-height: 180px;
      overflow-y: scroll;

      text-align: justify;
      font-size: 14px;

      color: ${({ theme }) => theme.colors.text.grey.light};
    }
  }

  > .card_links {
    margin: 20px 0px;
    display: flex;
    gap: 20px;

    > .card_link {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 600;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
