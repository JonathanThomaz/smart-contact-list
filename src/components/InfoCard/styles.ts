import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  gap: 16px;
`;
export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Number = styled.span`
  display: flex;
  gap: 8px;
  font-weight: 800;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.neutral.city};
`;
export const Message = styled.span`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral.city};
`;
