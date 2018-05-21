import * as React from "react";
import {PageDetector} from "../../Modules/PageDetector";
import {Page1} from "../Pages/Page1/Page1";
import {Page2} from "../Pages/Page2";
import {observer} from "mobx-react";
import {Button, Dimensions, Text, View} from "react-native";

const {height, width} = Dimensions.get('window');

//private

class Navigator extends React.Component {

    render() {
        return (
            <View style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                flex: 1,
                flexDirection: "row",
                alignItems: 'center',
                backgroundColor: '#FEFBEB',
                borderRadius: 5,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                padding: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    width: 20,
                    textAlign: "center"
                }}>{this.props.pageNumber}</Text>

            </View>
        )
    }
}



@observer
export class PageRouter extends React.Component {
    pages = [
        Page1,
        Page2
    ];

    constructor() {
        super();
        this.pageDetector = new PageDetector();
    }

    intervalize(num) {
        return (num >= 0 ? (num < this.pages.length ? num : (this.pages.length - 1)) : 0)
    }

    render() {
        let pageNumber = 0;//this.pageDetector.currentPage;
        return (
            <View style={{
                width: width,
                height: height
            }}>
                {
                    React.createElement(this.pages[this.intervalize(pageNumber)])
                }

            </View>
        );
    }
}

