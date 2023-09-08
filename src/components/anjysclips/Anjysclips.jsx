import React, {useState} from "react";
import "./anjysclips.css";

import AVAT1 from "../../assets/videos/Anjy Proposal.mp4";
import AVAT2 from "../../assets/videos/V1.mp4";
import AVAT3 from "../../assets/videos/V2.mp4";
import AVAT4 from "../../assets/videos/V3.mp4";
import AVAT5 from "../../assets/videos/V4.mp4";
import AVAT6 from "../../assets/videos/V5.mp4";
import AVAT7 from "../../assets/videos/V6.mp4";
import AVAT8 from "../../assets/videos/V7.mp4";
import AVAT9 from "../../assets/videos/V8.mp4";
import AVAT10 from "../../assets/videos/V9.mp4";
import AVAT11 from "../../assets/videos/V10.mp4";
import AVAT12 from "../../assets/videos/V11.mp4";
import AVAT13 from "../../assets/videos/V12.mp4";
import AVAT14 from "../../assets/videos/V13.mp4";
import AVAT15 from "../../assets/videos/V14.mp4";
import Thumb from "../../assets/logo.jpg";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

const data = [
  { videoSrc: AVAT1},{videoSrc: AVAT2 }, { videoSrc: AVAT3 },{videoSrc: AVAT4 },{videoSrc: AVAT5 },
  { videoSrc: AVAT6},{videoSrc: AVAT7 }, { videoSrc: AVAT8 },{videoSrc: AVAT9 },{videoSrc: AVAT10 },
  { videoSrc: AVAT11},{videoSrc: AVAT12 }, { videoSrc: AVAT13 },{videoSrc: AVAT14 },{videoSrc: AVAT15 }
];

const Anjysclips = () => {

  const [model, setModel] = useState(false);
  const [tempVideoSrc, setTempVideoSrc] = useState("");

  const getVideo = (videoSrc) => {
    setTempVideoSrc(videoSrc);
    setModel(true);
  };
  const closeModal = () => {
    setModel(false);
  };

  return (
    <section id="videos">
      <h5>Get The Tomis In Action</h5>
      <h2>VIDEOS</h2>
      <div className={model ? "model open" : "model"}>
        <video controls autoPlay>
          <source src={tempVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="close-button" onClick={closeModal}>
          <i className="fas fa-times"></i> {/* Close icon */}
        </button>
      </div>
      {/*Swiper pagination={true} modules={[Pagination]}*/}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="container testimonials_container"
      >
        <div className={model ? "model open" : "model"}>
                <source src={tempVideoSrc} type="video/mp4" onClick={closeModal} />
                <button className="close-button" onClick={closeModal}>
            <i className="fas fa-times"></i> {/* You can replace this with your preferred icon */}
          </button>
                {/* <Collapse  onClick={() => setModel(false)} /> */}
            </div>

        {data.map(({ videoSrc }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial" onClick={() => getVideo(videoSrc)}>
              <div className="client_avatar">
                <img src={Thumb} alt="Video Thumbnail" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {model && (
        <div className="model open">
          <video controls autoPlay>
            <source src={tempVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-button" onClick={() => setModel(false)}>Close</button>
        </div>
      )}
    </section>
  )
}

export default Anjysclips
