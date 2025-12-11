// src/components/Header.tsx
import React from "react";


export const Header: React.FC = () => {
  return (
    <header className="py-5">
        <div className="max-w-[1174px] mx-auto px-5">

        <div className="flex items-center justify-between todo-header">
          <div className="logo">
            <h4>Your ToDo</h4>
          </div>

          <div className="flex items-center">
            <nav className="nav-links">
              <span className="nav-item active">Home</span>
              <span className="nav-item">Todos</span>
            </nav>

            <div className="avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={35}
                width={35}
                fill="#fff"
                viewBox="0 0 640 640"
              >
                <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
