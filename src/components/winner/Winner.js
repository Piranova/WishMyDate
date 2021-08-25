import React from "react";

import { Text, View, Image } from "react-native";
import * as Constants from "../../helpers/constants";
import * as WinnerConstant from "../../helpers/winnerConstant";
import * as ReferFriendsConstants from "../../helpers/referFriends";

const Winner = () => {
  return (
    <View style={[WinnerConstant.winnerScreenView, Constants.CommonStyle]}>
      <Image
        style={[
          WinnerConstant.winnerLogo,
          Constants.CommonStyle,
          WinnerConstant.styles.winnerLogo,
        ]}
        source={require("../../../assets/images/winnerlogo.png")}
      />
      <View style={[WinnerConstant.greetingTextView, Constants.CommonStyle]}>
        <Text style={WinnerConstant.greetingTextHeading}>Congratulations</Text>
        <View
          style={[
            ReferFriendsConstants.referFriendsViewLine,
            { top: "2.3rem" },
          ]}
        ></View>
        <Text style={WinnerConstant.greetingText}>
          Joson on winning the monthly WMD contest. You received{" "}
          <b style={{ color: "#e92679" }}>184</b> new followers last month and
          are now eligible for a destination sponsored by us.
        </Text>
      </View>
    </View>
  );
};

export default Winner;
