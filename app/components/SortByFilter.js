"use client";

import { useState } from "react";
import { filters } from "../data";

export default function SortByFilter({ onFilterChange }) {
  const [filterSelected, setFilterSelected] = useState("");

  const optionSelect = (e) => {
    const selectedValue = e.target.value;
    setFilterSelected(selectedValue);
    const selectedFilter = Object.values(filters).find(
      (filter) => filter.name === selectedValue
    );
    onFilterChange(selectedFilter);
  };

  return (
    <>
      <select
        name="Sort By"
        className="w-28 self-center p-1 rounded-lg"
        value={filterSelected}
        onChange={optionSelect}
      >
        {Object.values(filters).map((filter) => (
          <option key={filter.name} value={filter.name}>
            {filter.name}
          </option>
        ))}
      </select>
    </>
  );
}
