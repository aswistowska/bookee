import React from 'react';

import {UsersList} from './UsersList';
import DataProvider from "./DataProvider";

export const UserListContainer = () => {
    return (
        <DataProvider source='users'>
            {({isLoading, data, loadingNextPage}) => {
                return (
                    <UsersList userList={data} isLoading={isLoading}
                               loadingNextPage={loadingNextPage}/>
                );
            }}
        </DataProvider>
    )
};

