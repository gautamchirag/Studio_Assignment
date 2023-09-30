import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Card from '../card/Card';

export default function Slider() {
  const swiperRef = useRef();
  const PrevButton = ({ onClick }) => (
    <button className="custom-prev-button" onClick={onClick}>
      <svg
        width="56"
        height="6"
        viewBox="0 0 56 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Arrow 2"
          d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
          fill="#161615"
        />
      </svg>
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button className="custom-next-button" onClick={onClick}>
      <svg
        width="56"
        height="6"
        viewBox="0 0 56 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Arrow 1"
          d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
          fill="#161615"
        />
      </svg>
    </button>
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePrevButtonClick = () => {
    console.log(swiperRef.current);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        ref={swiperRef}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              img={item.image}
              title={item.title}
              desc={item.description}
              price={item.price}
            />
          </SwiperSlide>
        ))}

        <div className="arrows">
          <PrevButton onClick={handlePrevButtonClick} />
          <NextButton onClick={handleNextButtonClick} />
        </div>
      </Swiper>
    </>
  );
}
