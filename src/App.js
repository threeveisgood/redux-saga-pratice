import './App.css';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      {/* <CounterContainer />
      <hr />
      <TodosContainer /> */}
      <SampleContainer />
    </div>
  );
}

export default App;
