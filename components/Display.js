import React, { Component } from "react";
import { Container, Header, Content, Card, Body, CardItem, Accordion, Button, Icon, Text } from "native-base";
import NavigationButton from "./NavigationButton";

export default class Display extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Card transparent>
                <CardItem header button >
                    <Text>{this.props.title}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.content}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer button>
                    <NavigationButton 
                    buttonTitle={this.props.buttonTitle}
                    icon={this.props.icon}
                    data={this.props.data}
                    navigationHandler={this.props.navigationHandler}
                    />
                </CardItem>
            </Card>
        );
    }
}