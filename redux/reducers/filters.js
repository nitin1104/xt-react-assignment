export default function(filters = {}, action) {
    switch(action.type) {
        case 'SET_FILTERS':
            filters = action.payload;
    }
    
    return filters;
};