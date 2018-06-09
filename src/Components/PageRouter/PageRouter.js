import * as React from "react";
import {Page4} from "../Pages/Page4/Page4";
import {Page2} from "../Pages/Page2";
import {Page1} from "../Pages/Page1";
import {Button, Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import menuPicto from "../../Assets/Images/Elements/MENU.png";
import trompette from "../../Assets/Images/Elements/MICRO.png";
import {createStackNavigator} from "react-navigation";
import {PageDetector} from "../../Modules/PageDetector";
import {words} from "../../Stores/words";
import {WordDetector} from "../../Modules/WordDetector";
import {Menu} from "../Menu/Menu";
const {height, width} = Dimensions.get('window');

export class Overlay extends React.Component {

    state = {
        recognizing: false,
    };

    constructor() {
        super();
        PageDetector.onPageChange((currentPage) => {
            //let currentPage = this.state.currentPage;
            console.log(currentPage);
            let pageNumber = 5;
            let currentPageIntervalized = (currentPage >= 0 ? (currentPage < pageNumber ? currentPage : (pageNumber - 1)) : 0);
            this.props.navigation.navigate("Page" + (currentPageIntervalized + 1));
            console.log("PAGE ROUTER", currentPageIntervalized);
        });
    }

    componentDidMount() {
        WordDetector.setWordList(this.props.wordList.map((word) => word.word));
        console.log(WordDetector);
    }

    toggleRecognition() {
        if(!this.state.recognizing) {
            this.setState({
                recognizing: true
            });
            WordDetector
                .recognizeWord()
                .then((recognizedWord) => {
                    this.setState({
                        recognizing: false
                    });
                    this.props.navigation.navigate("Dictionnary", {word: recognizedWord[0].word});
                });
        } else {
            WordDetector
                .reset()
                .then(() => {
                    this.setState({
                        recognizing: false
                    });
                });
        }

    }

    render() {
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB'
            }}>
                {this.props.children}

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('Menu')
                    }}
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "#050A3A",
                        backgroundColor: "#fefbeb"
                    }}
                >
                    <Image

                        source={menuPicto}
                        style={{
                            width: 50,
                            height: 50
                        }}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.toggleRecognition()}
                    style={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                        backgroundColor: this.state.recognizing ? "#ec4739" : "#fefbeb",
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: this.state.recognizing ? "#ec4739": "#050A3A"
                    }}
                >
                    <Image
                        resizeMode={"contain"}
                        source={trompette} style={{
                        width: 35,
                        height: 35,
                        margin: 7,
                        tintColor: this.state.recognizing ? "white" : "#050A3A"
                    }}/>
                </TouchableOpacity>
            </View>
        );
    }
}

function Page0(props) {
    return (
        <Overlay {...props} wordList={words}>
            <Text>Bonjour, je suis le Menu</Text>
        </Overlay>
    );
};

class Page3 extends React.Component {
    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <Text>Appuie sur la trompette quand tu ne comprend pas un mot</Text>
            </Overlay>
        );
    }
}
Page3.navigationOptions = {
    header: null
};

const MenuWrapper = (props) => {
    return (
        <Overlay {...props} wordList={words}>
            <Menu {...props}/>
        </Overlay>
    );
};

MenuWrapper.navigationOptions = {
    header: null
};

export const PageRouter = createStackNavigator({
    Page5: {
        screen: Page4
    },
    Page4: {
        screen: Page3
    },
    Page3: {
        screen: Page2
    },
    Page2: {
        screen: Page1
    },
    Page1: {
        screen: MenuWrapper
    }
}, {
    initialRouteName: 'Page1'
});
PageRouter.navigationOptions = {
    header: null
};
