import {width} from '../../constants'

export default {
  input: {
    width: width - 50,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  errorInput: {
    borderColor: 'red',
  },
  successInput: {
    borderColor: 'green'
  }
}
