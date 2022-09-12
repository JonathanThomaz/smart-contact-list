import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.onix};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
`;
