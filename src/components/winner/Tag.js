import React from "react";
import { Text, View } from "react-native";

import * as WinnerConstants from "../../helpers/winnerConstant";
import * as Constants from "../../helpers/constants";

const Tag = ({ item }) => {
  return (
    <View
      style={[
        WinnerConstants.tagView,
        Constants.CommonStyle,
        { backgroundColor: item.tagColor },
      ]}
    >
      <Text style={WinnerConstants.tagText}>{item.tagName}</Text>
    </View>
  );
};

export default Tag;
