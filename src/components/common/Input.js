import React, { Component } from "react";
import styled from "styled-components";

const Input = ({ label, value, onChangeText }) => {
  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="#fff"
      />
    </StyledView>
  );
};

export { Input };

const StyledLabel = styled.Text``;

const StyledView = styled.View``;
const StyledTextInput = styled.TextInput`
  width: auto;
  padding-top: -2px;
  padding-bottom: -2px;
  background-color: #fff;
  text-decoration-line: none;
`;
