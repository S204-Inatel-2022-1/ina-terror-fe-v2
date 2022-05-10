import React, { useEffect, useState } from "react";
import axios from "axios";

const Rc = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/info")
      .then((res) => {
        setTest(res.data)
      })
  }, [])

  const bin = test.map((aux) => <h1>{aux.user}</h1>)

  return <div>{bin}</div>;
};

export default Rc;
