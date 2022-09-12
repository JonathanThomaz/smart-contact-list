import styled, { css } from 'styled-components';
import { IType } from 'interfaces';

export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.neutral.city};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;
export const GridCards = styled.div<IType>`
  width: 100%;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  ${({ type }) => {
    if (type === 'list') {
      return css`
        grid-template-columns: 91%;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;
