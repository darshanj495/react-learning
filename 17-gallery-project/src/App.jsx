import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios('https://picsum.photos/v2/list?limit=100');
      setImages(response.data);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const currentPage = Math.floor(index / 10) + 1;
  const totalPages = Math.ceil(images.length / 10);

  return (
    <div className="gallery-wrapper">
      <header className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
        <span className="gallery-subtitle">Curated Photography</span>
      </header>

      {loading ? (
        <div className="loading">Loading images...</div>
      ) : (
        <>
          <div className="gallery-grid">
            {images.slice(index, index + 10).map((image) => (
              <div key={image.id} className="gallery-item">
                <img
                  src={`https://picsum.photos/id/${image.id}/400/400`}
                  alt={image.author}
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-author">{image.author}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-controls">
            <button
              className="gallery-btn"
              disabled={index <= 0}
              onClick={() => setIndex(prev => prev - 10)}
            >
              ← Prev
            </button>
            <span className="gallery-page">{currentPage} / {totalPages}</span>
            <button
              className="gallery-btn"
              disabled={index + 10 >= images.length}
              onClick={() => setIndex(prev => prev + 10)}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;