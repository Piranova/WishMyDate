import React from "react";

import { Text, View } from "react-native";
import AllExistingMember from "../home/AllExistingMember";

import { previousWinnerMembers } from "../../DummyData/Data";

import * as WinnerConstants from "../../helpers/winnerConstant";

const PreviousWinner = () => {
  return (
    <>
      <View style={WinnerConstants.previousWinnerView}>
        <Text style={WinnerConstants.previousWinnerText}>
          Previous Winner Mr & Ms WMD
        </Text>
      </View>
      <AllExistingMember
        existingMembersData={previousWinnerMembers}
        style={{ height: "14%", top: "78%" }}
      />
    </>
  );
};

export default PreviousWinner;
