import React from 'react';
import { Button, Badge } from 'react-bootstrap';


export default function CharacterFiltersApplied(props) {
    const filters = props.filtersApplied;

    function removeFilter(filterCategory, filter) {
        props.onAppliedFilterRemove && props.onAppliedFilterRemove(filterCategory, filter);
    }

    return (
        <div>
            {
                Object.keys(filters || {}).map(filterCategory => (
                    (filters[filterCategory] || []).map(filter => (
                        filter ? <Button variant="secondary" style={{ marginRight: '10px', marginBottom: '10px' }}>{filter} <Badge variant="light" onClick={() => removeFilter(filterCategory, filter)}>X</Badge></Button> : null
                    ))
                ))
            }
        </div>
    );
}