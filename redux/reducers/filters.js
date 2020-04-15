export default function(filters = {}, action) {
    switch(action.type) {
        case 'SET_FILTERS':
            filters = action.payload;
        // case 'REMOVE_FILTER':
        //     filters = filters.filter(() => false);
    }
    
    return filters;
};