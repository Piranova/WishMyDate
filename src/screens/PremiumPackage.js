import React, { useState, useRef } from "react";

import {
  View,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
  FlatList,
} from "react-native";

import * as Constants from "../helpers/constants";
import * as PremiumPackageConstants from "../helpers/premiumPackage";
import * as ReferFriendsConstants from "../helpers/referFriends";

import Footer from "../components/home/Footer";
import Header from "../components/premiumPackage/Header";

import SliderRules from "../components/premiumPackage/SliderRules";

let { width } = Dimensions.get("window");
let height = "75vh";

import { premiumPackageRules } from "../DummyData/Data";
import Paginator from "../components/premiumPackage/Paginator";

const PremiumPackage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]);
  }).current;

  return (
    <View>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/bg.jpg")}
      />

      <Header />

      {/* ////////////////////////////////// */}

      <FlatList
        data={premiumPackageRules}
        renderItem={({ item }) => <SliderRules item={item} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
        style={[
          PremiumPackageConstants.mainLogoView,
          { width, height },
        ]}
      />
      <Paginator data={premiumPackageRules} scrollX={scrollX} currentIndex={ currentIndex} />

      {/* /////////////////////////////////////// */}

      <Footer imgName="footer.png" style={{ height: "70%", width: "100%" }} />
    </View>
  );
};

export default PremiumPackage;
