import React, { useState, useMemo } from "react";
import "./App.css";
import { TodoCard } from "./TodoCard";

type Status = "pending" | "done";

type Todo = {
  id: number;
  text: string;
  date: string;
  status: Status;
  tag: "Personal" | "Work" | "Study" | "Other";
};

const tagOptions: Todo["tag"][] = ["Personal", "Work", "Study", "Other"];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Pizza with friends",
      date: "02/12/2025",
      status: "pending",
      tag: "Personal",
    },
    {
      id: 2,
      text: "Iskon visit",
      date: "02/12/2025",
      status: "pending",
      tag: "Personal",
    },
    {
      id: 3,
      text: "Pickle ball game",
      date: "02/12/2025",
      status: "done",
      tag: "Personal",
    },
    {
      id: 4,
      text: "College poll work",
      date: "02/12/2025",
      status: "pending",
      tag: "Study",
    },
    {
      id: 5,
      text: "Activa ride service",
      date: "02/12/2025",
      status: "pending",
      tag: "Other",
    },
    {
      id: 6,
      text: "Clean unused code",
      date: "02/12/2025",
      status: "done",
      tag: "Work",
    },
  ]);

  const [input, setInput] = useState("");
  const [selectedTag, setSelectedTag] = useState<Todo["tag"]>("Personal");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");

  const handleAdd = () => {
    if (!input.trim()) return;
    const today = new Date().toLocaleDateString("en-GB");
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      date: today,
      status: "pending",
      tag: selectedTag,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const updated = prompt("Edit your todo:", todo.text);
    if (updated && updated.trim()) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, text: updated.trim() } : t
        )
      );
    }
  };

  const toggleStatus = (id: number) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "pending" ? "done" : "pending" }
          : t
      )
    );
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((t) => {
      const matchesSearch = t.text
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus =
        filterStatus === "all" ? true : t.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [todos, search, filterStatus]);

  return (
    <div className="wrapper">
      {/* Top bar */}
      <header className="top-bar">
        <div className="container">
          <div className="d-flex align-center justify-between todo-header">

          
          <div className="logo"> 
            <h4>Your ToDo</h4>
            </div>
          <div className="d-flex align-center">
            <nav className="nav-links">
            <span className="nav-item active">Home</span>
            <span className="nav-item">Todos</span>
          </nav>
          <div className="avatar"><svg xmlns="http://www.w3.org/2000/svg" height={35} width={35} fill="#fff" viewBox="0 0 640 640"><path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"/></svg></div>
          </div>
          </div>
       
        </div>
      </header>

      {/* Main panel */}
      <main className="content">
        <div className="container">
        <div className="content-header">
          <h1 className="page-title">Your ToDo</h1>

          <div className="filters">
            <input
              className="search-input"
              placeholder="Search todos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="status-select"
              value={filterStatus}
              onChange={(e) =>
                setFilterStatus(e.target.value as Status | "all")
              }
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        {/* Add row */}
        <div className="add-row justify-between">
         
            <input
            className="todo-input"
            placeholder="Write your todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
        
          <div>
            <select
            className="tag-select"
            value={selectedTag}
            onChange={(e) =>
              setSelectedTag(e.target.value as Todo["tag"])
            }
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <button className="btn-golden" onClick={handleAdd}>
            Add
          </button>
          </div>
          
        </div>

        {/* Cards */}
        <section className="cards-grid">
          {filteredTodos.length === 0 && (
            <p className="empty-state">No todos found.</p>
          )}
          {filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onDelete={() => handleDelete(todo.id)}
              onEdit={() => handleEdit(todo.id)}
              onToggleStatus={() => toggleStatus(todo.id)}
            />
          ))}
        </section>
        </div>
      </main>
    </div>
  );
};

export default App;
