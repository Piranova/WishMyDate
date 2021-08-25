import React from "react";
import { Text, View, Image } from "react-native";

import * as WinnerConstants from "../../helpers/winnerConstant";

const Select = () => {
  return (
    <View style={WinnerConstants.citySelectView}>
      <Text style={WinnerConstants.selectText}>Select City</Text>
      <Image
        style={WinnerConstants.selectArrow}
        source={require("../../../assets/images/arrow.png")}
      />
    </View>
  );
};

export default Select;
