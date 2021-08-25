import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import tailwind from "tailwind-rn";

const CustomImages = () => {
  return (
    <>
      <Image
        source={require("../../../assets/images/roundimg.jpeg")}
        style={[
          tailwind(`absolute w-20 h-20 rounded-full border-4 border-white`),
          styles.roundImgOne,
        ]}
      />
      <Image
        style={styles.roundImgTwo}
        style={[
          tailwind(`absolute w-20 h-20 rounded-full border-4 border-white`),
          styles.roundImgTwo,
        ]}
        source={require("../../../assets/images/roundimgTwo.jpeg")}
      />

      {/* logo */}
      <View
        style={[
          tailwind(
            `absolute w-28 h-28 rounded-full bg-white flex items-center justify-center`
          ),
          styles.logoView,
        ]}
      >
        <Image
          style={[tailwind(`absolute w-20`), { height: "3.6rem" }]}
          source={require("../../../assets/images/logo.png")}
        />
        <View
          style={[
            tailwind(
              `absolute w-5 h-5 rounded-full border-2 border-white bg-pink-600`
            ),
            styles.logo_dot_view,
          ]}
        ></View>
      </View>
      <View
        style={[
          tailwind(
            `absolute w-5 h-5 rounded-full border-2 border-white bg-pink-600`
          ),
          styles.logo_dot_view_two,
        ]}
      ></View>
      <View
        style={[
          tailwind(
            `absolute top-5 left-16 w-12 h-12 rounded-full bg-pink-600, bg-white opacity-30`
          ),
          { left: "25%" },
        ]}
      ></View>

      {/* Slider Dotes View */}
      <View
        style={[tailwind(`absolute left-12 flex flex-row`), { bottom: "12%" }]}
      >
        <Text style={[tailwind(`text-black`), { fontSize: 60 }]}>.</Text>
        <Text
          style={[tailwind(`text-gray-600 text-opacity-25`), { fontSize: 60 }]}
        >
          .
        </Text>
        <Text
          style={[tailwind(`text-gray-600 text-opacity-25`), { fontSize: 60 }]}
        >
          .
        </Text>
        <Text
          style={[tailwind(`text-gray-600 text-opacity-25`), { fontSize: 60 }]}
        >
          .
        </Text>
      </View>
    </>
  );
};
export default CustomImages;

const styles = StyleSheet.create({
  roundImgOne: {
    top: "46%",
    left: "30%",
    resizeMode: "cover",
  },
  roundImgTwo: {
    top: "27%",
    left: "57%",
    resizeMode: "cover",
  },
  logoView: {
    top: "4%",
    left: "47%",
  },

  logo_dot_view: {
    top: "32%",
    left: "92%",
  },
  logo_dot_view_two: {
    top: "53.2%",
    left: "10%",
  },
});
