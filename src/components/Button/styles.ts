import styled, { css } from 'styled-components';
interface IButtonContainer {
  isButtonIcon: boolean;
  isActive: boolean;
}
export const ButtonContainer = styled.div<IButtonContainer>`
  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.ghost};
  }
  ${({ isButtonIcon, theme, isActive }) => {
    if (isButtonIcon)
      return css`
        width: 40px;
        height: 40px;
        background-color: transparent;
        button {
          color: ${isActive
            ? theme.colors.neutral.mediumElephant
            : theme.colors.neutral.mediumWave};
        }
      `;
    return css`
      width: 129px;
      height: 40px;
      background-color: ${theme.colors.primary.main};
    `;
  }};

  border-radius: 8px;
`;
