import React, { Component } from "react";
import styled from "styled-components";

const Input = ({ label, onChangeEmail, placeholder, value }) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput
        placeholder={placeholder}
        // iOS only, autoCorrect set to false to prevent iOS giving suggestion if the email address correct or not, in which it maybe valid
        autoCorrect={false}
        value={value}
        onChangeText={onChangeEmail}
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
  ${'' /* justify-content: center; */}
  background-color: #fff;
`;

const StyledLabel = styled.Text`
  font-size: 18;
  padding-left: 10;
  flex: 1;
`;

const StyledTextInput = styled.TextInput`
  color: #000;
  padding-right: 10;
  padding-bottom: 8; ${"" /* Android only, atur ini agar input centre vertical*/}
  font-size: 18;
  flex: 4;${
    "" /* Ukuran StyledTextInput 4x lebih lebar dari StyledLabel, atur sesuai kebutuhan */
  }
  ${"" /* margin-left: -5; */}
  ${"" /* line-height: 20; */}
  ${"" /* text-decoration-line: none; */}
  ${"" /* kalau tanpa container, masukan padding agar center?
  padding-top: -2px;
  padding-bottom: -2px; */
  }
`;
