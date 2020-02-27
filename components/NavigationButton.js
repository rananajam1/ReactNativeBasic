import React, { Component } from "react";
import {Button, Icon, Text } from "native-base";

function NavigationButton(props) {
    return (
        <Button iconLeft onPress={props.navigationHandler} >
            <Icon name={props.icon} />
            <Text>{props.buttonTitle}</Text>
        </Button>
    );
}

export default NavigationButton;