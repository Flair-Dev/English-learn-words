import React, {useState, useEffect} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import container from './container';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LearnPage = props => {

  const {navigation, updateWords} = props;
  let words = navigation.getParam('words');

  const [answerText, setAnswerText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [successAnswer, setSuccessAnswer] = useState(false);
  const [quantityWords, setQuantityWords] = useState(words.length)




  useEffect(() => {
    return () => {
      updateWords([...words]);
    };
  }, []);
  const alertEndLearn = () => {
    Alert.alert(
      'End Learn ?',
      '',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => navigation.goBack()},
      ],
      {cancelable: false},
    );
  };

  const disableSubmitButton = () => {
    return wrongAnswer || showAnswer || successAnswer
  }

  const disableNextWordButton = () => {
    return !words[currentWordIndex + 1]
  }

  const changeWordGroup = (index = 0) => {
    console.log('index', index)
    words = words.map(word => {
      if (word.id === words[currentWordIndex].id) {
        word.group = word.group + index;
      }
      console.log('word', word)
      return word;
    });
  };

  const deleteWord = () => {
    words.forEach((word, index) => {
      if (word.id === words[currentWordIndex].id) {
        words.splice(index, 1);
      }
    });
    if (quantityWords === currentWordIndex + 1) {
      navigation.goBack()
    }
    setQuantityWords(quantityWords - 1)
    setSuccessAnswer(false)
    setShowAnswer(false);
    setWrongAnswer(false);
    setAnswerText('');
  };

  const onPressNextWord = () => {
    if (!disableSubmitButton()) {
      onPressSubmit()
    } else {
      // changeWordGroup(-1);
      setSuccessAnswer(false)
      setShowAnswer(false);
      setWrongAnswer(false);
      setAnswerText('');
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const onPressSubmit = () => {
    if (answerText && answerText === words[currentWordIndex].englishWord) {
      changeWordGroup(1);
      setSuccessAnswer(true)
    } else {
      setShowAnswer(true);
      setWrongAnswer(true);
      changeWordGroup(-1);
    }
  };

  const onPressShowAnswer = () => {
    changeWordGroup(-1);
    setWrongAnswer(true)
    setShowAnswer(true);
  };

  const onPressDeleteWord = () => {
    deleteWord()
  };

  const onPressEndLearn = () => {
    if (!disableSubmitButton()) {
      onPressSubmit()
    }
    alertEndLearn();
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text>
          {currentWordIndex + 1} / {quantityWords}
        </Text>
        <Text style={styles.text}>
          {words &&
            words[currentWordIndex] &&
            words[currentWordIndex].russianWord}
        </Text>
        {showAnswer && (
          <Text style={styles.text}>
            {words &&
              words[currentWordIndex] &&
              words[currentWordIndex].englishWord}
          </Text>
        )}
      </View>
      <View style={styles.bodyContainer}>
        <Input
          title={'Answer'}
          value={answerText}
          onChange={setAnswerText}
          disable={showAnswer}
          wrongAnswer={wrongAnswer}
          successAnswer={successAnswer}
        />
        <View style={styles.horizontalContainer}>
          <Button title={'Show Answer'} action={onPressShowAnswer} disabled={showAnswer || successAnswer} />
          <Button title={'Next Word'} action={onPressNextWord} disabled={disableNextWordButton()} />
        </View>
        <Button title={'Submit'} action={onPressSubmit} disabled={disableSubmitButton()} type={'bigButton'} />
      </View>
      <View style={styles.bottomContainer}>
        <Button title={'Delete Word'} action={onPressDeleteWord} type={'redButton'} />
        <Button title={'End Learn'} action={onPressEndLearn} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default container(LearnPage);
