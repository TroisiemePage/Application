import * as React from "react";
import {View} from "react-native";
import {PageRouter} from "../PageRouter/PageRouter";

export class GlobalRouter extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <PageRouter/>
            </View>
        );
    }
}