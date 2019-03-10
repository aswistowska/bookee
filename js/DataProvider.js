import React, {Component} from 'react';


export default class DataProvider extends Component {

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
        let endpoint = `https://jsonplaceholder.typicode.com/${this.props.source}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: [...this.state.data, ...data.map(item => ({...item, id: item.id + page * 10}))],
                    isLoading: false
                });
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }

    render() {
        return this.props.children({
            isLoading: this.state.isLoading,
            data: this.state.data,
            loadingNextPage: () => this.fetchData(this.state.page + 1)
        })
    }
}

