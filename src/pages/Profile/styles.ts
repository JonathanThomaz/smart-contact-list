import styled, { css } from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 0;
`;

export const BotInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //neutral off
  background-color: #dee8ec;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.neutral.city};
`;
export const Id = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral.desk};
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

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

interface IGridItem {
  collumSpan?: number;
  rowSpan?: number;
}
export const GridItem = styled.div<IGridItem>`
  width: 100%;
  height: 212px;
  background-color: white;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  grid-column: span ${({ collumSpan }) => collumSpan};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GridItemTrasnparent = styled.div<IGridItem>`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  grid-column: span ${({ collumSpan }) => collumSpan};
  grid-row: span ${({ rowSpan }) => rowSpan};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ITypography {
  fontSize?: string;
  fontWeight?: number;
}
export const Typography = styled.span<ITypography>`
  ${({ fontSize, fontWeight }) => css`
    font-weight: ${fontWeight ? fontWeight : 400};
    font-size: ${fontSize ? fontSize : '12px'};
  `}
  color: ${({ theme }) => theme.colors.neutral.city};
`;

export const UserCultureContainer = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

export const NotFound = styled.div`
  text-align: center;
  width: 100%;
`;
