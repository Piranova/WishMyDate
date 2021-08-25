import React, { useState } from "react";
import { Text, View } from "react-native";

import * as SettingConstants from "../../helpers/settingConstants";

import { Picker } from "@react-native-picker/picker";

const SelectForm = ({ data }) => {
  const [profileData, setProfileData] = useState();
  return (
    <>
      <View
        style={[SettingConstants.selectView, SettingConstants.styles.selectViewBox]}
      >
        <Text
          style={[SettingConstants.selectText, SettingConstants.styles.selectText2]}
        >
          {data.label}
        </Text>
        <Picker
          style={SettingConstants.styles.pickerInput}
          selectedValue={profileData}
          onValueChange={(itemValue) => setProfileData(itemValue)}
        >
          {data.options.map((options) => {
            return <Picker.Item label={options} value={options} />;
          })}
        </Picker>
      </View>
    </>
  );
};

export default SelectForm;
