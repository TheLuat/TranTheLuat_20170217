import handleUser from "./untils/handleUser";
import { useState, useEffect } from "react";

function App() {
  let listName = ["Huyen", "Hoa", "Hung", "Long"];

  const [input, setInput] = useState("");

  const [arrUser, setArrayUser] = useState(listName);
  var { showList } = handleUser(arrUser);

  useEffect(
    (arrUser) => {
      handleUser(arrUser);
    },
    [arrUser]
  );

  const onHandleClick = (e) => {
    e.target.value = "";
    listName.push(input);
    setArrayUser([...arrUser, input]);
    setInput("");
  };
  const showNewList = () => {
    var result = listName.map((item, index) => {
      return <span>{item}, </span>;
    });
    return result;
  };
  return (
    <div className="App">
      <p>Student : [{showNewList()}]</p>
      <p>Moi thang nao tham gia</p>
      <input
        type="text"
        name="name"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={(e) => {
          onHandleClick(e);
        }}
      >
        Add
      </button>
      <p>Ten thang tham gia: {input}</p>
      <p>new array user:</p>

      {showList()}
    </div>
  );
}

export default App;
