/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TouchableOpacity, StyleSheet, Button } from 'react-native';
import Styles from '../../assets/Styles';

const CustomButton = (props) => {
  const container = [styles.container];

  const {
    title, onPress, colour, disabled, type,
  } = props;

  if (type && type === 'round') {
    container.push({ borderRadius: Styles.shape.roundCorner });
  }

  return (
    <TouchableOpacity style={container}>
      <Button
        title={title}
        onPress={onPress}
        color={disabled ? styles.disabled : colour || Styles.colours.darkText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Styles.colours.white,
    height: 45,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Styles.colours.black,
    shadowOffset: { y: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  disabled: {
    color: Styles.colours.greyTransparent,
  },
});

export default CustomButton;
