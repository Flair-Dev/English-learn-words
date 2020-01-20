import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import actions from "../../redux/actions";
import {selectWords} from "../../redux/selectors/words";
import { memo } from 'react'


const mapStateToProps = createStructuredSelector({
  words: selectWords,
})

const mapDispatchToProps = {
  updateWords: actions.updateWords
}

export default (screen) => {
  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    memo,
  )(screen)
}
