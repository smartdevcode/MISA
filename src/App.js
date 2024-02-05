import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SearchBar from './components/SearchBar/SearchBar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { searchMusic } from './api/musicApi';
import { searchImages } from './api/imageApi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [trackUrl, setTrackUrl] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    setLoading(true); // Start loading
    // Assume you have functions to fetch music and images that return promises
    const musicPromise = searchMusic(query);
    const imagesPromise = searchImages(query);

    try {
      const [musicResult, imageResults] = await Promise.all([musicPromise, imagesPromise]);
      if (musicResult && musicResult.audio) {
        setTrackUrl(musicResult.audio);
      }
      setImages(imageResults);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle any errors here
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <Container>
      <h1 className="text-center">Music and Image Search App</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          {trackUrl && <AudioPlayer trackUrl={trackUrl} />}
          <ImageGallery images={images} />
        </>
      )}
    </Container>
  );
}

export default App;
