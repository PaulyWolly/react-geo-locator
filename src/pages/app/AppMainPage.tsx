import React, { FC, ReactElement, useReducer } from 'react';
import { Row } from 'antd';
import { locationContext, reducer, initialState } from '../../context/locationContext';
import AppLeftSide from '../../components/appLeftSide/AppLeftSide';
import AppRightSide from '../../components/appRightSide/AppRightSide';

const AppMainPage: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Row className="App">
      <locationContext.Provider value={{ state, dispatch }}>
        <AppLeftSide />
        <AppRightSide />
      </locationContext.Provider>
    </Row>
  )
}

export default AppMainPage;