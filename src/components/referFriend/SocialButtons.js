import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import * as Constants from "../../helpers/constants";
import * as ReferFriendsConstants from "../../helpers/referFriends";

const SocialButtons = ({ path, styling, name }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          ReferFriendsConstants.socialButton,
          ReferFriendsConstants.styles.buttonTouch,
          Constants.CommonStyle,
        ]}
      >
        <Image
          style={styling}
          source={require(`../../../assets/images/${path}`)}
        />
        <Text style={ReferFriendsConstants.socialButtonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;
