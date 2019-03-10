import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator, FlatList} from 'react-native';


export default class UsersList extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
            page: 0,
        };
    }

    componentDidMount() {
        this.fetchData(this.state.page);
    }

    fetchData(page) {
        this.setState({page: page});
        let endpoint = 'https://jsonplaceholder.typicode.com/users';
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.setState({data: [...this.state.data, ...data.map(item => ({...item, id: item.id + page*10}))], isLoading: false});
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black"/>
            );
        } else {
            return (
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <View style={styles.container}>
                            <View style={styles.listItem}>
                                <Text>{item.email}</Text>
                                <Text>{item.id}</Text>
                            </View>
                            <Button onPress={() => alert(item.name)}
                                    title='Name'/>
                        </View>}
                    keyExtractor={item => `${item.id}`}
                    onEndReached={() => this.fetchData(this.state.page + 1)}
                />
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    listItem: {
        flex: 2,
        padding: 10
    },
    listButton: {
        flex: 1,
    }
});