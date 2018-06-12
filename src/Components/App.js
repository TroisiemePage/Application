import React from 'react';
import {Menu} from "./Menu/Menu";
import {createStackNavigator} from 'react-navigation';
import {PageRouter} from "./PageRouter/PageRouter";
import {Dictionnary} from "./Dictionnary/Dictionnary";
import {Button, View} from "react-native";

const style = {
    buttonBack: {
        position: "absolute",
        top: 20,
        left: 20,
    }
};

const MenuWrapper = (props) => {
    return (<Menu {...props}  back={true}/>);
};

MenuWrapper.navigationOptions = {
    header: null
};

const Navigator = createStackNavigator({
    Home: {
        screen: PageRouter
    },
    Menu: {
        screen: MenuWrapper
    },
    Dictionnary: {
        screen: Dictionnary
    }
}, {
    initialRouteName: 'Home',
    mode: "modal"
});

export default class App extends React.Component {

    render() {
        return <Navigator/>;
    }

}

//If Production
console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;
