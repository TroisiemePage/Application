import * as React from "react";
import {WordDetector} from "../../../Modules/WordDetector";
import {Image, Dimensions, View} from "react-native";
const wordDetector = new WordDetector();
import decor from "../../../Assets/Images/Pages/Page1/Decor_pageMoines.png";
import moines from "../../../Assets/Animations/Pages/compiled/MOINES_loop.png";
import precepteur from "../../../Assets/Animations/Pages/compiled/PRECEPTEUR_loop.png";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";
import {LetterSelector} from "./LetterSelector";
import GameChapterOneLetterA from "./GameChapterOne";
import {createDrawerNavigator} from "react-navigation";
import {Overlay, PageRouter} from "../../PageRouter/PageRouter";

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
        marginTop: 200
    },
    button: {
        opacity: 0,
        width: 200,
        height: 200,
        marginTop: 550,
        marginLeft: 50,
    }
};

const letterSelector = "";
class Page1Content extends React.Component {

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
        };

    }

    render() {
        console.log("CONTENT", this.props.navigation);
        return (
            <Overlay {...this.props}>
            <View style={styles.container}>
                <Image
                    source={decor}
                    style={styles.image}
                    resizeMode={"contain"}
                    resizeMethod={"scale"}
                />

                <LetterSelector
                    style={styles.letter}
                    ref={(letterSelectorRef) => {
                        letterSelector = letterSelectorRef;
                    }}
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
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}
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
                    onPress={() => {
                        console.log("Precepteur");
                    }}
                />
            </View>
            </Overlay>
        );
    }
}

export const Page1 = createDrawerNavigator(
    {
        Game: {
            screen: Page1Content
        }
    },
    {
        drawerPosition: 'right',
        drawerBackgroundColor: '#FDFBEF',
        initialRouteName: 'Game',
        drawerWidth: 900,
        drawerLockMode: "locked-closed",
        contentComponent: (props) => {
            return (<GameChapterOneLetterA {...props} letterSelector={letterSelector}/>)
        }
    }
);
Page1.navigationOptions = {
    header: null
};