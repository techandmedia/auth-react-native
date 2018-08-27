import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledText>{props.headerText}</StyledText>
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  height: 40;
  padding: 5px 0;
  box-shadow: 2px 2px #000;
  elevation: 2;
  position: relative;
`
const StyledText = styled.Text`
  font-size: 20;
`

export { Header };

// Make the component available to other parts of the app
// export default Header;