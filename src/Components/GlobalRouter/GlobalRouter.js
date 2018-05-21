import * as React from "react";
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import {PageRouter} from "../PageRouter/PageRouter";
import menuPicto from "../../Assets/Images/elements/menu.png";

const {height, width} = Dimensions.get('window');

export class GlobalRouter extends React.Component {


    state = {
        page: "MENU"
    };

    constructor() {
        super();
    }

    render() {
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB'
            }}>
                <PageRouter/>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        console.log("MENU");
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
                        width: 40,
                        height: 40
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        console.log("VOCAL");
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
                        width: 40,
                        height: 40
                    }}/>
                </TouchableOpacity>
            </View>
        );
    }
}

/*
* let view = (<View/>);
        switch (this.state.page) {
            case "BOOK":
                view = (<PageRouter/>);
                break;
            case "DICTIONNARY":
                view = (
                    <View style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                    }}>
                        <Button
                            onPress={() => {
                            }}
                            title="Menu"
                        />
                    </View>
                );
                break;
            case "MENU":
                view = [<Menu key={1}/>, (
                    <View key={2} style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                    }}>
                        <Button
                            onPress={() => {
                            }}
                            title="Menu"
                        />
                    </View>
                )];
                break;
            default:
                view = [<Menu key={1}/>, (
                    <View key={2} style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: 'center',
                    }}>
                        <Button
                            onPress={() => {
                            }}
                            title="Menu"
                        />
                    </View>
                )];
                break;
        }
        */