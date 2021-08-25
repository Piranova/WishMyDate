import React from "react";

import { View, Image } from "react-native";
import * as Constants from "../helpers/constants";

import Footer from "../components/home/Footer";
import AllExistingMember from "../components/home/AllExistingMember";
import Winner from "../components/winner/Winner";
import Select from "../components/winner/Select";
import PreviousWinner from "../components/winner/PreviousWinner";

import { winnerMembers } from "../DummyData/Data"

const WinnerScreen = () => {
  
  return (
    <View>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/bg.jpg")}
      />
      <Winner/>
      <AllExistingMember existingMembersData={winnerMembers} style={{ height: "76%", top: "12.5%" }} />

      <View  style={[Constants.selectView, Constants.CommonStyle]}>
        <Select/>
      </View>

        <PreviousWinner />
      <Footer imgName="footer.png" style={{ height: "70%", width: "100%"}}/>
    </View>
  );
};

export default WinnerScreen;