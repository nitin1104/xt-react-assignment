import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.search = this.search.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
    }

    search() {
        this.props.onSearch && this.props.onSearch(this.state.searchText);
    }

    onSearchTextChange(evt) {
        this.setState({
            searchText: evt.target.value
        });
    }

    render () {
        return (
            <Navbar bg="none" variant="light">
                <Form style={{ width: '100%' }}>
                    <FormControl style={{ width: '80%', float: 'left' }} type="text" placeholder="Search here.." className="mr-sm-" onChange={this.onSearchTextChange} />
                    <Button variant="outline-info" onClick={this.search} style={{ marginLeft: '10px', padding: '0.8125rem 2rem' }}>Search</Button>
                </Form>
            </Navbar>
        )
    }
}
export default Search;