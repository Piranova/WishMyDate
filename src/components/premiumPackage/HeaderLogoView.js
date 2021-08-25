import React from "react";

import { View, Image } from "react-native";

import * as Constants from "../../helpers/constants"
import * as PremiumPackageConstants from "../../helpers/premiumPackage"


const HeaderLogoView = ({ logoName, styling, LogoStyling}) => {

  return (
        <View
          style={[
            Constants.CommonStyle,
            PremiumPackageConstants.premiumHeaderLogoView,
            styling
          ]}
        >
          <Image
            style={LogoStyling}
            source={require(`../../../assets/images/${logoName}`)}
          />
        </View>
  );
};

export default HeaderLogoView;