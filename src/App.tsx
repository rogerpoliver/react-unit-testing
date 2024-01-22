import { useState } from "react";

function App() {
  const [list, setList] = useState([
    "Roger",
    "Fernando",
    "Felipe",
    "Alice",
    "Mariane",
  ]);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    setTimeout(() => {
      setList((prevState) => [...prevState, newItem]);
    }, 500);
  }

  function removeFromList(itemToRemove: string) {
    setTimeout(() => {
      setList(list.filter((item) => item !== itemToRemove));
    });
  }

  const buttonStyle = "ml-4 px-4 border-solid border-2 border-black rounded-lg";

  return (
    <div className="flex flex-col items-center mt-2">
      <div>
        <input
          value={newItem}
          placeholder="New item"
          onChange={(e) => setNewItem(e.target.value)}
          className="p-1 border-solid border-2 border-black rounded-lg"
        />
        <button className={buttonStyle} onClick={addToList}>
          Add
        </button>
      </div>
      <ul className="mt-4">
        {list.map((item) => (
          <div className="gap-1">
            <li className="flex flex-row justify-end mt-2" key={item}>
              <div className="grid justify-items-start">{item}</div>
              <button
                className={buttonStyle}
                onClick={() => removeFromList(item)}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
