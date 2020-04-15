import { combineReducers } from 'redux';
import filters from './filters';
import filtersApplied from './filtersApplied'

export default combineReducers({
    filters,
    filtersApplied
});