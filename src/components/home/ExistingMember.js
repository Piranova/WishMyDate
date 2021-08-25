import React from "react";
import { View, Text, Image } from "react-native";
import Tag from "../winner/Tag";
import * as HomeConstants from "../../helpers/homeConstants";

const ExistingMember = ({ item }) => {
  return (
    <View>
      <Image
        style={[HomeConstants.existingUserImg]}
        source={{ uri: item.imgSource }}
      />
      <Image
        style={HomeConstants.existingUserImgOverlay}
        source={require("../../../assets/images/overlay.png")}
      />
      <View style={HomeConstants.styles.existingMemberNameView}>
        <Text style={HomeConstants.existingMemberNameText}>User Name</Text>
        <Text style={HomeConstants.existingMemberName}>{item.userName}</Text>
      </View>
      <Tag item={item} />
    </View>
  );
};

export default ExistingMember;
