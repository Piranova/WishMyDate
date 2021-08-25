import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Footer from "../components/home/Footer";

import Spots from "../components/profile/Spots";
import EditProfile from "../components/profile/EditProfile";

import * as Constants from "../helpers/constants";
import * as PremiumPackageConstants from "../helpers/premiumPackage";
import * as ProfileConstant from "../helpers/profileConstant";

export default class nearby extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require("../../assets/images/profilebg.png")}
          style={Constants.styles.backgroundImage}
        >
          <TouchableOpacity onPress={() => alert("Setting Icon Clicked")}>
            <Image
              style={ProfileConstant.settingIcon}
              source={require("../../assets/images/setting.png")}
            />
          </TouchableOpacity>

          <EditProfile />

          <View style={[Constants.CommonStyle, ProfileConstant.editButtonView]}>
            <TouchableOpacity
              style={[PremiumPackageConstants.buttonTouch, { width: "65%" }]}
            >
              <Text style={PremiumPackageConstants.buttonTouchText}>
                GET PREMIUM MEMBERSHIP
              </Text>
            </TouchableOpacity>
          </View>

          <Spots />

          <Footer
            imgName="footer.png"
            style={{ height: "70%", width: "100%" }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
