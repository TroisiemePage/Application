import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import ModalContent from "./ModalSliderContent";

import Modal from "react-native-modal";

const {height} = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        margin: 0,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowRadius: 20,
        elevation: 3,
    },
    modalContent: {
        backgroundColor: "#FDFBEF",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        width: 270,
        height: height,
    },
};

export default class ModalView extends Component {

    state = {
        modalVisible: false,
    };

    toggleModalVisibility() {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    hideModal() {
        this.setState({modalVisible: false});
    }

    showModal() {
        this.setState({modalVisible: true});
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.showModal()}>
                    <View>
                        <Text>hello click here to show modal</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    isVisible={this.state.modalVisible}
                    style={styles.modal}
                    animationIn="slideInLeft"
                    animationOut="slideOutLeft"
                    backdropOpacity={0}
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    onBackdropPress={() => this.hideModal()}
                    backdropColor={"black"}
                >
                    <View style={styles.modalContent}>
                        <ModalContent
                            closeEvent={() => this.hideModal()}
                            title={this.props.title}
                            image={require('../../../Assets/Images/Menu/chateauNB.png')}
                        >
                            {this.props.children}
                        </ModalContent>
                    </View>
                </Modal>
            </View>
        );
    }
}

