import { StyleSheet } from 'react-native'
import Theme from '../../../../constants/Theme'

const styles = StyleSheet.create({
  statisticsViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statisticsSubViewStyle: {
      flexDirection: 'column',
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5,
      marginTop: 20,
      justifyContent: 'space-between',
      alignItems: 'center',

  },
  statisticsTextStyle: {
      textAlign: 'center',
      color: Theme.TM_DARK_GREY,
  },
  statisticsNumberTextStyle: {
      color: Theme.TM_BLACK,
  },
})

export default styles