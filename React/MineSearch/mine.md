import React, { useReducer} from 'react';
import Table from './Table';

const initialState = {
    tableData : [],
}

const reducer = (state, action) => {
    switch (action.type) {
        
        default :
            return state;
    }
}

const MineSearch = () => {
    const [state, dispactch ] = useReducer(reducer, initialState);

    return (
        <>
        <Table />
        </>
    );


};