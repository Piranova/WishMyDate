import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";

import * as ProfileConstants from "../../helpers/profileConstant";

const Spots = () => {
  return (
    <View style={ProfileConstants.spotView}>
      <TouchableOpacity style={ProfileConstants.spotTouchView}>
        <Image
          style={[ProfileConstants.spotImg, tailwind(`-mr-4`)]}
          source={require("../../../assets/images/spot1.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={tailwind(`w-1/2`)}>
        <Image
          style={[ProfileConstants.spotImg, tailwind(`-ml-4`)]}
          source={require("../../../assets/images/spot2.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Spots;
