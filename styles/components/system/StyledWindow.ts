import styled from 'styled-components';

const StyledWindow = styled.section`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.window};
`;

export default StyledWindow;
