import React from 'react';
import styled from 'styled-components';

const CardSection = (props) => {
  return (
    <StyledCardSection>
      {props.children}
    </StyledCardSection>
  );
};

const StyledCardSection = styled.View`
  border-bottom-width: 1;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  border-color: #ddd;
  position: relative;
`

export { CardSection };
// export default CardSection;