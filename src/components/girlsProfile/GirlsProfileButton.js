import React from "react";
import { View } from "react-native";

import * as GirlsProfileConstants from "../../helpers/girlsProfileConstants";
import Buttons from "./Buttons";

const GirlsProfileButton = () => {
  return (
    <View style={GirlsProfileConstants.iconsMainView}>
      <Buttons
        iconName="cross.png"
        viewStyling={GirlsProfileConstants.girlProfileIconView}
        logoStyling={{ height: "1.1rem", width: "1.1rem" }}
      />
      <Buttons
        iconName="star.png"
        viewStyling={GirlsProfileConstants.iconLargeView}
        logoStyling={{ height: "3.5rem", width: "3.5rem" }}
      />
      <Buttons
        iconName="heart.png"
        viewStyling={GirlsProfileConstants.girlProfileIconView}
        logoStyling={{ height: "1.3rem", width: "1.4rem" }}
      />
    </View>
  );
};

export default GirlsProfileButton;