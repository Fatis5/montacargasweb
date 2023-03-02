import hikvison from "../media/hikvison.png";

import bosh from "../media/bosh.png";
import sm4 from "../media/sm4.png";
import dahua5 from "../media/dahua5.png";
import panasonic from "../media/panasonic.png";
import "animate.css/animate.min.css";
const Collage = () => {
  return (
    
<div className="flex justify-center mx-10 rounded-xl bg-white">
<div className="flex flex-col mx-auto">
        <img className="w-1/2 mx-auto py-10 animate__animated animate__bounceInLeft animate__delay-1s" src={dahua5} />
        <img className="w-1/2 mx-auto animate__animated animate__bounceInLeft animate__delay-2s" src={sm4} />
        <img className="w-1/2 mx-auto animate__animated animate__bounceInLeft animate__delay-2s" src={bosh} />
        <img className="w-1/2 mx-auto animate__animated animate__bounceInLeft animate__delay-3s" src={panasonic} />
        <img className="w-1/2 mx-auto animate__animated animate__bounceInLeft animate__delay-3s" src={hikvison} />
      </div>
</div>
    
  );
};

export default Collage;
