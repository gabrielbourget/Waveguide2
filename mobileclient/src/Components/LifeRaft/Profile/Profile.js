// todo
// translate update profile sign out button, 
// use tm button for those two buttons. 
//unify the tappable rectange style with design
//support toggle of privacy ON/OFF text
//align edit icons to the right side. 

import * as React from 'react'
import * as Localization from 'expo-localization'
import * as Language from '../../../constants/Language'
import I18n from 'i18n-js'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import RNPickerSelect from 'react-native-picker-select'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Camera, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View, Text, Image, 
    StyleSheet, ScrollView, 
    TouchableOpacity, TextInput, 
    SafeAreaView, Alert
} from 'react-native'

// - Redux
import { updateUserProfile, getUserInfo } from '../../shared/store/actions/userAction'
import { signOut, isUserLoggedIn } from '../../shared/store/actions/authActions'

import TMHeader from '../../components/common/TMHeader'
import TMButton from '../../components/common/TMButton'
import TMSeparator from '../../components/common/TMSeparator'
import CenteringCradle from '../../components/common/Cradles/CenteringCradle/CenteringCradle'

import { clothingStyles, shopCategories, prices, sizes } from '../../shared/constants/profileConstants'

import UserInfo from './UserInfo/UserInfo'
import UserStyles from './UserStyles/UserStyles'

import styles from './ProfileStyles'

const gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
];

class Profile extends React.Component {

    
    constructor(props) {
        super(props);
        this.inputRefs = {};
    }

