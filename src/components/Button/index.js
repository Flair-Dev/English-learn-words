import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = props => {
  const {type} = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.touchableContainer,
        ...(type === 'redButton' && styles.redButton),
        ...(type === 'bigButton' && styles.bigButton),
      }}
      onPress={props.action}
      disabled={props.disabled}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
