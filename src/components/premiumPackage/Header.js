import React from "react";

import {View } from "react-native";
import tailwind from "tailwind-rn";

import * as Constants from "../../helpers/constants";
import * as PremiumPackageConstants from "../../helpers/premiumPackage";
import HeaderLogoView from "./HeaderLogoView";

const Header = () => {
  return (
    <View style={PremiumPackageConstants.headerView}>
      <HeaderLogoView
        logoName="homelogo.png"
        styling={PremiumPackageConstants.styles.logoView}
        LogoStyling={tailwind(`w-12 h-9`)}
      />
      <HeaderLogoView
        logoName="search.png"
        styling={PremiumPackageConstants.styles.searchView}
        LogoStyling={tailwind(`w-8 h-8`)}
      />
    </View>
  );
};

export default Header;