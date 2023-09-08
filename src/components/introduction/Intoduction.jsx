import React, { useState, useEffect } from 'react';
import './introduction.css'
import axios from 'axios'; // Import Axios for making HTTP requests
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';

const BACKEND_URL = 'https://theadventures.onrender.com/TakeHomeimages'; // Replace with your backend URL

const Intoduction = () => {

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
    <section id="introduction">
      <h5>REVIEW GALLERY</h5>
      <h2>INTRODUCTION SHOTS</h2>
      
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

export default Intoduction
