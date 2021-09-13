import React, { useEffect, useState } from "react";

import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import AppContent from "./components/AppContent/AppContent";
import { API } from "./config";

const App = () => {
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSearched, setIsSearched] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setLoading(false);
            setData(data);
          }
        })
        .catch((error) => {
          if (error) {
            setError(true);
            setLoading(false);
          }
        });
    };
    fetchData();
  }, []);

  const searchData = (item, isSearch) => {
    setSearchedData(item)
    setIsSearched(isSearch)
  }

  if (loading) {
    return <div className="app">загрузка</div>;
  }

  if (error) {
    return <div className="app">что-то пошло не так</div>;
  }

  return (
    <div className="app">
      <AppHeader />
      <AppContent data={data} searchedData={searchedData} searchData={searchData} isSearched={isSearched} />
    </div>
  );
};

export default App;
