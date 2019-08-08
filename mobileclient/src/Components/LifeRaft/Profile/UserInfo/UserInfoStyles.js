import { StyleSheet } from 'react-native'
import Theme from '../../../../constants/Theme'

const styles = StyleSheet.create({
  headerLineViewStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 90,
    paddingTop: 0,
    shadowColor: Theme.SHADOW_COLOR,
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row'
  },
  subheaderLineViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerLineText: {
    textAlign: 'left',
    paddingHorizontal: 5,
    marginHorizontal: 10
  }, 
  genderViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: 15
  },
  genderHeaderTextStyle: {
    color: Theme.TM_DARK_GREY,
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 15
  },
  genderRadioContainerViewStyle: {
    marginLeft: 15,
  },
  genderDetailTextStyle: {
      color: Theme.TM_BLACK,
  },
  genderRadioButtonStyle: {
      // paddingHorizontal: 10,
  },
  dateOfBirthViewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  dateOfBirthHeaderTextStyle: {
      color: Theme.TM_DARK_GREY,
      paddingHorizontal: 5,
      paddingVertical: 5,
      fontSize: 15
  },
  dateOfBirthDetailTextStyle: {
      marginLeft: 15,
      color: Theme.TM_BLACK,

  },
})

export default styles