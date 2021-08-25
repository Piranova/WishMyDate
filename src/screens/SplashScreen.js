import React from "react";
import { View, Image, Text } from "react-native";

// import components
import AuthButtons from "../components/splash/AuthButtons";
import CustomImages from "../components/splash/CustomImages";

// Tailwind CSS (NPM Pkg)
import tailwind from "tailwind-rn";
import * as Constants from "../helpers/constants";

const SplashScreen = () => {
  // Sign up function
  const handleSignUp = () => {
    console.log("Sign up clicked");
  };

  // Login function
  const handleLogIn = () => {
    console.log("Login up clicked");
  };

  return (
    <View style={ Constants.CommonStyle}>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/splashbg.png")}
      />
      <Image
        style={[
          Constants.SplashMainImage,
          Constants.styles.roundImg,
        ]}
        source={require("../../assets/images/mainimg.jpeg")}
      />

      {/* Other Images (Custom Views) */}
      <CustomImages />

      <Text style={[tailwind(`absolute bottom-40 `), {
        fontSize: 46.5,
        width: 312
      }]}>
        Find your soul mate with us
      </Text>
      <View
        style={tailwind(
          `w-full absolute bottom-10 flex flex-row justify-center items-center`
        )}
      >
        <AuthButtons
          buttonText="SIGN UP"
          handlePress={handleSignUp}
          btnStyle={Constants.whiteButton}
          btnTextStyle={Constants.buttonText}
        />
        <AuthButtons
          buttonText="LOG IN"
          handlePress={handleLogIn}
          btnStyle={Constants.transButton}
          btnTextStyle={Constants.buttonText}
        />
      </View>
    </View>
  );
};
export default SplashScreen;



