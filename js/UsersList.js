import React from 'react';
import { View, Text, Button, ActivityIndicator, FlatList} from 'react-native';

import {styles} from './styles';

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


