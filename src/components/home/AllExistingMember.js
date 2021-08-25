import React from "react";
import { View } from "react-native";
import ExistingMember from "./ExistingMember";
import * as HomeConstants from "../../helpers/homeConstants";

const AllExistingMember = ({ existingMembersData, style }) => {

  return (
    <>
      
      <View style={[HomeConstants.existingUserView, style]}>
        {
          existingMembersData.map(item => {
            return (
              <ExistingMember key={ item.id } item={ item}/>
            )
          })
          }
        </View>
       
    </>
  );
};

export default AllExistingMember;