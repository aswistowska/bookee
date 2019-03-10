import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';

import {UsersList} from './UsersList';

export default class UsersListContainer extends Component {

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
                this.setState({
                    data: [...this.state.data, ...data.map(item => ({...item, id: item.id + page*10}))],
                    isLoading: false
                });
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
                <UsersList userList={this.state.data} isLoading={this.state.isLoading}
                loadingNextPage={() => this.fetchData(this.state.page + 1)}/>
            );
        }
    }
}

