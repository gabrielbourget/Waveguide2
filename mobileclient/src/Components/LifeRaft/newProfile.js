// todo
// translate update profile sign out button, 
// use tm button for those two buttons. 
//unify the tappable rectange style with design
//support toggle of privacy ON/OFF text
//align edit icons to the right side. 

// - External Imports
import * as React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import * as Localization from 'expo-localization'
import I18n from 'i18n-js'
import {
    View, Text, Image,
    StyleSheet, ScrollView,
    TouchableOpacity, TextInput,
    SafeAreaView, Alert
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Camera, Permissions } from 'expo';
import { TextField } from 'react-native-material-textfield'
import TMSectionedMultiSelect from '../../components/common/TMSectionedMultiSelect.js'
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Ionicons';

// - Project-Level Component Imports
import TMButton from '../../components/common/TMButton'
import EditButton from '../../components/common/EditButton'
import TMSeparator from '../../components/common/TMSeparator'
import TMHeader from '../../components/common/TMHeader'
import AvatarImage from "../../components/common/avatarImage/AvatarImage";
import CenteringCradle from '../../components/common/cradles/centeringCradle/CenteringCradle'

// - Internal Project Imports
import { updateUserProfile, getUserInfo } from '../../shared/store/actions/userAction'
import { signOut, isUserLoggedIn } from '../../shared/store/actions/authActions'
import { clothingStyles, shopCategories, prices, sizes } from '../../shared/constants/profileConstants'
import Theme from '../../../constants/Theme'
import * as Language from '../../../constants/Language'

// - Component Directory Level
import styles from "./profileStyles"

const gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
];

class Profile extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.inputRefs = {};
    }

    state = {
        email: '',
        password: 'password',
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
        clothingStyle: clothingStyles,
    };

    componentDidMount() {

        /** start listening to onAuthStateChanged */
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
            console.log("state changed");
            if (!user) {
                this.props.navigation.navigate('SignIn', { showModal: true });
            }
            else {
                this.props.getUserInfo()
            }
        });
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

    // - Logic flow to render out a photo if there is one, placeholder if not.
    renderUserAvatar = (avatarNameField) => {
        // if (
        //     this.props.userProfile === null ||
        //     (!this.props.userProfile.photoURL) || (this.props.userProfile.photoURL.trim() === '')
        // ) {
        //     return ( <UserAvatar size="80" name={ avatarNameField }/> )
        // }
        // else return ( <AvatarImage uri={ this.props.userProfile.photoURL }/> )
        return (
            <AvatarImage 
                uri="https://lh6.googleusercontent.com/-g6utiFReNpM/AAAAAAAAAAI/AAAAAAAAAQI/h0cjZsYy9Ow/s96-c/photo.jpg"
                onPress={() => {}}
            />
        )
    }

    render() {        
        const {userProfile, userInfoLoading} = this.props;
        
        const nameField = (userProfile === undefined || userProfile === null ) ?
        'CANNOT RETRIEVE NAME' :
        `${userProfile.firstName} ${userProfile.lastName}`
        
        const avatarNameField = (userProfile === undefined || userProfile === null) ?
        'NO NAME' :
        `${userProfile.firstName} ${userProfile.lastName}`
        
        console.log('user profile in <Profile/>')
        console.table(userProfile)

        if (userInfoLoading)  {
            console.log('still loading user profile')
            return (
                <CenteringCradle>
                    <Text> Loading ... </Text>
                </CenteringCradle>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.container}>
                        <TMHeader />

                        {/* <View
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
                        <View style={styles.mainContentView}>
                            <View style={styles.headerLineViewStyle}>
                                {this.renderUserAvatar(avatarNameField)}
                                {/* <UserAvatar size="80" name={this.props.userProfile === undefined || this.props.userProfile === null ? 'NONAME' : this.props.userProfile.firstName + ' ' + this.props.userProfile.lastName} /> */}
                                <View style={styles.subheaderLineViewStyle}>
                                    <Text allowFontScaling={false} style={styles.headerLineText} >
                                        {this.props.userProfile === undefined || this.props.userProfile === null ? 'CANNOT RETRIEVE NAME' : this.props.userProfile.firstName + ' ' + this.props.userProfile.lastName}
                                    </Text>
                                    <Text allowFontScaling={false} style={styles.headerLineText} >
                                        Toronto, Canada
                            </Text>
                                </View>
                                <View flexDirection='row'>
                                    <EditButton></EditButton>
                                </View>
                            </View>
                            <View style={styles.statisticsViewStyle}>
                                <View style={styles.statisticsSubViewStyle}>
                                    <Text style={styles.statisticsNumberTextStyle}>
                                        28
                                </Text>
                                    <Text style={styles.statisticsTextStyle}>
                                        Following
                                </Text>
                                </View>
                                <View style={styles.statisticsSubViewStyle}>
                                    <Text style={styles.statisticsNumberTextStyle}>
                                        12
                                </Text>
                                    <Text style={styles.statisticsTextStyle}>
                                        Followers
                                </Text>
                                </View>
                                <View style={styles.statisticsSubViewStyle}>
                                    <Text style={styles.statisticsNumberTextStyle}>
                                        48
                                </Text>
                                    <Text style={styles.statisticsTextStyle}>
                                        Likes
                                </Text>
                                </View>
                                <View style={styles.statisticsSubViewStyle}>
                                    <Text style={styles.statisticsNumberTextStyle}>
                                        12
                                </Text>
                                    <Text style={styles.statisticsTextStyle}>
                                        Check-ins
                                </Text>
                                </View>
                            </View>
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
                            <View>
                                <Text></Text>
                            </View>
                            <TMSeparator />
                            <View style={styles.myStylesViewStyle}>
                                <TMSectionedMultiSelect
                                    showDropDowns={false}
                                    styles={{ button: { backgroundColor: Theme.PALE_GOLD } }}
                                    items={this.state.clothingStyle}
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
                                    onSelectedItemsChange={this.onSelectedItemsChange}
                                    selectedItems={this.state.selectedClothingStyles}
                                />
                            </View>
                            <TMSeparator />
                            <View style={styles.privacyViewStyle}>
                                <View style={styles.privacyOnOffContainerView}>
                                    <Text style={styles.privacyOnOffTextStyle}>OFF</Text>
                                    <Text style={styles.privacyLabelTextStyle}>Privacy</Text>
                                </View>
                                <Text style={styles.privacyExplanationTextStyle}>
                                    Off automatically shares your stories with your friends.
                            </Text>
                            </View>
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
        userProfile: state.userReducer.userProfile,
        userProfileErr: state.userReducer.userProfileErr,
        userInfoLoading: state.userReducer.userInfoLoading,
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
                        </View> */}