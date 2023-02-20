import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: fit-content;

  position: absolute;
  z-index: 9999;
  top: 17.5px;
  left: 10px;

  > .button {
    background: none;

    > .button_icon {
      font-size: 25px;
      color: ${({ theme }) => theme.colors.text.grey.light};
    }
  }
`;
