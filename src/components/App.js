import './App.css'
import NavBar from './NavBar'
import Router from './Router'
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEntries } from '../actions/entriesActions';
import axios from "axios";


function App() {
  const { isLoading } = useAuth0();
  const dispatch = useDispatch()
  useEffect(() => { dispatch(fetchEntries()) })

  


  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
