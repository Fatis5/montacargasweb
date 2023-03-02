import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BiHappyAlt, BiCctv } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";


const Testimonios = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    delay: 500,
    rootMargin: "250px 200px 400px 400px",
  });
  return (
    <div ref={ref}>

        <div className="flex md:flex-row flex-col bg-gradient-to-t from-sky-500 to-indigo-500 justify-center">
          <div className="flex flex-col text-center mx-10 mt-3 py-16">
            <div>
              <BiHappyAlt className="h-20 w-20 mx-auto text-white " />
            </div>
            <div >
          {
            inView && (
              <CountUp
              ref={ref}
                className="text-gray-700 text-7xl font-bold"
                start={0}
                end={300}
                duration={3}
                prefix="+"
              />
            )
          }
            </div>
            <div className=" text-white text-xl  ">
              <p>Clientes satisfechos</p>
            </div>
          </div>

          <div className="flex flex-col text-center mx-3 mt-3 py-16">
            <div>
              <AiOutlineFieldTime className="w-20 h-20 mx-auto text-white " />
            </div>
            <div>
            {
            inView && (
              <CountUp
              ref={ref}
                className="text-gray-700 text-7xl font-bold"
                start={0}
                end={5}
                duration={3}
                prefix="+"
              />
            )
          }
            </div>
            <div className=" text-white text-xl  ">
              <p>Años de experiencia nos respaldan</p>
            </div>
          </div>

          <div className="flex flex-col text-center mx-10 mt-3 py-16">
            <div>
              <BiCctv className="h-20 w-20 mx-auto text-white " />
            </div>
            <div>
            {
            inView && (
              <CountUp
              ref={ref}
                className="text-gray-700 text-7xl font-bold"
                start={0}
                end={200}
                duration={3}
                prefix="+"
              />
            )
          }
            </div>
            <div className=" text-white text-xl  ">
              <p>CCTV Instalados</p>
            </div>
          </div>

          {/*      <div className="flex flex-col text-center mx-10 mt-3 py-16">
              <div>
                <FaCashRegister className="h-20 w-20 mx-auto text-white " />
              </div>
              <div>
                <CountUp
                  className="text-gray-700 text-7xl font-bold"
                  start={0}
                  end={30}
                  duration={2}
                  prefix="+"
                />
              </div>
              <div className=" text-white text-xl  ">
                <p>Puntos de venta Instalados</p>
              </div>
            </div> */}
        </div>
      
    </div>
  );
};

export default Testimonios;
