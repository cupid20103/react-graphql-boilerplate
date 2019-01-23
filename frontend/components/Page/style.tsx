import styled from 'styled-components';

export const StyledPage = styled.div`
  background: white;
  margin: 1.33rem;
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;