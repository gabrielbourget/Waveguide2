import { StyleSheet } from 'react-native'
import Theme from '../../../constants/Theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.TM_WHITE,
    },
    scrollViewStyle: {
        flex: 1,
        backgroundColor: Theme.TM_WHITE,
    },
    userAvatarStyle: {
        width: 120,
        height: 120
    },
    // paddingView: {
    //     paddingTop: 15,
    //     paddingBottom: 15,
    //     paddingHorizontal: 5
    // },
    headingContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    textFieldStyle: {
        fontFamily: Theme.TM_FONT,
    },
    textInputPadding: {
        paddingHorizontal: 10,
    },
    imageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // updateProfileButton: {
    //     backgroundColor: '#333333',
    //     // marginRight: 10,
    //     // marginLeft: 10,
    //     paddingTop: 10,
    //     height: 40,
    //     paddingBottom: 10,
    //     borderRadius: 5,
    //     borderWidth: 1,
    //     borderColor: '#333333',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'

    // },
    // signoutText: {
    //     color: '#ffb6c1',
    //     textAlign: 'center',
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     fontSize: 14,
    //     fontFamily: 'MontserratBold'
    // },
    // updateProfileText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     fontFamily: 'MontserratBold'
    // },
    mainContentView:
    {
        marginLeft: 10,
        marginRight: 10,
    },
    bottomButtonContainerView: {
        marginTop: 0,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 30,
        marginTop: 3,
        marginBottom: 20,
        alignItems: 'center',
    },
    profileButton: {
        width: '50%',
        height: 40,
    },
    privacyViewStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    privacyOnOffContainerView: {
        alignContent: "center",
    },
    privacyOnOffTextStyle: {
        textAlign: 'center',
        color: Theme.TM_BLACK,
    },
    privacyLabelTextStyle: {
        textAlign: 'center',
        color: Theme.TM_DARK_GREY,
    },
    privacyExplanationTextStyle: {
        marginLeft: 10,
        marginRight: 10,
        color: Theme.TM_DARK_GREY,
    },

});

export default styles