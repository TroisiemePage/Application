import * as React from "react";
import {PageDetector} from "../../Modules/PageDetector";
import {Page1} from "../Pages/Page1/Page1";
import {Page2} from "../Pages/Page2";
import {observer} from "mobx-react";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import menuPicto from "../../Assets/Images/Elements/menu.png";
import {createNavigator, createStackNavigator} from "react-navigation";
import CarteMenu from "../Menu/CarteMenu";
const {height, width} = Dimensions.get('window');

export class Overlay extends React.Component {
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

const pageDetector = new PageDetector();


export const PageRouter = createStackNavigator({
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    },
}, {
    initialRouteName: 'Page1',
});
PageRouter.navigationOptions = {
    header: null
};
pageDetector.onPageChange((currentPage) => {
    let pageNumber = 2;
    let currentPageIntervalized = (currentPage >= 0 ? (currentPage < pageNumber ? currentPage : (pageNumber - 1)) : 0);
    PageRouter.navigation.navigate("Page" + currentPageIntervalized);
});