import styled from "styled-components/native";

import Constants from "expo-constants";

export const colors = {
  sbBackground: "#00A862",
};

const statusBarHeight = Constants.statusBarHeight;

export const SplashContainer = styled.SafeAreaView`
  background-color: ${colors.sbBackground};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SplashLogo = styled.Image``;

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  background-color: #ffffff;
`;
