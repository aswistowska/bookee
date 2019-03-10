import React from 'react';
import {ActivityIndicator} from 'react-native';

import {UsersList} from './UsersList';
import DataProvider from "./DataProvider";

export const UserListContainer = () => {
    return (
        <DataProvider source='users'>
            {({isLoading, data, loadingNextPage}) => {
                if (isLoading) {
                    return (
                        <ActivityIndicator animating={true} size="small" color="black"/>
                    );
                } else {
                    return (
                        <UsersList userList={data} isLoading={isLoading}
                                   loadingNextPage={loadingNextPage}/>
                    );
                }
            }}
        </DataProvider>
    )
};

