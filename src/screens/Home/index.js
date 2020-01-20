import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import container from './container';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Home = props => {
  const {navigation, addWord, words} = props;

  const [englishWord, setEnglishWord] = useState('');
  const [russianWord, setRussianWord] = useState('');

  const onPressAddWord = () => {
    const newWord = {
      englishWord,
      russianWord,
      group: 0,
      id: Date.now(),
    };
    addWord(newWord);
    setEnglishWord('');
    setRussianWord('')
  };

  const onPressStartLearn = () => {
    navigation.push('LearnPage', {words});
  };

  const disableAddWordButton = () => {
    return !(englishWord && russianWord)
  }

  const disableStartLearnButton = () => {
    return !(words && words.length)
  }

  return (
    <View style={styles.container}>
      <Input title={'English word'} value={englishWord} onChange={setEnglishWord} />
      <Input title={'Russian word'} value={russianWord} onChange={setRussianWord} />
      <Button title={'Add Word'} action={onPressAddWord} disabled={disableAddWordButton()} />
      <Button title={'Start Learn'} action={onPressStartLearn} disabled={disableStartLearnButton()} />
    </View>
  );
};

export default container(Home);
