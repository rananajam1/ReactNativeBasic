import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';
import Display from '../components/Display';
import { ScrollView } from 'react-native-gesture-handler';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(responseJSON => this.setState({dataArray:responseJSON}))
    }

    navigationHandler(data){
        this.props.navigation.navigate("Albums",{DATA:data})
    }

    render() {
        return (
            <View>
                <Header headerText="Users Data" />
                <ScrollView>
                    {this.state.dataArray.map(element =>
                    <Display
                    key={element.id} 
                    title={element.name} 
                    buttonTitle="View Albums" 
                    data={element} 
                    content={element.email} 
                    icon="arrow-forward" 
                    navigationHandler={this.navigationHandler.bind(this, element)}
                    />
                    )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    displayRow: {
        flexDirection: 'row'
    },
    displayColumn: {

    }
});

export default Users;