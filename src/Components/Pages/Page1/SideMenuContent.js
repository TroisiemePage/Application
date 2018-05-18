import React, {Component} from 'react';
import {Text, Image, ScrollView, StyleSheet} from 'react-native';

import {DrawerItems, SafeAreaView} from 'react-navigation';

export default class SideMenu extends Component {
    render () {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
                    <DrawerItems {...this.props} />

                    <Text>Cool isn't it ? :) </Text>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFAEA',
    },
    img: {
        height: 250,
        width: 250,
    },
});