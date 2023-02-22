import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100vw;
  height: fit-content;
  padding-top: 110px;
  margin: 0px;

  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.main};

  @media (min-width: 768px) {
    padding: 130px 60px 20px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  > .section_info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 768px) {
      width: 100%;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }

    > .info {
      font-family: ${({ theme }) => theme.fonts.main};
      padding: 0px;

      > .info_span {
        padding-left: 50px;
        font-size: 12px;
      }

      > .info_text {
        max-width: 600px;
        margin: 15px 10px;

        font-size: 14px;
        font-size: 500;
        color: ${({ theme }) => theme.colors.text.grey.light};

        > .text_link {
          color: ${({ theme }) => theme.colors.secondary.main};
          font-weight: 500;
        }
      }
    }
  }

  > .section_info > .info_figure {
    width: 250px;
    margin: 0px auto;

    @media (min-width: 768px) {
      margin: 0px;
    }

    > .figure_caption {
      display: none;
    }

    > .figure_img {
      width: 250px;
    }
  }

  > .section_skills {
    height: fit-content;
    padding: 15px 10px 30px;

    > .skills_title {
      margin-bottom: 10px;

      font-size: 18px;
      font-weight: 300;
      color: ${({ theme }) =>
        theme.mode === "light"
          ? theme.colors.secondary.dark
          : theme.colors.secondary.light};
    }

    > .skills_icons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;

      @media (min-width: 768px) {
        gap: 30px;
        justify-content: flex-start;
      }

      > .icon_figure {
        width: fit-content;

        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;

        :hover > .icon_caption {
          display: inline;
        }

        > .icon_icon {
          font-size: 35px;
          margin: 0px auto;

          @media (min-width: 768px) {
            font-size: 45px;
          }
        }

        > .icon_caption {
          width: max-content;
          height: fit-content;
          padding: 1px 6px;
          margin: 0px auto;
          border-radius: 6px;

          background-color: ${({ theme }) => theme.colors.text.grey.light};
          color: white;
          opacity: 0.7;
          font-size: 10px;

          position: absolute;
          bottom: -20px;

          display: none;
        }
      }
    }
  }
`;

export const StyledName = styled.h2`
  margin: 0px;
  padding-left: 20px;

  font-family: ${({ theme }) => theme.fonts.highlight};
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -1.5px;

  text-align: left;
  color: ${({ theme }) => theme.colors.primary.dark};
`;
