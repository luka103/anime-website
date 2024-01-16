import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`);
        setAnimeList(response.data.data);
      } catch (error) {
        console.error('Error fetching anime list:', error);
      }
    };

    fetchAnimeList();
  }, [searchTerm]);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <div>
      <h1>Anime Website</h1>
      <SearchForm onSearch={handleSearch} />
      <AnimeList animeList={animeList} />
    </div>
  );
};

export default Home;
