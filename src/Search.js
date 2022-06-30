import "./index.css";
import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="Enter city"
          id="search-bar"
          autofocus="on"
        />
        <button type="submit" class="btn btn-success" id="search-button">
          Search
        </button>
        <button type="button" class="btn btn-primary" id="current-button">
          Current
        </button>
      </form>
    </div>
  );
}
