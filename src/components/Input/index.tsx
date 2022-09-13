import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  width: 312px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid #d2dfe6;
  outline: none;
  margin: 0;
  padding: 0 1rem;
  color: #8ca0b3;
  ::placeholder {
    color: #8ca0b3;
  }
  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
