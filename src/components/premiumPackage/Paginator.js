import React, { useState, useRef } from "react";

import {
  View,
  Image,
  StyleSheet,
  Animated,
  useWindowDimensions,
  Text,
  FlatList,
} from "react-native";

import * as Constants from "../../helpers/constants";
import * as PremiumPackageConstants from "../../helpers/premiumPackage";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <View style={[PremiumPackageConstants.dotsView, Constants.CommonStyle]}>
        {data.map((k, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [".4rem", ".9rem", ".4rem"],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i.toString()}
              style={[
                [
                  PremiumPackageConstants.styles.dotsStyle,
                  {
                    width: dotWidth,
                  },
                ],
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Paginator;
