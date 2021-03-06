import styled, { css } from 'styled-components'

const StyledPageContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export default StyledPageContentWrapper;
