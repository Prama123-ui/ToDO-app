
import './App.css';
import { useState } from 'react';
import ToDOList from './ToDoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item"
            value={inputList}
            onChange={itemEvent} />
          <button onClick={ListOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}

            {Items.map((itemval) => {
              return <ToDOList text={itemval} />
            })}
          </ol>

        </div>
      </div>
    </>
  );
}

export default App;
