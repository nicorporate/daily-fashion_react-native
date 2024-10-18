import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
 } from 'react-native-responsive-screen-hooks';

export const InputComponent = (props) => {

  const { isDescription, isIcon } = props;

  return (
    <View style={styles.mainContainer}>
      {
        isIcon ?
          <Icon
            size={hp('8%')}
            {...props}
          />
          :
          null
      }
      <TextInput
        style={[
          styles.input,
          {
            height: isDescription ?
              100 : 40
          }
        ]}
        multiline={true}
        placeholderTextColor='black'
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
    fontSize: 16,
    width: '100%',
    color: 'gray'
  }
});