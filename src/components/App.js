import './App.css'
import NavBar from './NavBar'
import Router from './Router'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">

      <NavBar />
      <Router />
    </div>
  );
}

export default App;
