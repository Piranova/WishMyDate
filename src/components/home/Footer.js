import React from "react";
import { View, Image } from "react-native";
import * as Constants from "../../helpers/constants";

const Footer = ({ imgName, style}) => {
  return (
    <View style={[Constants.footerView, Constants.CommonStyle]}>
      <Image
        style={style}
        source={require(`../../../assets/images/${imgName}`)}
      />
    </View>
  );
};

export default Footer;