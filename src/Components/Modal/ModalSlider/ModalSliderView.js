import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import ModalContent from "./ModalSliderContent";

import Modal from "react-native-modal";

const {height} = Dimensions.get('window');

export class ModalSliderView extends Component {

    styles = {
        container: {
            flex: 1,
            alignItems: this.props.side === "left" ? "flex-start" : "flex-end",
            justifyContent: this.props.side === "left" ? "flex-start" : "flex-end",
        },
        modal: {
            flex: 1,
            alignItems: this.props.side === "left" ? "flex-start" : "flex-end",
            margin: 0,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowOpacity: 0.35,
            shadowRadius: 20,
            elevation: 3,
        },
        modalContent: {
            backgroundColor: "#FDFBEF",
            padding: 20,
            justifyContent: "center",
            alignItems: "flex-start",
            width: 270,
            height: height,
        },
    };

    state = {
        modalVisible: false,
    };

    hideModal() {
        this.setState({modalVisible: false});
    }

    showModal() {
        this.setState({modalVisible: true});
    }

    static getDerivedStateFromProps(props, state) {
        return Object.assign(state, {
            modalVisible: props.open
        });
    }

    render() {
        return (
            <View style={this.styles.container}>
                <TouchableOpacity onPress={() => this.showModal()}>
                    <View>
                        <Text>show modal</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    isVisible={this.state.modalVisible}
                    style={this.styles.modal}
                    animationIn={this.props.side === "left" ? "slideInLeft" : "slideInRight"}
                    animationOut={this.props.side === "left" ? "slideOutLeft" : "slideOutRight"}
                    backdropOpacity={0}
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    onBackdropPress={() => this.hideModal()}
                    backdropColor={"black"}
                >
                    <View style={this.styles.modalContent}>
                        <ModalContent
                            closeEvent={() => this.hideModal()}
                        >
                            {this.props.children}
                        </ModalContent>
                    </View>
                </Modal>
            </View>
        );
    }
}

