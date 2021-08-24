import './App.css'
import NavBar from './NavBar'
import Router from './Router'
import EntriesContainer from './EntriesContainer'

const App = () => {


  return (
    <div className="App">
      <NavBar />
      <EntriesContainer />
      <Router />
    </div>
  );
}

export default App;
