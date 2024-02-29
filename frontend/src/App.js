import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoitem";
import Button from "@mui/material/Button";
import Footer from "./components/Footer/Footer";


function App() {
  const [todoItems, setTodoItems] = useState(null);

  //Date
  const current = new Date();
  const weekday = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  let day = weekday[current.getDay()];
  let longMonth = current.toLocaleString("pt-br", { month: "long" });
  let date = `${longMonth} ${current.getDate()}`;

  useEffect(() => {
    console.log("useEffect Loaded.");

    if (!todoItems) {
      fetch("http://localhost:8080/api/todoItems")
        .then((response) => response.json())
        .then((data) => {
          console.log("Todo Items List:", data);
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  function addNewTodoItem() {
    fetch("http://localhost:8080/api/todoItems", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoItems([...todoItems, data]);
        console.log(data);
      });
  }

  function handleDeleteTodoItem(item) {
    const updatedTodoItems = todoItems.filter((data) => data.id !== item.id);
    setTodoItems([...updatedTodoItems]);
  }

  return (
    <>
      <div className="main-body">
        <div className="todo-container">
          <div className="above-label">
            <h2 style={{ textTransform: "uppercase" }}>Todo List</h2>
          </div>

          <div className="date">
            <h3>
              HOJE É {date}, {day}
            </h3>
          </div>

          <div className="addbtn">
            <button className="button" onClick={addNewTodoItem}>
              Adicionar Tarefa
            </button>
          </div>

          <div className="todoitems">
            {" "}
            {todoItems
              ? todoItems.map((todoItem) => {
                  return (
                    <TodoItem
                      data={todoItem}
                      key={todoItem.id}
                      emitDeleteTodoItem={handleDeleteTodoItem}
                    />
                    
                  );
                })
              : "Carregando Dados..."}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Oxanum Link: 
//<link href="https://fonts.cdnfonts.com/css/oxanium" rel="stylesheet">
//font-family: 'Oxanium', sans-serif; 
