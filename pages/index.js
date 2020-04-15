import React, {Fragment} from 'react';
import { Row, Col } from 'react-bootstrap';
import {getCharacters} from '../services/character';
import { getStore } from '../redux/store';
import withRedux from "next-redux-wrapper";
import { setCharactersFiltersAction } from '../redux/actions/filters' 
import {connect} from 'react-redux';

// components
import Search from '../components/Search';
import Sorting from '../components/Sorting';
import CharacterList from '../components/CharacterList/CharacterList';
import Pagination from '../components/Pagination/Pagination';
import CharacterFiltersConnect from '../components/CharacterFilters/CharacterFilters.connect';
import CharacterFiltersAppliedConnect from '../components/CharacterFiltersApplied/CharacterFiltersApplied.connect';

class Home extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            characters: props.characters || [],
            pagination: props.pagination || null,
            page: 1,
            filters: {}
        };

        this.fetchCharacters = this.fetchCharacters.bind(this);
        this.paginateCharacters = this.paginateCharacters.bind(this);
        this.filterCharacters = this.filterCharacters.bind(this);
        this.searchCharacters = this.searchCharacters.bind(this);
        this.onAppliedFilterRemove = this.onAppliedFilterRemove.bind(this);
    }

    static async getInitialProps (context) {
        return getCharacters().then(res => {
            context.store.dispatch(setCharactersFiltersAction(res.data.results))
            return {
                characters: res.data.results,
                pagination: res.data.info
            };
        }).catch(err => {
            console.error('ERROR', err)
            return {
                characters: [],
                pagination: null
            };
        });
    }

    componentDidUpdate (prevProps) {
        if (prevProps.filtersApplied !== this.props.filtersApplied) {
            this.fetchCharacters();
        }
    }

    fetchCharacters() {
        getCharacters({
            searchText: this.state.searchText || '',
            species: this.props.filtersApplied.species || [],
            gender: this.props.filtersApplied.gender || [],
            status: this.props.filtersApplied.status || [],
            page: this.state.page || 1
        }).then(res => {
            this.setState({
                characters: res.data.results,
                pagination: res.data.info
            });
        }).catch(err => {
            return {
                characters: [],
                pagination: null
            };
        });
    }

    paginateCharacters(page) {
        this.setState({
            page
        }, () => this.fetchCharacters());
    }

    filterCharacters(filters) {
        const  filtersApplied = {
            ...this.state.filters,
            ...filters
        };

        this.props.setFiltersApplied(
            filtersApplied
        )
    }

    searchCharacters(searchText) {
        this.setState({
            searchText,
            page: 1
        }, () => this.fetchCharacters());
    }

    onAppliedFilterRemove(filterCategory, removedFilter) {
        const filters = {
            ...this.props.filtersApplied,
            [filterCategory]: this.props.filtersApplied[filterCategory].filter(filter => filter !== removedFilter)
        };

        this.props.setFiltersApplied(
            filters
        )
    }

    render () {
        return (
            <Row>
                <Col lg="2" className="float-left">
                    <CharacterFiltersConnect
                        onFilterChange={this.filterCharacters}
                        filtersApplied={this.props.filtersApplied}
                    />
                </Col>
                <Col lg="8" className="float-right">
                    <CharacterFiltersAppliedConnect filters={this.state.filters} onAppliedFilterRemove={this.onAppliedFilterRemove} />
                    <Search onSearch={this.searchCharacters} />
                    <Sorting />
                    <CharacterList characters={this.state.characters} />
                    <Pagination pagination={this.state.pagination} onPaginate={this.paginateCharacters} page={this.state.page} />
                </Col>
            </Row>
        )
    }
}


function mapStateToProps(state) {
    return {
        filters: state.filters,
        filtersApplied: state.filtersApplied
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFiltersApplied: (filtersApplied) => {
            dispatch({ type: 'SET_FILTERS_APPLIED', payload: filtersApplied })
        }
    }
}

const HomeConnect = connect(mapStateToProps, mapDispatchToProps)(Home);

HomeConnect.getInitialProps = Home.getInitialProps;

export default HomeConnect;