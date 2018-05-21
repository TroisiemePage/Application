import React from 'react';
import {View} from 'react-native';

import {GlobalRouter} from "../GlobalRouter/GlobalRouter";
import CarteMenu from "./CarteMenu";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <GlobalRouter/>
                <CarteMenu />
            </View>
        );
    }
}

