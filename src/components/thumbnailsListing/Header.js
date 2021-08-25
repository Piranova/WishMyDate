import React from "react";
import { Image, View } from "react-native";
import tailwind from "tailwind-rn";

import * as PremiumPackageConstants from "../../helpers/premiumPackage";
import * as Constants from "../../helpers/constants";

const Header = ({ openIcon, listIcon }) => {
  return (
    <View
      style={[
        PremiumPackageConstants.headerView,
        PremiumPackageConstants.styles.headerView,
      ]}
    >
      <View
        style={[
          PremiumPackageConstants.premiumHeaderLogoView,
          PremiumPackageConstants.styles.girlsProfileLogoView,
          Constants.CommonStyle,
        ]}
      >
        <Image
          style={tailwind(`w-12 h-9`)}
          source={require("../../../assets/images/homelogo.png")}
        />
      </View>
      <View style={Constants.iconsView}>
        <Image
          style={[Constants.icon, { width: "1.68rem" }]}
          source={require(`../../../assets/images/${listIcon}`)}
        />
        <Image
          style={Constants.icon}
          source={require(`../../../assets/images/${openIcon}`)}
        />
      </View>
    </View>
  );
};

export default Header;
