import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import * as Constants from "../helpers/constants";
import * as HomeConstants from "../helpers/homeConstants";

import Footer from "../components/home/Footer";
import tailwind from "tailwind-rn";

const FullViewOfProfile = () => {
  return (
    <View>
      <Image
        style={[Constants.styles.backgroundImage]}
        source={require("../../assets/images/girlbg.png")}
      />
      <Image
        style={[Constants.styles.backgroundImage, { position: "absolute" }]}
        source={require("../../assets/images/girlbdoverlay.png")}
      />
      <View
        style={[
          HomeConstants.logoView,
          HomeConstants.logoViewOfFullProfile,
          Constants.CommonStyle,
        ]}
      >
        <Image
          style={HomeConstants.homeLogo}
          source={require("../../assets/images/homelogo.png")}
        />
      </View>
      <View style={Constants.fullProfileNameView}>
        <Text
          style={[Constants.fullProfileNameHeading, { fontSize: "2.8rem" }]}
        >
          Amelia Warren
        </Text>
        <Text style={[Constants.fullProfileName, { fontSize: "1.2rem" }]}>
          San Francisco, USA
        </Text>
      </View>
      <Footer
        imgName="footerwhite.png"
        style={{ height: "42%", width: "85%" }}
      />
    </View>
  );
};

export default FullViewOfProfile;
