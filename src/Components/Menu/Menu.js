import React from 'react';

import MenuStyle from "./Menu.style";
import {PageRouter} from "../PageRouter/PageRouter";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <PageRouter/>
        );
    }
}

