import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

interface Props {
  label: string;
  data?: any;
  value: number;
  setValue: any;
  name: string,
  setName: any,
  classDropdown: any,
  classWrapvalueDropdown: any
}

const Dropdown: FC<Props> = ({ label, data, value, name, setName, setValue, classDropdown, classWrapvalueDropdown }) => {
  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
  };
  const chooseValue = (e: any) => {
    setName(e.name)
    setValue(e.value)
    setVisible(false)
  }

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={classWrapvalueDropdown}>
          {data.map((e: any) =>
            <Text onPress={() => chooseValue(e)} key={e.value} style={styles.dropdown}>{e.name}</Text>
          )}
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={[classDropdown, visible ? styles.active : ""]}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>{name === "" ? label : name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  active: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  dropdown: {
    backgroundColor: '#fff',
    top: 35,
    fontSize: 13,
    lineHeight: 20,
    width: "100%",
    paddingVertical: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Dropdown;