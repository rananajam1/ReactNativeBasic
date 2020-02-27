import React, { Component } from 'react';
import { Image } from 'react-native';
import Header from '../components/Header'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import Display from '../components/Display';
import { ScrollView } from 'react-native-gesture-handler';
export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(responseJSON => this.setState({
                data: responseJSON,
            }))
        // .then(responseJSON => this.setState({ data: responseJSON.filter(elements => elements.userId == recievedData.id) }))
    }

    navigationHandler(data){
        this.props.navigation.navigate("Photos",{DATA:data})
    }


    render() {
        const { data } = this.state;
        const recievedData = this.props.route.params.DATA;
        // console.log(this.props.route.params.DATA)

        // const filteredData=[]
        const filteredData = data.filter(item => item.userId == recievedData.id)

        return (
            <View>
                <Header headerText="Albums List" />
                <ScrollView>
                    {filteredData.map(element=>
                    <Display
                    key={element.id} 
                    title={element.title} 
                    buttonTitle="View Photos" 
                    data={element} 
                    content=""
                    icon="arrow-forward" 
                    navigationHandler={this.navigationHandler.bind(this, element)}
                    />
                     )}
                </ScrollView>
            </View>
        );
    }
}