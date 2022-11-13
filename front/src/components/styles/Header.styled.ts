import styled from 'styled-components';

export const StyledHeader = styled.header<{ textColor: string }>`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${(props) => props.textColor};
  padding: 40px 0;
`;
