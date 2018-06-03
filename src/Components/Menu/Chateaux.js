import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

export default class Chateaux extends Component {
    styles = {
        container: {
            position: 'absolute',
            left: this.props.x,
            top: this.props.y,
        },
        image: {
            width: this.props.width,
            height: this.props.height,
            opacity: this.props.opacity,
        },
        title: {
            fontSize: 16,
            color: '#000',
            padding: 10,
            textAlign: 'center',
        }
    };

    render() {
        return(
            <View style={this.styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.openModal()}
                >
                    <Image
                        style={this.styles.image}
                        source={require('../../Assets/Images/Menu/chateauNB.png')}
                    />
                </TouchableOpacity>
                <Text style={this.styles.title}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}