    state = {
        email: '',
        password: 'password',
        photoURL: '',
        errorMessage: '',
        loading: false,
        isLoggedIn: false,
        firstName: '',
        lastName: '',
        homeCity: '',
        homeCountry: '',
        name: '',
        gender: 2,
        // selectedCategory: [],
        selectedClothingStyles: [],
        clothingStyles: clothingStyles,
    }
    
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        /** start listening to onAuthStateChanged */
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
            console.log("state changed");
            if (!user) {
                this.props.navigation.navigate('SignIn', { showModal: true });
            }
            else {
                console.log('In componentDidMount() for <Profile/>, there was a user')
                console.log(user)
                this.props.getUserInfo()
                // const user = firebase.auth().currentUser
                // const { photoURL } = user
                // this.setState({ photoURL: photoURL })
            }
        });
    
    // console.log('-----------------boop-----------------')
    // console.log(photoURL)
    // console.log('-----------------boop-----------------')
    // console.log(user.providerData)
    }

    componentWillUnmount() {
        this.unsubscribe(); /** stop listening to onAuthStateChanged */
    }

    updateProfile() {
        if (this.state.selectedClothingStyles.length === 0) {
        this.setState({
            selectedClothingStyles: this.props.profile.selectedClothingStyles
        });
        } else {
        this.setState(prevState => ({
            selectedClothingStyles: [...prevState.selectedClothingStyles, this.props.profile.selectedClothingStyles]
        }));
        }
        if (this.state.gender == '' || this.state.gender == undefined || this.state.gender == null) {
        this.setState({
            gender: 2
        });
        }
        if (this.state.name === '' || this.state.name === undefined || this.state.name === null) {
        this.setState({
            name: this.props.profile.name,
            email: this.props.profile.email
        });
        }
        if (this.state.username === '' || this.state.username === undefined || this.state.username === null) {
        this.setState({
            username: this.props.profile.username
        });
        }
        this.props.updateUserProfile(this.state);
    }

    onSignOut() {
        const { email, password } = this.state;
        this.setState({
        email: '',
        username: '',
        name: '',
        password: '',
        selectedClothingStyles: []
        })
        this.props.signOut({ email, password });
    }

    onSelectedItemsChange = (selectedItems) => {
        console.log(selectedItems);
        this.setState({
        selectedClothingStyles: selectedItems
        });
        //this.props.updateUserProfile(this.state);
    }

    onSelectedCategoryChange = (selectedItems) => {
        console.log(selectedItems);
        this.setState({
        selectedCategory: selectedItems
        });
    }


    onSelectedSizeChanged = (selectedSize) => {
        this.setState({
        selectedSize: selectedSize
        });
    }

    evaluateGender(gender = '') {
        switch (gender) {
        case 'male':
            return 0;
        case 'female':
            return 1;
        case 'other':
            return 2;
        default:
            return 2;
        }
    }

    shareProfilePressed() {
        Alert.alert(
        'Sharing is caring!',
        'Share your profile to help friends buy for you.',
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
        )
    }
    viewWishlist() {
        Alert.alert(
        'Wishlist',
        'Keep a list a of your must have items',
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
        )
    }

    render() {
        console.log('In <Profile/> render')
        
        const { clothingStyles, selectedClothingStyles, photoURL } = this.state
        const { userProfile, userInfoLoading } = this.props
        
        // if (userInfoLoading)  {
        //   console.log('still loading user profile')
        //   return (
        //     <CenteringCradle>
        //       <Text> Loading ... </Text>
        //     </CenteringCradle>
        //   )
        // }
        
        
        console.log('User Profile from props ------>')
        console.log(userProfile)

        // const url = this.props.userProfile.photoURL

        return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.container}>
                    <TMHeader />
                    <View style={styles.mainContentView}>
                    {/* PROFILE INFORMATION */}
                    <UserInfo userProfile={ userProfile } photoURL={ photoURL }/> 
                    {/* <UserInfo userProfile={ userProfile }/>  // - Jul31, 2019 -> Something is wrong with adding google users in to Users-New */}
                    <TMSeparator />
                    {/* FASHION STYLES */}
                    <UserStyles 
                        clothingStyles={ clothingStyles }
                        onSelectedItemsChange={ this.onSelectedItemsChange }
                        selectedClothingStyles={ selectedClothingStyles }
                    />
                    <TMSeparator />
                    {/* PRIVACY SETTINGS */}
                    <View style={styles.privacyViewStyle}>
                        <View style={styles.privacyOnOffContainerView}>
                        <Text style={styles.privacyOnOffTextStyle}>OFF</Text>
                        <Text style={styles.privacyLabelTextStyle}>Privacy</Text>
                        </View>
                        <Text style={styles.privacyExplanationTextStyle}>
                        Off automatically shares your stories with your friends.
                        </Text>
                    </View>
                    {/* BOTTOM BUTTONS */}
                    <View style={styles.bottomButtonContainerView}>
                        {/* <TMButton
                        buttonText={I18n.t('profile_update_profile_btn')}
                        buttonContainerStyle={styles.profileButton}
                        onPress={this.updateProfile.bind(this)} /> */}
                        <TMButton
                        buttonText={I18n.t('profile_sign_out_btn')}
                        buttonContainerStyle={styles.profileButton}
                        onPress={this.onSignOut.bind(this)} />
                        <TMButton
                        buttonText={I18n.t('profile_change_password_btn')}
                        buttonContainerStyle={styles.profileButton}
                        onPress={this.onSignOut.bind(this)} />
                    </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authReducer.authError,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        authReducer: state.authReducer,
        // userInfo: state.userReducer.userInfo,
        // userInfoErr: state.userReducer.userInfoErr,
        userInfoLoading: state.userReducer.userInfoLoading,
        userProfile: state.userReducer.userProfile,
        userProfileErr: state.userReducer.userProfileErr,
        responseMessage: state.userReducer.responseMessage        
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateUserProfile: (userInfo) => dispatch(updateUserProfile(userInfo)),
        getUserInfo: () => dispatch(getUserInfo()),
        signOut: (credentials) => dispatch(signOut(credentials)),
        isUserLoggedIn: () => dispatch(isUserLoggedIn)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

                        {/* TODO: camera and profile picture on hold */}
                        {/* <View style={{ paddingTop: 10 }}>
                            <TouchableOpacity onPress={this.openActionSheet.bind(this)} style={styles.imageContainer}>
                                <Image 
                                    style={styles.userAvatarStyle}
                                    source={require('./../assets/images/default-avatar.png')} // eslint-disable-line
                                />
                            </TouchableOpacity>
                        
                        </View> */}
                        {/* <View style={styles.paddingView}>
                            <Text allowFontScaling={false} style={styles.personalInfoHeading}>
                                Wishlist
                            </Text>
                        </View>
                        <View style={styles.paddingView}>
                            <TouchableOpacity onPress={this.viewWishlist.bind(this)} style={styles.updateProfileButton}>
                                <Text allowFontScaling={false} style={styles.updateProfileText}>
                                    View Wishlist
                                </Text>
                            </TouchableOpacity>
                        </View> 
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                        >
                            <Text allowFontScaling={false} style={{
                                color: 'lightgrey',
                                fontSize: 13
                            }}>
                                _________________________________________
                            </Text>
                        </View> */}