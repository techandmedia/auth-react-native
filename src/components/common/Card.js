import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <StyledView>
      {props.children}
    </StyledView>
  );
};

const StyledView = styled.View`
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  box-shadow: 2px 12px #000;
  margin: 5px;
`

export { Card };
// export default Card;