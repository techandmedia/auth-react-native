import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledButton>
      <StyledText>
        Click me!!!
      </StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  background-color: #fff;
  border-radius: 5;
  border-width: 1;
  border-color: #007aff;
  margin-left: 5;
  margin-right: 5;
`
const StyledText = styled.Text`
  align-self: center;
  color: #007aff;
  font-size: 16;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`

export { Button };
// export default Button;
// Kalau pakai * di index, ngga bisa pakai default