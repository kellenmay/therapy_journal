import './App.css'
import NavBar from './NavBar'
import Router from './Router'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEntries } from '../actions/entriesActions';

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(fetchEntries()) })

  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
