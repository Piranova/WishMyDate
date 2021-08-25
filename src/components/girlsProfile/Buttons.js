import React from "react";
import { View, Image } from "react-native";

import * as Constants from "../../helpers/constants";
import * as GirlsProfileConstants from "../../helpers/girlsProfileConstants";

const Buttons = ({ iconName, viewStyling, logoStyling }) => {
  return (
    <View style={[viewStyling, Constants.CommonStyle, GirlsProfileConstants.styles.iconViewShadow]}>
      <Image
        style={logoStyling}
        source={require(`../../../assets/images/${iconName}`)}
      />
    </View>
  );
};

export default Buttons;