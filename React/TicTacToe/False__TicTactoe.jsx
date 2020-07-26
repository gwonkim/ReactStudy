import React, { useCallback, useReducer } from 'react';
import table from './Table';

const initialState = {
    winner : '',
    turn : '0',
    tableData : [ 
        ['', '', ''], 
        ['', '', ''], 
        ['', '', ''] 
    ],
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WINNER' :
            // state.winner = action.winner; 이렇게 하면 안 됨
            return {
                ...state,
                winner : action.winner,
            };
        case CLICK_CELL :
            const tableData = [ ...state.tableData ] //객체는 퍼준다,,,?
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            /* 
            불변성을 유지하기 위해서 
            내용은 같지만 다른 상태로 만들기 위해서 
            const a = { b:1, c: 2}

            const b = a;
            true라서 불변성 유지 X
            
            but 

            const c = {...a}; //얕은 복사 
            배열도 가능 

            이때 c는 a와 내용은 같지만 자체로는 다른 상태
            c !== a


            */
            return {

                ...state, //얕은 복사 스프레드 
                tableData 
            };
        case CHANGE_TURNb :


    }
};

const TicTacToe = () => {
    // useReducer 

    const [ state,  dispatch] = useReducer( reducer, initialState);


/*  아래를 간략화? 하는 것 useReducer
    const { winner, setWinner } = useState('');
    const { turn, setTurn } = useState( '0');
    const { tableData, setTableData} = useState( [ ['', '', ''], ['', '', ''], ['', '', ''] ]);
 */

    const onClickTable = useCallback( () => {
        dispatch( { type : 'SET_WINNER', winner : '0' });   // ( 이 안의 객체가 action 객체 ) dispatch하면 액션을 실행한다. 
        /* 액션 = 자동 스테이트 바뀌는 것 x 
        직접 바꿔주는 역할 필요 - > reducer 
        액션을 디스패치할 때마다 위에 있는 reducer함수 실행 
        그 안에서 switch로 구별해서 실행 

        */
    }, [] );

    return(
        <>
        
        <Table onClick ={onClickTable} tableData={state.tableData} dispatch = {dispatch}/>
        {state.winner && <div> {state.winner}님의 승리</div>}
        </>
    )

};
export default TicTacToe;