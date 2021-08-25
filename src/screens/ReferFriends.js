import React from "react";
import { Text, View, Image } from "react-native";
import CopyCode from "../components/referFriend/CopyCode";
import SocialButtons from "../components/referFriend/SocialButtons";

import * as Constants from "../helpers/constants"
import * as ReferFriendsConstants from "../helpers/referFriends"

const ReferFriends = () => {
  return (
    <View style={[Constants.CommonStyle, {textAlign:"center"}]}>
      <Image
        style={Constants.styles.backgroundImage}
        source={require("../../assets/images/referfriendbg.png")}
      />
     
      <Text style={ReferFriendsConstants.referFriendsViewText}>
        It Pays To Have Friends.
      </Text>
      <View style={ReferFriendsConstants.referFriendsViewLine}></View>

      <CopyCode/>

      <View
        style={[ReferFriendsConstants.socialButtonsView, Constants.CommonStyle]}
      >
       <SocialButtons path="facebook.png" name="Facebook" styling={ReferFriendsConstants.styles.faceBook }/>
        <SocialButtons path="whatsapp.png" name="WhatsApp" styling={ReferFriendsConstants.styles.whatsApp }/>
      </View>
    </View>
  );
};

export default ReferFriends;