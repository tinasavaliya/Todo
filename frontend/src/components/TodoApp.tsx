// src/App.tsx
import React, { useState, useMemo } from "react";
import { TodoCard } from "../TodoCard";
import { Header } from "./Header";
import { TodoControls } from "./TodoControls";

type Status = "pending" | "done";

type Todo = {
  id: number;
  text: string;
  date: string;
  status: Status;
  tag: "Personal" | "Work" | "Study" | "Other";
};

const tagOptions: Todo["tag"][] = ["Personal", "Work", "Study", "Other"];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    // … your initial todos …
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

  const filteredTodos = useMemo(
    () =>
      todos.filter((t) => {
        const matchesSearch = t.text
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesStatus =
          filterStatus === "all" ? true : t.status === filterStatus;
        return matchesSearch && matchesStatus;
      }),
    [todos, search, filterStatus]
  );

  return (
    <div className="w-full">
      <Header />

      <main className="content">
        <div className="container">
          <TodoControls
            search={search}
            onSearchChange={setSearch}
            filterStatus={filterStatus}
            onFilterStatusChange={setFilterStatus}
            input={input}
            onInputChange={setInput}
            onAdd={handleAdd}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            tagOptions={tagOptions}
          />

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

export default TodoApp;
