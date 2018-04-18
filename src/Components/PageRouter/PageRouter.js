import * as React from "react";
import {PageDetector} from "../../Modules/PageDetector";
import {Page1} from "../Pages/Page1";
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

class MenuBar extends React.Component {
    render() {
        return (
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
        console.log(this.pageDetector);
    }

    intervalize(num) {
        return (num >= 0 ? (num < this.pages.length ? num : (this.pages.length - 1)) : 0)
    }

    render() {
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB'
            }}>

                {
                    React.createElement(this.pages[this.intervalize(this.pageDetector.currentPage)])
                }
                <MenuBar/>
                <Navigator pageNumber={this.pageDetector.currentPage}/>
            </View>
        );
    }
}

