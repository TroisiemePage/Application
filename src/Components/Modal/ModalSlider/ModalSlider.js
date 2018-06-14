import React, {Component} from 'react';
import {View, TouchableOpacity, Dimensions, Image} from 'react-native';

import Modal from "react-native-modal";

const {height} = Dimensions.get('window');

export class ModalSlider extends Component {

    styles = {
        modal: {
            flex: 1,
            alignItems: this.props.side === "left" ? "flex-start" : "flex-end",
            margin: 0,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowOpacity: 0.35,
            shadowRadius: 20,
            elevation: 3,
            backgroundColor: "transparent",
        },
        modalContent: {
            backgroundColor: "#fdfaea",
            width: this.props.width ? this.props.width : 270,
            height: height,
        },
        content: {
            width: "100%",
            height: "100%",
            paddingTop: 40
        },
        close: {
            backgroundColor: "#fdfaea",
            position: "absolute",
            ...(this.props.side === "left" ? {
                top: 10,
                right: 10
            } : {
                top: 10,
                left: 10
            }),
            height: 40,
            width: 40,
            zIndex: 1000,
        },
        closeImage: {
            width: 20,
            height: 20,
            margin: 10
        }
    };


    render() {
        return (
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
                    <TouchableOpacity style={this.styles.close} onPress={() => this.props.onClose()}>
                        <Image
                            style={this.styles.closeImage}
                            source={require('../../../Assets/Images/Elements/close_button.png')}
                        />
                    </TouchableOpacity>
                    <View style={this.styles.content}>
                        {this.props.children}
                    </View>
                </View>
            </Modal>
        );
    }
}

