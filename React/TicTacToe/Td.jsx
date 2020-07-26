import React, { useCallback, useEffect, useRef, memo } from 'react';
import { CLICK_CELL } from './False__TicTactoe';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log('td rendered');


  //확인
  const ref = useRef([]);
  useEffect(() => {
    console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
    console.log(cellData, ref.current[3]);
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    //dispatch 마음대로 만들고 reducer에서 잘 처리
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});

export default Td;



/* 
import React, { useCallback } from 'react';
import { SET_TURN } from './TicTactoe';

const Td = ({rowIndex, cellIndex, dispatch, cellData}) => {
    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        
        dispatch( { type : CLICK_CELL, row: rowIndex, cell : cellIndex });
        dispatch( { type : CHANGE_TURN})
    }, []);

    return (
    <td onClick= {onClickTd}>{cellData}</td>
    )
};

export default Td;

*/