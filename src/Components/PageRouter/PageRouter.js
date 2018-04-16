import * as React from "react";
import {PageDetector} from "../../Modules/PageDetector";
import {Page1} from "../Pages/Page1";
import {Page2} from "../Pages/Page2";
import {observer} from "mobx-react";
import {Button, Dimensions, Text, View} from "react-native";
import {observable} from "mobx";
const {height, width} = Dimensions.get('window');
//private
const pageDetector = new PageDetector();

class Navigator extends React.Component {
    currentPage = 0;

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
                shadowOffset: { width: 0, height: 0 },
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
                <Button
                    onPress={() => {
                        this.props.onPrev();
                    }}
                    title="Précédent"
                />
                <Button
                    onPress={() => {
                        this.props.onNext();
                    }}
                    title="Suivant"
                />

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
    @observable currentPage = 0;

    constructor() {
        super();
    }

    intervalize(num) {
        return (num >= 0 ? (num < this.pages.length ? num: (this.pages.length - 1)) : 0)
    }

    render() {
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB'
            }}>


                {React.createElement(this.pages[this.currentPage])}
                <Navigator
                    onPrev={() => {
                        this.currentPage = this.intervalize(this.currentPage - 1);
                    }}
                    onNext={() => {
                        this.currentPage = this.intervalize(this.currentPage + 1);
                    }}
                    pageNumber={this.currentPage}
                />
            </View>
        );
    }
}

