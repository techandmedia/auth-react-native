import React, { Component } from "react";
import styled from "styled-components";

const Input = ({
  label,
  onChangeInput,
  placeholder,
  secureTextEntry,
  value
}) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        // iOS only, autoCorrect set to false to prevent iOS giving suggestion if the email address correct or not, in which it maybe valid
        autoCorrect={false}
        value={value}
        onChangeText={onChangeInput}
        underlineColorAndroid="transparent"
      />
    </StyledContainer>
  );
};

export { Input };

const StyledContainer = styled.View`
  height: 40;
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #041006;
`;

const StyledLabel = styled.Text`
  font-size: 16;
  padding-left: 10;
  flex: 1;
  color: #fff2fd;
`;

const StyledTextInput = styled.TextInput`
  border-radius: 5;
  border-width: 1;
  color: #041006;
  background-color: #fff2fd;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 8; ${
    "" /* Android only, atur ini agar input centre vertical*/
  }
  font-size: 16;
  flex: 2;${
    "" /* Ukuran StyledTextInput 4x lebih lebar dari StyledLabel, atur sesuai kebutuhan */
  }
  ${"" /* margin-left: -5; */}
  ${"" /* line-height: 20; */}
  ${"" /* text-decoration-line: none; */}
  ${
    "" /* kalau tanpa container, masukan padding agar center?
  padding-top: -2px;
  padding-bottom: -2px; */
  }
`;
