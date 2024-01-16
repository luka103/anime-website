import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/AnimeList.css'; 

const AnimeList = ({ animeList }) => {
  return (
    <motion.div
      className="anime-list-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Anime List</h2>
      <ul>
        {animeList.map((anime) => (
          <motion.li
            key={anime.id}
            whileHover={{ scale: 1.1 }}
          >
            <Link to={`/anime/${anime.id}`}>{anime.attributes.canonicalTitle}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimeList;
