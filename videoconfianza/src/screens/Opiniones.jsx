import React from "react";

import Footer from "./Footer";

const Opiniones = () => {
  const opiniones = [
    {
      id: 1,
      name: "Juan",
      opinion:
        "Excelente servicio, muy recomendable, con sus servicios puedo cuidar mi negocio",
      image:
        " https://d18ufwot1963hr.cloudfront.net/wp-content-production/uploads/2022/04/GettyImages-1215439807.jpg ",
    },
    {
      id: 2,
      name: "Pedro",
      opinion: "Muy buen servicio, muy recomendable",
      image:
        "https://yucatan.quadratin.com.mx/www/wp-content/uploads/2020/04/mercado-carnicero-empleos-carne-RAL-1160x700-1.jpg"
    },
    {
      id: 3,
      name: "Maria",
      opinion: "Excelente servicio, muy recomendable, ahora ya no me roban en mi tienda",
      image:
        " https://tabasco.gob.mx/sites/default/files/users/uietabasco/2_991.jpg",
    },
    {
      id: 4,
      name: "Jose",
      opinion: "Muy buen servicio, muy recomendable, ahora puedo vigilar mi negocio desde mi oficina",
      image:
        " https://revistamagazzine.com/wp-content/uploads/2019/06/Control-flotas-Magazzine-del-Transporte-1.jpg ",
    },
    {
      id: 5,
      name: "Luis",
      opinion: "Excelente servicio, muy recomendable, ahora mis empleados no me roban en mi empresa",
      image:
        " https://info.ita.tech/hubfs/IMG_3142.jpg ",
    },
    {
      id: 6,
      name: "Marcos",
      opinion: "Muy buen servicio, muy recomendable, con su cerca eléctrica puedo cuidar mi ganado mas fácil",
      image:
        " https://www.gob.mx/cms/uploads/article/main_image/91016/DSC_0752.JPG ",
    },
  ];
  return <div className="bg-gradient-to-t from-sky-500 to-indigo-500">
    <div className="flex flex-wrap justify-center">
        <h1
        className="text-center py-10 text-white md:text-8xl text-5xl animate__animated animate__fadeInUp"
        >
            Opiniones de algunos clientes
        </h1>
        {opiniones.map((opinion) => (
            <div key={opinion.id}>
                <div className="max-w-xs  mx-10 my-4  overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800">
                    <img className="object-cover h-60 w-full" src={opinion.image} alt="avatar" />
                    <div className="py-5 text-center">
                        <span className="block text-2xl font-bold text-gray-800 dark:text-white">{opinion.name}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-200 text-justify">{opinion.opinion}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <Footer />
  </div>;
};

export default Opiniones;
