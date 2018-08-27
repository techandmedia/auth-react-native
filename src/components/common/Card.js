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
  border-color: red;
  border-bottom-width: 0;
  shadow-color: orange;
  shadow-offset: {width: 10px, height: 2px};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10;
`

export { Card };
// export default Card;