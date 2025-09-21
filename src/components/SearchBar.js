import React, { useState, useEffect } from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  clearAllTodos,
  todosCount,
}) => {
  const [showClearButton, setShowClearButton] = useState(false);

  // Show clear button when search term is not empty
  useEffect(() => {
    setShowClearButton(searchTerm.length > 0);
  }, [searchTerm]);

  // Clear search term
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="search-input-container">
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control search-input"
          />
          {showClearButton && (
            <button
              className="search-clear-button"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="filter-container">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
          aria-label="Filter todos"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <button
          onClick={clearAllTodos}
          className="btn btn-danger"
          disabled={todosCount === 0}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
