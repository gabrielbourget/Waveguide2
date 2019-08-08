import React from 'react'
import { Text, View } from 'react-native'
import I18n from 'i18n-js'

import styles from './UserStatisticsStyles'


class UserStatistics extends React.Component {
    render() {
        return (
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
        )
    }
}

export default UserStatistics