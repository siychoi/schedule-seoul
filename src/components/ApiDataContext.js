// ApiDataContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const pageSize = 1000;
      const numPages = 4;
      const fetchedData = [];

      for (let page = 0; page < numPages; page++) {
        const startIdx = page * pageSize + 1;
        const endIdx = (page + 1) * pageSize;

        const response = await axios.get(`https://openapi.seoul.go.kr:8088/${apiKey}/json/culturalEventInfo/${startIdx}/${endIdx}`);
        const responseData = response.data.culturalEventInfo.row.map((item, index) => {
          return { ...item, id: startIdx + index };
        });
        responseData.forEach(item => {
          if (item.CODENAME.startsWith("축제")) {
            item.CODENAME = "축제";
          }
        });
        fetchedData.push(...responseData);
      }

      setApiData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (apiData.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <ApiDataContext.Provider value={{ apiData }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiData = () => {
  const context = useContext(ApiDataContext);
  if (!context) {
    throw new Error('useApiData must be used within a ApiDataProvider');
  }
  return context;
};
