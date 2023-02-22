import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100vw;
  min-height: 60px;
  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.nav};
  box-shadow: ${({ theme }) => theme.shadows.box};
  color: ${({ theme }) => theme.colors.text.main};

  position: fixed;
  z-index: 9999;

  @media (min-width: 768px) {
    height: 60px;
    padding: 20px 60px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.highlight};
  font-size: 32px;
  text-align: center;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin: 0px;
  }

  > span {
    font-family: ${({ theme }) => theme.fonts.highlight};
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const LinksContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > a {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.primary.main};

    :hover {
      text-decoration: underline;
    }
  }
`;
