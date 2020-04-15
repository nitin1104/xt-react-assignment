import React, { Fragment, useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import CharacterFiltersApplied from './CharacterFiltersApplied'

function mapStateToProps(state) {
    return {
        filtersApplied: state.filtersApplied
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFiltersApplied);