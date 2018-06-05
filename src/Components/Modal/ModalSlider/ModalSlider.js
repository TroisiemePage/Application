import React, {Component} from 'react';
import {View, TouchableOpacity, Dimensions, Image} from 'react-native';

import Modal from "react-native-modal";

const {height} = Dimensions.get('window');

export class ModalSlider extends Component {

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
            backgroundColor: "#fdfaea",
            justifyContent: "center",
            alignItems: "flex-start",
            width: 270,
            height: height,
        },
        content: {
            width: "100%",
            height: "100%",
            paddingTop: 15
        },
        close: {
            backgroundColor: "#fdfaea",
            position: "absolute",
            left: 10,
            top: 10,
            right: 10,
            flex: 1,
            justifyContent: this.props.side === "left" ? "flex-end" : "flex-start",
            alignItems: this.props.side === "left" ? "flex-end" : "flex-start",
            height: 15,
            zIndex: 10,
            padding: 10
        },
        closeImage: {
            width: 15,
            height: 15,
        }
    };


    render() {
        return (
            <View style={this.styles.container}>
                <Modal
                    isVisible={this.props.open}
                    style={this.styles.modal}
                    animationIn={this.props.side === "left" ? "slideInLeft" : "slideInRight"}
                    animationOut={this.props.side === "left" ? "slideOutLeft" : "slideOutRight"}
                    backdropOpacity={0}
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    onBackdropPress={() => this.props.onClose()}
                    backdropColor={"black"}
                >
                    <View style={this.styles.modalContent}>
                        <View style={this.styles.close}>
                            <TouchableOpacity onPress={() => this.props.onClose()}>
                                <Image
                                    style={this.styles.closeImage}
                                    source={require('../../../Assets/Images/Elements/close_button.png')}
                                />
                            </TouchableOpacity>
                        </View>

                            <View style={this.styles.content}>
                                {this.props.children}
                            </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

