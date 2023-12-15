import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import tienda from "../media/tienda.png";
import oficina from "../media/oficina.jpeg";
import servidor from "../media/servidor.jpeg";
import img5 from "../media/img5.jpeg";
import img6 from "../media/img6.jpeg";
import img7 from "../media/img7.jpeg";

const CarouselComponent = () => {
  const menu = [
    {
      id: 1,
      img: tienda,
      descripcion: "Tenida en línea con envíos a todo el país",
    },
    {
      id: 2,
      img: oficina,
      descripcion: "Oficinas en el Estado De México",
    },
    {
      id: 3,
      img: servidor,
      descripcion: "Servidores en la nube",
    },
    {
      id: 4,
      img: img5,
      descripcion: "Instalación de cámaras de seguridad",
    },
    {
      id: 5,
      img: img6,
      descripcion: "Instalación de cámaras de seguridad",
    },
    {
      id: 6,
      img: img7,
      descripcion: "Instalación de cámaras de seguridad",
    }
  ];

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      className="
        h-1/3
        w-1/3
        mx-auto
        my-10
        flex flex-col
        justify-center
        items-center
      "
      renderIndicator={() => null}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title="Previous"
            className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2"
          >
            <FaChevronLeft size={24} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title="Next"
            className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2"
          >
            <FaChevronRight size={24} />
          </button>
        )
      }
>
      {menu.map((item) => (

        <div
          key={item.id}
          className="
            h-full
            flex
            justify-center
            items-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              rounded-lg
              aspect-w-4
              aspect-h-3
              overflow-hidden
            "
          >
            <img src={item.img} alt={item.descripcion} />
          </div>
          
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
