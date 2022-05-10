import React, {useRef, useEffect, useState} from "react";
import recordImg from "./imgs/record-3.png";
import stopImg from "./imgs/stop1.png";
import restartImg from "./imgs/reloading.png";
import recImg from "./imgs/rec.png";

function Camera() {

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto,sethasPhoto] = useState(false);

  const getVideo = () => {

    navigator.mediaDevices.getUserMedia(
      {video:
        {width: 1920, height: 1080}})
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play()
        })
        .catch(err => {
          console.error(err);
        })

  }

  const takePhoto = () => {
    const width = 414;
    const height = width/ (16/9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height ;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    sethasPhoto = true;
  }

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearrect(0, 0, photo.width, photo.height)
    sethasPhoto(false);
  }

  useEffect(() => {
       getVideo();
 
  }, [videoRef])
  return (
    <div className="Camera">
      <div className="subcamera">
        <img className="recIcon" src={recImg} alt="Rercoding"/>
        <video ref={videoRef}></video>
        <button  className="snapPhoto" onClick={takePhoto}>SNAP</button>
        <div className="cameraButtons">
          <button className="recordButton"><img src={recordImg} alt="Record"/></button>
          <button className="stopButton"><img src={stopImg} alt="Stop"/></button>
          <button className="restartButton"><img src={restartImg} alt="Restart"/></button>
        </div>
      </div>
      <div className={'result ' + (hasPhoto ? 'hasPhoto': '')}>
        <canvas ref={photoRef}></canvas>
        <button className="closeWindow" onClick={closePhoto}>CLOSE</button>
      </div>
    </div>
  );
}

export default Camera;
