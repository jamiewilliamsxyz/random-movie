"use client";

import { filters } from "../data";

export default function SortByFilter({ onFilterChange, selectedFilter }) {
  const optionSelect = (e) => {
    const selectedValue = e.target.value;
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
        value={selectedFilter.name}
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
