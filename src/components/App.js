import './App.css'
import NavBar from './NavBar'
import Journal from './Journal'
import EntriesContainer from './EntriesContainer'


const App = () => {


  return (
    <div className="App">
      <NavBar />
      <Journal />
      <EntriesContainer />
    </div>
  );
}

export default App;
