import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const AuthButtons = ({ buttonText, handlePress, btnTextStyle, btnStyle }) => {
  // Receiving props from splashScreen.js
  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={btnStyle}>
        <Text style={btnTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthButtons;
