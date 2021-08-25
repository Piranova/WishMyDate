import React from "react";

import { View, Image, ScrollView } from "react-native";
import * as Constants from "../helpers/constants";

import Footer from "../components/home/Footer";
import HomeViews from "../components/home/HomeViews";
import AllExistingMember from "../components/home/AllExistingMember";

// Dummy Data
import { existingMembersData } from "../DummyData/Data";

const HomeScreen = () => {
  return (
    <View>
      <Image
        style={[Constants.styles.backgroundImage]}
        source={require("../../assets/images/homebg.png")}
      />
      <View style={{position: "absolute",height:"90vh",width:"100vw", top:"1%", overflow:"scroll"}}>
        <HomeViews />
        <AllExistingMember
          existingMembersData={existingMembersData}
          style={{ height: "70%", top: "71%" }}
        />
      </View>
      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default HomeScreen;
