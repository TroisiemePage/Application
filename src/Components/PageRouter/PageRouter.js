import * as React from "react";
import {Page4} from "../Pages/Page4/Page4";
import {Page2} from "../Pages/Page2/Page2";
import {Page1} from "../Pages/Page1/Page1";
import {Dimensions, FlatList, Image, TouchableOpacity, View} from "react-native";
import menuPicto from "../../Assets/Images/Elements/MENU2.png";
import trompette from "../../Assets/Images/Elements/MICRO.png";
import {createStackNavigator} from "react-navigation";
import {PageDetector} from "../../Modules/PageDetector";
import {WordDetector} from "../../Modules/WordDetector";
import {Menu} from "../Menu/Menu";
import {Page3} from "../Pages/Page3";
import {Page0} from "../Pages/Page0";
const {height, width} = Dimensions.get('window');

export class Overlay extends React.Component {

    state = {
        recognizing: false,
    };

    componentDidMount() {
        WordDetector.setWordList(this.props.wordList.map((word) => word.word));
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
                backgroundColor: '#FEFBEB',
                overflow: "hidden"
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


export class PageRouter extends React.Component {

    pages = [
        Page0,
        Page1,
        Page2,
        Page3,
        Page4
    ];

    componentDidMount() {
        PageDetector.onPageChange((currentPage) => {
            let currentPageIntervalized = (currentPage >= 0 ? (currentPage < this.pages.length ? currentPage : (this.pages.length - 1)) : 0);
        });
        console.log(this.props)
    }

    render() {
        return (
            <FlatList
                ref={(ref) => this.ref = ref}
                bounces={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                data={this.pages}
                renderItem={(page) => {
                    return (<page.item navigation={this.props.navigation}/>)
                }}
            />
        )
    }
}

PageRouter.navigationOptions = {
    header: null
};
/*
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
        screen: Page0
    }
}, {
    initialRouteName: 'Page1'
});

*/
