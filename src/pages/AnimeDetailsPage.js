import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeDetails from '../components/AnimeDetails';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../styles/AnimeDetailsPage.css';

const AnimeDetailsContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const AnimeDetailsPage = () => {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
        setAnimeDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  return (
    <AnimeDetailsContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="anime-details-page-container"
    >
      {animeDetails && (
        <div className="anime-details">
          <h2 className="anime-details-page-title">{animeDetails.attributes.canonicalTitle}</h2>
          <img
            className="anime-image"
            src={animeDetails.attributes.posterImage.medium}
            alt={animeDetails.attributes.canonicalTitle}
          />
          <p className="anime-synopsis">{animeDetails.attributes.synopsis}</p>
          {animeDetails.attributes.youtubeVideoId && (
            <iframe
              title="Anime Trailer"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${animeDetails.attributes.youtubeVideoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          <AnimeDetails anime={animeDetails} />
        </div>
      )}
    </AnimeDetailsContainer>
  );
};

export default AnimeDetailsPage;
