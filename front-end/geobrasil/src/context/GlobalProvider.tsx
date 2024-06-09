import React, { useState, useEffect } from 'react';
import { ChildrenProviderProps, ApiResponseType, GlobalContextType } from '../types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }: ChildrenProviderProps) {
  const [data, setData] = useState<ApiResponseType | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | unknown | string>(null);
  const [newsQtd, setNewsQtd] = useState(9);
  const [favoriteRender, setFavoriteRender] = useState(false);
  const maxNewsQtd = 30;

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`http://localhost:8000/api/noticias?maxNewsQtd=${maxNewsQtd}`);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    };
    fetchData();
  }, [maxNewsQtd]);

    const loadMoreNews = (qtd: number) => setNewsQtd(qtd);
    const toggleFavoriteRender = () => setFavoriteRender(!favoriteRender);

  const contextValue: GlobalContextType = {
    data: data as ApiResponseType,
    isPending,
    error,
    newsQtd,
    maxNewsQtd,
    loadMoreNews,
    toggleFavoriteRender,
    favoriteRender,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
