import { Platform } from 'react-native'
const isIos = Platform.OS === 'ios'

export default {
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  },
  bottomContainer: {
    flex: 3,
    width: '100%',
    alignItems: 'center'
  },
  horizontalContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: isIos ? 80 : 35
  },
  text: {
    fontSize: 40
  }
}
