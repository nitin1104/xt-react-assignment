import React from 'react';

class Sorting extends React.Component {
    render () {
        return (
            <div style={{ textAlign:'right', width: '100%' }}>
                <h5>Sort by ID</h5>
                <input type="radio" name="sorting" id="ascending" />
                <label htmlFor="ascending" style={{ marginLeft: '5px' }}>Ascending</label>
                <input type="radio" name="sorting" id="descending" style={{ marginLeft: '10px' }}/>
                <label htmlFor="descending" style={{ marginLeft: '5px' }}>Descending</label>
            </div>
        )
    }
}
export default Sorting;