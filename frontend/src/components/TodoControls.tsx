// src/components/TodoControls.tsx
import React from "react";
type Status = "pending" | "done";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  filterStatus: Status | "all";
  onFilterStatusChange: (v: Status | "all") => void;

  input: string;
  onInputChange: (v: string) => void;
  onAdd: () => void;

  selectedTag: "Personal" | "Work" | "Study" | "Other";
  onTagChange: (v: "Personal" | "Work" | "Study" | "Other") => void;
  tagOptions: Array<"Personal" | "Work" | "Study" | "Other">;
};

export const TodoControls: React.FC<Props> = ({
  search,
  onSearchChange,
  filterStatus,
  onFilterStatusChange,
  input,
  onInputChange,
  onAdd,
  selectedTag,
  onTagChange,
  tagOptions,
}) => {
  return (
    <>
      <div className="content-header">
        <h1 className="page-title">Your ToDo</h1>

        <div className="filters">
          <input
            className="search-input"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <select
            className="status-select"
            value={filterStatus}
            onChange={(e) =>
              onFilterStatusChange(e.target.value as Status | "all")
            }
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>

      <div className="add-row justify-between">
        <input
          className="todo-input"
          placeholder="Write your todo"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />

        <div>
          <select
            className="tag-select"
            value={selectedTag}
            onChange={(e) =>
              onTagChange(e.target.value as "Personal" | "Work" | "Study" | "Other")
            }
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <button className="btn-golden" onClick={onAdd}>
            Add
          </button>
         


        </div>
      </div>
    </>
  );
};
