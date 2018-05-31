import * as React from "react";
import {Page1} from "../Pages/Page1/Page1";
import {Page2} from "../Pages/Page2";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import menuPicto from "../../Assets/Images/Elements/menu.png";
import {createStackNavigator} from "react-navigation";
import {PageDetector} from "../../Modules/PageDetector";

const {height, width} = Dimensions.get('window');

export class Overlay extends React.Component {

    pageDetector = new PageDetector();

    componentDidMount() {
        this.pageDetector.onPageChange((currentPage) => {
            let pageNumber = 2;
            let currentPageIntervalized = (currentPage >= 0 ? (currentPage < pageNumber ? currentPage : (pageNumber - 1)) : 0);
            this.props.navigation.navigate("Page" + (currentPageIntervalized + 1));
            console.log("PAGE ROUTER", currentPageIntervalized);
        });
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
                    }}
                >
                    <Image source={menuPicto} style={{
                        width: 50,
                        height: 50
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('Dictionnary')
                    }}
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                    }}
                >
                    <Image source={menuPicto} style={{
                        width: 50,
                        height: 50
                    }}/>
                </TouchableOpacity>
            </View>
        );
    }
}


export const PageRouter = createStackNavigator({
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    },
}, {
    initialRouteName: 'Page1'
});
PageRouter.navigationOptions = {
    header: null
};
