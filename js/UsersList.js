import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator, FlatList} from 'react-native';


export const UsersList = ({userList, isLoading, loadingNextPage}) => {

        if (isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black"/>
            );
        } else {
            return (
                <FlatList
                    data={userList}
                    renderItem={({item}) =>
                        <View style={styles.container}>
                            <View style={styles.listItem}>
                                <Text>{item.email}</Text>
                                <Text>{item.id}</Text>
                            </View>
                            <Button onPress={() => alert(item.name)}
                                    title='Name'
                                    color="#841584"/>
                        </View>}
                    keyExtractor={item => `${item.id}`}
                    onEndReached={loadingNextPage}
                />
            );
        }
    };


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