import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './white.css';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const BACKEND_URL = 'https://theadventures.onrender.com/Whiteimages'; // Replace with your backend URL

const White = () => {

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const [driveImages, setDriveImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Fetch images from your Node.js backend
      const response = await axios.get(`${BACKEND_URL}`);

      // Set the retrieved images in state
      setDriveImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <section id='white'>
      <h5> Get The Tomis in White</h5>
      <h2>CHURCH WEDDING DAY</h2>

      {/*Swiper pagination={true} modules={[Pagination]}*/}
      <Swiper pagination={true} modules={[Pagination]} className="gallery">
        <div className={model ? 'model open' : 'model'}>
          <img src={tempimgSrc} alt="Gallery" onClick={() => setModel(false)} />
        </div>
        {driveImages.map(({ webContentLink, id }, index) => {
          // const formattedImageUrl = formatImageUrl(imageUrl);
          return (
            <SwiperSlide key={id} className="pics" onClick={() => getImg(webContentLink)}>
              <div className="avatar">
                <img src={webContentLink} alt={`Avatar ${index}`} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
}

export default White
