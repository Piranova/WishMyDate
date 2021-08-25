import React from "react";

import { StyleSheet, View, Image } from "react-native";
import * as Constants from "../helpers/constants";

import Footer from "../components/home/Footer";
import AllExistingMember from "../components/home/AllExistingMember";
import Header from "../components/thumbnailsListing/Header";

import { thumbnailListing } from "../DummyData/Data";

const ThumbnailListing = () => {
  return (
    <View style={Constants.CommonStyle}>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/homebg.png")}
      />
      <Header openIcon="openicon.png" listIcon="listicon.png" />
      <AllExistingMember
        existingMembersData={thumbnailListing}
        style={{ height: "76%", top: "15%" }}
      />
      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default ThumbnailListing;
