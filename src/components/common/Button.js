import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Button = () => {
  const { buttonStyle, textStyle } = styles;

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

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
// export default Button;
// Kalau pakai * di index, ngga bisa pakai default