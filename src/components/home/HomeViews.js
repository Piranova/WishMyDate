import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import tailwind from "tailwind-rn";

import * as HomeConstants from "../../helpers/homeConstants";
import * as Constants from "../../helpers/constants";
import Banner from "./Banner";

const HomeViews = () => {
  return (
    <View style={[HomeConstants.homeViews, Constants.CommonStyle]}>
      <View style={[Constants.CommonStyle, HomeConstants.logoView]}>
        <Image
          style={HomeConstants.homeLogo}
          source={require("../../../assets/images/homelogo.png")}
        />
      </View>

      {/* Banner Component */}
      <Banner />

      <View style={HomeConstants.styles.descriptionsView}>
        <Text style={HomeConstants.descriptionsHeading}>
          About Wish My Date
        </Text>
        <Text style={HomeConstants.descriptionsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
        <Text style={HomeConstants.descriptionsText}>
          When an unknown printer took a galley of type and it to make a type
          specimen book. It has survived not only five centuries. but also the
          leap into electronic. Lorem Ipsum has been the industry's standard.
        </Text>
      </View>
    </View>
  );
};

export default HomeViews;
