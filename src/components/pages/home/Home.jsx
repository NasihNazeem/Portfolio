import "./home.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Home() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 40,
      strings: ["Developer", "Electrical Engineer", "Life-Long Student"],
    });
  }, [])

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGGC-Rf2JNUgQ/profile-displayphoto-shrink_800_800/0/1559713970727?e=2147483647&v=beta&t=LDEIGY34MvduKKhCoKAzcUSxmhGmF4httZkcDVGX4Qo"
            alt="profile-picture" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="firstHead">
            <h2>Hi <span><img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt="wave" /></span>, I'm</h2>
          </div>
          <h1>Nasih Nazeem</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#about">
          <img src="http://cdn.onlinewebfonts.com/svg/img_396761.png" alt="down-arrow" />
        </a>
      </div>
    </div>
  )
}
