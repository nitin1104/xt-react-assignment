import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function(props) {
    const {pagination} = props;

    function previousPage() {
        if (pagination.prev) {
            props.onPaginate(props.page - 1);
        }
    }

    function nextPage() {
        if (pagination.next) {
            props.onPaginate(props.page + 1);
        }
    }

    return (
        <div>
            <Pagination style={{ float: 'left', width: '100%' }}>
                <Pagination.Prev onClick={previousPage}>Previous</Pagination.Prev>
                <Pagination.Prev onClick={nextPage}>Next</Pagination.Prev>
            </Pagination>
        </div>
    );
}