import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

import './global.css';

function App() {
  return (
    <div id='main'>
      <NewTodo />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
