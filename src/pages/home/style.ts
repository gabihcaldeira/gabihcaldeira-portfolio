import styled from "styled-components";
import bgImg from "../../assets/background.svg";

export const PageContainer = styled.div`
  width: 100vw;
  height: 1000px;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${bgImg});
  background-repeat: repeat-y;
  background-size: contain;
`;
