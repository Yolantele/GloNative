import React from 'react';
import { TouchableOpacity, StyleSheet, Button } from 'react-native';
import Styles from '../../assets/Styles';
import { Container } from '../Styled/StyledCustomButton';

const CustomButton = ({
  title, onPress, colour, disabled, type,
}) => {
  // const container = [styles.container];

  // if (type && type === 'round') container.push({ borderRadius: Styles.shape.roundCorner });

  return (
    <Container type={type}>
      {/* <TouchableOpacity style={container}> */}
      <TouchableOpacity>
        <Button
          title={title}
          onPress={onPress}
          color={disabled ? styles.disabled : colour || Styles.colours.darkText}
        />
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  disabled: {
    color: Styles.colours.greyTransparent,
  },
});

export default CustomButton;
