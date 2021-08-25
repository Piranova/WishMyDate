import React from "react";
import {Text, View, Image, TouchableOpacity } from "react-native";

import * as Constants from "../../helpers/constants";
import * as ProfileConstants from "../../helpers/profileConstant";

const EditProfile = () => {
  return (
    <>
      <View style={[ProfileConstants.editProfileView, Constants.CommonStyle]}>
        <Image
          style={ProfileConstants.userImg}
          source={require("../../../assets/images/userimg.png")}
        />
        <Text style={ProfileConstants.userText}>Amelia Warren</Text>
      </View>

      <TouchableOpacity>
        <Image
          style={ProfileConstants.editProfileButtonImg}
          source={require("../../../assets/images/btnprofile.png")}
        />
      </TouchableOpacity>
    </>
  );
};

export default EditProfile;
