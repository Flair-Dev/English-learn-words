import {TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const Input = props => {
  const { wrongAnswer, value, successAnswer } = props

  const onChangeText = text => {
    props.onChange(text);
  };

  return (
    <TextInput
      value={value}
      style={{...styles.input, ...(wrongAnswer && styles.errorInput), ...(successAnswer && styles.successInput)}}
      placeholder={props.title}
      onChangeText={onChangeText}
      autoCompleteType={'off'}
      autoCorrect={false}
      editable={!props.disable}
      autoCapitalize={'none'}
    />
  );
};

export default Input;
