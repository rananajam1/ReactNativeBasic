import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, Card } from 'native-base';

export default class Screen extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.headerText}</Title>
                </Body>
            </Header>
        );
    }
}