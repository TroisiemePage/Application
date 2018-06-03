import React from 'react';
import {Menu} from "./Menu/Menu";
import {createStackNavigator} from 'react-navigation';
import {PageRouter} from "./PageRouter/PageRouter";
import {Dictionnary} from "./Dictionnary/Dictionnary";

const Navigator = createStackNavigator({
    Home: {
        screen: PageRouter
    },
    Menu: {
        screen: Menu
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