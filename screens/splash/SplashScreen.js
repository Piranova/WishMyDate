import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

// import components
import AuthButtons from "../components/AuthButtons";
import CustomImages from "../components/CustomImages";

// Tailwind CSS (NPM Pkg)
import tailwind from "tailwind-rn";

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
    <View style={tailwind(`flex-1 justify-center items-center`)}>
      <Image
        style={[tailwind(`relative top-0 left-0`), styles.stretch]}
        source={require("../../assets/images/splashbg.png")}
      />
      <Image
        style={[
          tailwind(`w-full h-2/4 absolute rounded-full`),
          styles.roundImg,
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
          btnStyle={tailwind(
            `w-40 h-11 border-2 border-white bg-white rounded-full mx-1 flex items-center justify-center`
          )}
          btnTextStyle={tailwind(`text-sm font-bold text-black`)}
        />
        <AuthButtons
          buttonText="LOG IN"
          handlePress={handleLogIn}
          btnStyle={tailwind(
            `w-40 h-11 border-2 border-black rounded-full mx-1 flex items-center justify-center`
          )}
          btnTextStyle={tailwind(`text-sm font-bold text-black`)}
        />
      </View>
    </View>
  );
};
export default SplashScreen;


const styles = StyleSheet.create({
  stretch: {
    width: "100vw",
    height: "100vh",
    resizeMode: "cover",
  },
  roundImg: {
    top: "4.6%",
    left: "-31.5%",
    resizeMode: "cover",
  },
});
