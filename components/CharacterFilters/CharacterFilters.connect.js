import React, { Fragment, useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import CharacterFilters from './CharacterFilters'

function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFilters);