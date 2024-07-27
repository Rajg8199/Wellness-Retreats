import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RetreatList from "./components/RetreatList";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import Banner from "./components/Banner";
import { fetchRetreats } from "./api";

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ date: "", type: "", location: "" });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRetreatsData();
  }, [currentPage, filters, searchQuery]);

  const fetchRetreatsData = async () => {
    try {
      const data = await fetchRetreats(currentPage);
      if (Array.isArray(data)) {
        let filteredData = data;

        if (filters.date) {
          const filterDate = filters.date.toISOString().split("T")[0];
          filteredData = filteredData.filter(
            (retreat) => retreat.date === filterDate
          );
        }

        if (filters.type) {
          filteredData = filteredData.filter(
            (retreat) => retreat.type === filters.type
          );
        }

        if (filters.location) {
          filteredData = filteredData.filter((retreat) =>
            retreat.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())
          );
        }

        if (searchQuery) {
          filteredData = filteredData.filter((retreat) =>
            retreat.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setRetreats(filteredData);
        setFilteredRetreats(filteredData);
        setTotalPages(Math.ceil(100 / 5)); // Example for 100 items, 5 per page
      } else {
        console.error("Data is not an array", data);
      }
    } catch (error) {
      console.error("Failed to fetch retreats", error);
    }
  };

  const handleFilter = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div >
      <Header />
      
      <Banner />
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <Filter onFilter={handleFilter} />
        <SearchBar onSearch={handleSearch} />
      </div>
      <RetreatList retreats={filteredRetreats} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
