import React from "react";
import { StyleSheet, View, Image } from "react-native";

import * as Constants from "../helpers/constants";
import * as GirlsProfileConstants from "../helpers/girlsProfileConstants";

import GirlsProfileButton from "../components/girlsProfile/GirlsProfileButton";
import Footer from "../components/home/Footer";
import Header from "../components/thumbnailsListing/Header";

const GirlsProfile = () => {
  return (
    <View style={Constants.CommonStyle}>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/bg.jpg")}
      />
      <Header openIcon="opendarkicon.png" listIcon="lightlisticon.png" />

      <View
        style={[
          GirlsProfileConstants.girlProfileImgView,
          Constants.CommonStyle,
        ]}
      >
        <Image
          style={GirlsProfileConstants.styles.blurImg}
          source={require("../../assets/images/blurgirl.png")}
        />
        <Image
          style={GirlsProfileConstants.styles.skewGirl}
          source={require("../../assets/images/skewgirltwo.png")}
        />
      </View>

      <GirlsProfileButton />

      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default GirlsProfile;
