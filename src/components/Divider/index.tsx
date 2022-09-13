import styled from 'styled-components';

export const Divider = styled.hr`
  width: 100%;
  margin: 30px 0;
  border: 1px solid ${({ theme }) => theme.colors.neutral.wave};
`;
