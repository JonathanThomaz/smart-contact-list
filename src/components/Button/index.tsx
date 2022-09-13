import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isButtonIcon?: boolean;
  isActive?: boolean;
}

export const Button = ({
  children,
  isButtonIcon = false,
  isActive = false,
  ...rest
}: IButton) => (
  <ButtonContainer isButtonIcon={isButtonIcon} isActive={isActive}>
    <button {...rest}>{children}</button>
  </ButtonContainer>
);
