import React from 'react';
import "./Search.css";

export default function Search() {
  return (
      <form>
        <input
          type="text"
          placeholder="Enter city"
          id="search-bar"
          autoFocus="on"
        />
        <button type="submit" class="btn btn-success" id="search-button">
          Search
        </button>
        <button type="button" class="btn btn-primary" id="current-button">
          Current
        </button>
      </form>
  );
}
