import React from 'react';
import {CarteMenu} from "./Menu/CarteMenu";
import {createStackNavigator} from 'react-navigation';
import {PageRouter} from "./PageRouter/PageRouter";

const Navigator = createStackNavigator({
    Home: {
        screen: PageRouter
    },
    Menu: {
        screen: CarteMenu
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