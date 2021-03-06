import React, { Component } from 'react';
import { Image, Dimensions, View, Text, Button, Modal } from 'react-native';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import Card from '../components/Card';
import Header from '../components/Header';


export default class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(responseJSON => this.setState({
                data: responseJSON,
            }))
    }

    navigationHandler(data) {
        this.props.navigation.navigate("Photos", { DATA: data })
    }

    render() {
        const { data } = this.state;
        // console.log(this.props.route.params.DATA)
        // console.log(data)
        // const filteredData = []
        const recievedData = this.props.route.params.DATA;
        const filteredData = data.filter(item => item.albumId == recievedData.id)
        const imageUrls = filteredData.filter(item => item.url)

        // console.log(imageUrls)
        return (
            <View>
                <Button title="Go To Homepage" onPress={() => { this.props.navigation.navigate("Users") }} ><Icon name='home' /></Button>
                <ScrollView>
                    {filteredData.map(item =>
                        <Card >
                            <Text>{item.title}</Text>
                            <ImageZoom cropWidth={Dimensions.get('window').width}
                                cropHeight={Dimensions.get('window').height}
                                imageWidth={120}
                                imageHeight={120}>
                                <Image style={{ width: 120, height: 120 }}
                                    source={{ uri: item.url }} />
                            </ImageZoom>
                        </Card>
                    )}
                </ScrollView>
            </View>
        );
    }
}