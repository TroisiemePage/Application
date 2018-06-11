import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

export default class Chateaux extends Component {
    styles = {
        container: {
            position: 'absolute',
            left: this.props.x,
            top: this.props.y,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: this.props.width,
            height: this.props.height,
            opacity: this.props.opacity,
        },
        title: {
            fontSize: 18,
            padding: 10,
            textAlign: 'center',
            fontFamily: 'Adobe Garamond Pro',
            color: '#0E0637',
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
                        source={this.props.image}
                    />
                </TouchableOpacity>
                <Text style={this.styles.title}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}
