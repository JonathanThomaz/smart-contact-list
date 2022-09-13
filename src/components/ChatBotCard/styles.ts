import { IRandomColor, IType } from 'interfaces';
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface TButtonCard extends ButtonHTMLAttributes<HTMLButtonElement> {
  cardType: 'list' | 'block';
}

export const Card = styled.div<TButtonCard>`
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  display: flex;
  ${({ cardType }) => {
    if (cardType === 'list') {
      return css`
        width: 100%;
        height: 60px;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
      `;
    }
    return css`
      width: 188px;
      height: 192px;
    `;
  }}
`;
export const FavoriteContainer = styled.div<IType>`
  position: absolute;
  ${({ type }) => {
    if (type === 'list') {
      return css`
        left: -50px;
      `;
    }
  }}
`;

export const Content = styled.div<IType>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  ${({ type }) => {
    if (type === 'list') {
      return css`
        justify-content: flex-start;
        flex-direction: row;
      `;
    }
  }}
`;
export const RandomColor = styled.div<IRandomColor>`
  border-radius: 100%;
  width: 56px;
  height: 56px;
  ${({ type }) => {
    if (type === 'list') {
      return css`
        width: 28px;
        height: 28px;
      `;
    }
  }}
  background-color: ${({ color }) => color};
`;
export const Name = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.neutral.city};
`;
export const Type = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.rooftop};
`;
export const CreatedAt = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;

  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.rooftop};
`;
