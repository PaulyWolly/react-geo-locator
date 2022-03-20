import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { nanoid } from 'nanoid';
import AppMainPage from './pages/app/AppMainPage';
import Loading from './components/loading/Loading';
import history from './utils/history';
import './App.scss';

const App = () => {
  const [xUser, setXUser] = useState('');
 useEffect(() => {
  const xUser = localStorage.getItem('x_user');
  if(!xUser) {
    const newXUser = nanoid();
    localStorage.setItem('x_user', newXUser);
    return setXUser(newXUser);
  }
  setXUser(xUser);
 }, [])
  if(!xUser) return <Loading />
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={AppMainPage} />
      </Switch>
    </Router>
  );
}

export default App;
