import React, {useEffect, useState} from 'react';
import Filters from '../Filters/Filters';

const filtersData = {
    "species": {
        "label": "Species",
        "data": [
            "Human",
            "Mythology",
            "Other"
        ]
    },
};

export default function CharacterFilters(props) {
    const filters = props.filters;

    function onSpeciesFilterChange(filters) {
        props.onFilterChange && props.onFilterChange({
            species: filters,
        });
    }

    function onGenderFilterChange(filters) {
        props.onFilterChange && props.onFilterChange({
            gender: filters
        });
    }

    function onStatusFilterChange(filters) {
        props.onFilterChange && props.onFilterChange({
            status: filters
        });
    }
    
    return (
        <div>
            {
                filters.species.length > 0
                &&
                <Filters
                    label="Species"
                    filters={filters.species}
                    onFilterChange={onSpeciesFilterChange}
                    selectedFilters={props.filtersApplied.species}
                />
            }
            {
                filters.gender.length > 0
                &&
                <Filters
                    label="Gender"
                    filters={filters.gender}
                    onFilterChange={onGenderFilterChange}
                    selectedFilters={props.filtersApplied.gender}
                />
            }
            {
                filters.status.length > 0
                &&
                <Filters
                    label="Status"
                    filters={filters.status}
                    onFilterChange={onStatusFilterChange}
                    selectedFilters={props.filtersApplied.status}
                />
            }
        </div>
    );
}