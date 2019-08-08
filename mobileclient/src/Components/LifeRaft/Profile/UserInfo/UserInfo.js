import React from 'react'
import { View, Text } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import I18n from 'i18n-js'

import EditButton from '../../../components/common/EditButton'
import TMSeparator from '../../../components/common/TMSeparator'
import AvatarImage from '../../../components/common/AvatarImage/AvatarImage'

import UserStatistics from '../UserStatistics/UserStatistics'

import styles from './UserInfoStyles'

class UserInfo extends React.Component {

  // - Logic flow to render out a photo if there is one, placeholder if not.
  renderUserAvatar = (avatarNameField) => {
    if (!this.props.photoURL || (this.props.photoURL.trim() === '')) {
      return ( <UserAvatar size="80" name={ avatarNameField }/> )
    }
    else return ( <AvatarImage source={ this.props.photoURL }/> )
  }

  render() {

    const { photoURL, userProfile } = this.props

    const nameField = (userProfile === undefined || userProfile === null ) ?
                      'CANNOT RETRIEVE NAME' :
                      `${userProfile.firstName} ${userProfile.lastName}`

    const avatarNameField = (userProfile === undefined || userProfile === null) ?
                            'NO NAME' :
                            `${userProfile.firstName} ${userProfile.lastName}`

    // console.log('photoURL in <UserInfo/>')
    // console.log(photoURL)
    return (
      <>
        <View style={styles.headerLineViewStyle}>

          {/* AVATAR PHOTO */}
          { this.renderUserAvatar(avatarNameField) }

          <View style={styles.subheaderLineViewStyle}>
            <Text allowFontScaling={false} style={styles.headerLineText} >
              { nameField }
            </Text>
            {/* - TODO: -> Grab this from props eventually. */}
            <Text allowFontScaling={false} style={styles.headerLineText} >
              Toronto, Canada
            </Text>
          </View>
          <View flexDirection='row'>
            <EditButton/>
          </View>
        </View>
        <UserStatistics />
        <TMSeparator />
        <View style={styles.genderViewStyle}>
          <Text allowFontScaling={false} style={styles.genderHeaderTextStyle}>
            {I18n.t('profile_gender_lbl')}
          </Text>
          <View style={styles.gender}></View>
          <View style={styles.genderRadioContainerViewStyle}>
            <Text style={styles.genderDetailTextStyle}>Male</Text>
            {/* <RadioForm
              labelStyle={styles.genderRadioButtonStyle}
              radio_props={gender}
              initial={this.evaluateGender(this.props.profile.gender)}
              formHorizontal={true}
              buttonColor={'#a6a4a8'}
              buttonInnerColor={'#a6a4a8'}
              labelColor={'#4c4c4c'}
              selectedButtonColor={'#ffb6c1'}
              onPress={(value) => {
                console.log('new gender value ' + value);
                this.setState({ gender: value })
              }}
            /> */}
          </View>
        </View>
        <View style={styles.dateOfBirthViewStyle}>
          <Text style={styles.dateOfBirthHeaderTextStyle}>{I18n.t('profile_date_of_birth_lbl')}</Text>
          <Text style={styles.dateOfBirthDetailTextStyle}>YYYY-MM-DD</Text>
        </View>
      </>
    )
  }
}

export default UserInfo