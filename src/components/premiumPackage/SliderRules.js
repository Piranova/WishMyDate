import React from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";

import * as Constants from "../../helpers/constants";
import * as PremiumPackageConstants from "../../helpers/premiumPackage";
import * as ReferFriendsConstants from "../../helpers/referFriends";

import PremiumRules from "../../components/premiumPackage/PremiumRules";

const SliderRules = ({ item }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[Constants.CommonStyle, { width: "100vw" }]}>
        <Image
          style={PremiumPackageConstants.mainLogoImg}
          source={require(`../../../assets/images/${item.logoName}`)}
        />
        <Text style={PremiumPackageConstants.membershipViewText}>
          {item.membershipName}
        </Text>
        <View
          style={[
            ReferFriendsConstants.referFriendsViewLine,
            { top: "12.8rem" },
          ]}
        ></View>

        <PremiumRules rules={item.rules} />
      </View>

      <View
        style={[
          PremiumPackageConstants.membershipButtonView,
          Constants.CommonStyle,
        ]}
      >
        <TouchableOpacity style={PremiumPackageConstants.buttonTouch}>
          <Text style={PremiumPackageConstants.buttonTouchText}>
            GET THIS PACKAGE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SliderRules;
