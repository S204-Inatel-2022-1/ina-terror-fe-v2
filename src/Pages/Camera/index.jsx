import React, { useRef, useEffect, useState } from "react";
import { Wrapper, Button1, Button2, Bar, Button3, Bar2} from "./style";

function App() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, sethasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1920, height: 1080 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    sethasPhoto = true;
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearrect(0, 0, photo.width, photo.height);
    sethasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <Wrapper>
      <Bar>
        <Button1>
          <div />
        </Button1>
        <Button2>
          <div />
        </Button2>
        <Button3>
          <div />
        </Button3>
      </Bar>
      <video ref={videoRef}></video>
      <Bar2 />
    </Wrapper>
  );
}

export default App;
