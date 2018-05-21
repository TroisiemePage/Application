import * as React from "react";
import {WordDetector} from "../../../Modules/WordDetector";
import {Image, Text, Dimensions, View, Button, ScrollView} from "react-native";
const wordDetector = new WordDetector();
import decor from "../../../Assets/Images/Pages/Page1/Decor_pageMoines.png";
import moines from "../../../Assets/Animations/Pages/compiled/MOINES_loop.png";
import precepteur from "../../../Assets/Animations/Pages/compiled/PRECEPTEUR_loop.png";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";
import {LetterSelector} from "./LetterSelector";

import GameChapterOneLetterA from "./GameChapterOne";
import sideMenuContent from './SideMenuContent';
import {createDrawerNavigator} from 'react-navigation';

const {height, width} = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        position: "absolute",
        width: width,
        height: height,
        left: 0,
        top: 0,
    },
    letter: {
        marginLeft: 280,
        marginTop: 200,
        borderWidth: 2,
        borderColor: "black"
    }
};


class Page1Content extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    };

    constructor() {
        super();
        wordDetector.setWordList([
            "Lotis",
            "Oriflant"
        ]);
        this.state = {
            duration: 0,
            imageNumber: 0,
            animated: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={decor}
                    style={styles.image}
                    resizeMode={"contain"}
                    resizeMethod={"scale"}
                />
                <ApngPlayer
                    ref={"moines"}
                    style={{
                        position: "absolute",
                        bottom: 30,
                        right: 50
                    }}
                    scale={0.45}
                    playlist={[moines]}
                />
                <ApngPlayer
                    ref={"precepteur"}
                    style={{
                        position: "absolute",
                        bottom: 140,
                        left: 110
                    }}
                    scale={0.5}
                    playlist={[precepteur]}
                    onPress={() => this.props.navigation.openDrawer()}
                />
                <LetterSelector
                    style={styles.letter}
                />
            </View>
        );
    }
}

export const Page1 = createDrawerNavigator({
    Home: {
        screen: Page1Content,
    }
}, {
    drawerPosition: 'right',
    drawerBackgroundColor: '#FDFBEF',
    initialRouteName: 'Home',
    drawerWidth: 900,
    drawerLockMode: "locked-closed",
    contentComponent: GameChapterOneLetterA,
});