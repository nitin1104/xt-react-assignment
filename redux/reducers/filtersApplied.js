export default function(filtersApplied = [], action) {
    switch(action.type) {
        case 'SET_FILTERS_APPLIED':
            filtersApplied = {
                ...filtersApplied,
                ...action.payload
            };
    }
    
    return filtersApplied;
};