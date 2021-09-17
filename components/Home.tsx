import React, { useEffect } from "react";

import { View, Text, Button, Image, ScrollView } from "react-native";
import { Container } from "../styles/appStyles";
import * as font from "expo-font";

const Home = ({ navigation }) => {
  useEffect(() => {
    font.loadAsync({
      "notoSans-black": require("../assets/fonts/NotoSansCJKkr-Black.otf"),
      "notoSans-bold": require("../assets/fonts/NotoSansCJKkr-Bold.otf"),
      "notoSans-demiLight": require("../assets/fonts/NotoSansCJKkr-DemiLight.otf"),
      "notoSans-light": require("../assets/fonts/NotoSansCJKkr-Light.otf"),
      "notoSans-medium": require("../assets/fonts/NotoSansCJKkr-Medium.otf"),
      "notoSans-regular": require("../assets/fonts/NotoSansCJKkr-Regular.otf"),
      "notoSans-Thin": require("../assets/fonts/NotoSansCJKkr-Thin.otf"),
    });
  }, []);
  return (
    <Container>
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../assets/home_greeting.png")}
            style={{
              width: "100%",
              height: 380,
            }}
          />
          <Text
            style={{
              position: "absolute",
              fontSize: 28,
              fontFamily: "notoSans-bold",
              color: "#ffffff",
              letterSpacing: -0.02,
              top: 90,
              left: 24,
            }}
          >
            베리님, 해피 스타 아워~{"\n"}별을 추가로 드려요!
          </Text>
          <Text
            style={{
              position: "absolute",
              fontSize: 13,
              color: "#C2A661",
              bottom: 39,
              left: 24,
            }}
          >
            3 star until next reward
          </Text>
          <View
            style={{
              position: "absolute",
              left: 24,
              width: 142,
              height: 6,
              bottom: 26,
              backgroundColor: "rgba(0,0,0,0.38)",
              borderRadius: 6.5,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              left: 24,
              width: 107,
              height: 6,
              bottom: 26,
              backgroundColor: "#c2a661",
              borderRadius: 6.5,
            }}
          ></View>
        </View>

        <View
          style={{
            // justifyContent: "space-between",
            flexDirection: "row",
            height: 46,
            alignItems: "center",
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <Image
            source={require("../assets/icon_inbox_32.png")}
            style={{ width: 32, height: 32, marginRight: 3 }}
          />
          <Text>What's New</Text>

          <Image
            source={require("../assets/icon_coupon_32.png")}
            style={{ width: 32, height: 32, marginLeft: 30 }}
          />
          <Text>Coupon</Text>

          <Image
            source={require("../assets/icon_alarm_24.png")}
            style={{ width: 24, height: 24, marginLeft: 80 }}
          />
        </View>

        <View style={{ marginTop: 7, backgroundColor: "#f5f5f5" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "notoSans-medium",
              letterSpacing: -0.22,
              marginLeft: 24,
              marginTop: 30,
            }}
          >
            베리님이 좋아하는 메뉴
          </Text>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 24 }}>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Image
                source={require("../assets/img_americano.png")}
                style={{ width: 130, height: 130, marginRight: 16 }}
              />
              <Text
                style={{
                  width: 130,
                  textAlign: "center",
                  fontSize: 14,
                  letterSpacing: -0.5,
                  fontFamily: "notoSans-regular",
                  color: "#000000",
                  includeFontPadding: false,
                  marginTop: 9,
                }}
              >
                카페 아메리카노
              </Text>
              <Text
                style={{
                  width: 130,
                  textAlign: "center",
                  fontSize: 12,
                  letterSpacing: -0.5,
                  fontFamily: "notoSans-thin",
                  color: "rgba(0,0,0,0.60)",
                  includeFontPadding: false,
                  marginTop: 5,
                }}
              >
                Tall/Hot/Espresso 2
              </Text>
            </View>

            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Image
                source={require("../assets/img_coldbrew.png")}
                style={{ width: 130, height: 130, marginRight: 16 }}
              />
              <Text
                style={{
                  width: 130,
                  textAlign: "center",
                  fontSize: 14,
                  letterSpacing: -0.5,
                  fontFamily: "notoSans-regular",
                  color: "#000000",
                  includeFontPadding: false,
                  marginTop: 9,
                }}
              >
                콜드 폼 콜드 브루
              </Text>
              <Text
                style={{
                  width: 130,
                  textAlign: "center",
                  fontSize: 12,
                  letterSpacing: -0.5,
                  fontFamily: "notoSans-thin",
                  color: "rgba(0,0,0,0.60)",
                  includeFontPadding: false,
                  marginTop: 5,
                }}
              >
                Tall/Hot/Cold Foam
              </Text>
            </View>

            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Image
                source={require("../assets/img_coldbrew.png")}
                style={{ width: 130, height: 130 }}
              />
              <Text
                style={{
                  width: 130,
                  textAlign: "center",
                  fontSize: 14,
                  letterSpacing: -0.5,
                  fontFamily: "notoSans-regular",
                  color: "#000000",
                  includeFontPadding: false,
                  marginTop: 9,
                }}
              >
                에스프레소
              </Text>
              <Text
                style={{
                  width: 130,
                  textAlign: "center",
                  fontSize: 12,
                  letterSpacing: -0.5,
                  fontFamily: "notoSans-thin",
                  color: "rgba(0,0,0,0.60)",
                  includeFontPadding: false,
                  marginTop: 5,
                }}
              >
                Tall/Hot/Cold Foam
              </Text>
            </View>
          </View>
        </View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Splash")}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
