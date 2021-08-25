import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import * as SettingConstants from "../../helpers/settingConstants";

const SelectSetting = ({ firstSelectData }) => {
  return (
    <>
      {firstSelectData.map((item) => {
        return (
          <View style={SettingConstants.selectView}>
            <View>
              <Text style={[SettingConstants.selectText, {color: "#a59bbc"}]}>{item.label}</Text>
              <Text style={SettingConstants.selectText}>{item.option}</Text>
            </View>
            {item.icon && (
              <Image
                style={SettingConstants.styles.selectArrow}
                source={require(`../../../assets/images/${item.icon}`)}
              />
            )}
          </View>
        );
      })}
    </>
  );
};

export default SelectSetting;

const styles = StyleSheet.create({
  selectTextLabel: {
    fontSize: "1rem",
    color: "#a59bbc",
    marginLeft: "1.5rem"
  }
});
