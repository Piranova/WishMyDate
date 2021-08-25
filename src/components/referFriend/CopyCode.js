import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Constants from "../../helpers/constants";
// import * as HomeConstants from "../helpers/homeConstants"
import * as ReferFriendsConstants from "../../helpers/referFriends";

const CopyCode = () => {
  return (
    <View
      style={[
        ReferFriendsConstants.referFriendsCodeView,
        Constants.CommonStyle,
      ]}
    >
      <Text style={ReferFriendsConstants.referTextAmount}>
        Refer & enjoy reduced price of{" "}
        <Text style={ReferFriendsConstants.textAmount}>$22.99</Text> on your
        first month
      </Text>
      <View style={[ReferFriendsConstants.referCode, Constants.CommonStyle]}>
        <Text style={ReferFriendsConstants.styles.code}>ABDGF364</Text>
      </View>
      <Text style={ReferFriendsConstants.styles.copyCode}>Copy Code</Text>
      <Text
        style={[ReferFriendsConstants.styles.copyCode, { marginTop: "1.5rem" }]}
      >
        You can make more money on your referrals and get Tarry's club benefits
      </Text>
    </View>
  );
};

export default CopyCode;
