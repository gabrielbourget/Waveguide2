import React from 'react'
import { View } from 'react-native'
import I18n from 'i18n-js'

import TMSectionedMultiSelect from '../../../components/common/TMSectionedMultiSelect.js'

import Theme from '../../../../constants/Theme'

import styles from './UserStylesStyles'

class UserStyles extends React.Component {
  render() {
    const {
      clothingStyles,
      onSelectedItemsChange,
      selectedClothingStyles
    } = this.props
    
    return (
      <View style={styles.myStylesViewStyle}>
        <TMSectionedMultiSelect
          showDropDowns={false}
          styles={{ button: { backgroundColor: Theme.PALE_GOLD } }}
          items={ clothingStyles }
          uniqueKey='id'
          subKey='children'
          selectText={I18n.t('profile_mystyles_lbl')}
          alwaysShowSelectText
          expandDropdowns={false}
          hideSearch
          selectedItemTextColor={Theme.PALE_GOLD}//"#fbd2d7"
          selectedItemIconColor={Theme.PALE_GOLD}//"#fbd2d7"
          confirmText='Select'
          animateDropDowns
          onSelectedItemsChange={ onSelectedItemsChange }
          selectedItems={ selectedClothingStyles }
        />
      </View>
    )
  }
}

export default UserStyles