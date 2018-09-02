import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledButton>
      <StyledText>
        {props.buttonText}
      </StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  background-color: #041006;
  border-radius: 5;
  border-width: 1;
  border-color: #fff2fd;
`
const StyledText = styled.Text`
  align-self: center;
  color: #fff2fd;
  font-size: 16;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`

export { Button };
// export default Button;
// Kalau pakai * di index, ngga bisa pakai default