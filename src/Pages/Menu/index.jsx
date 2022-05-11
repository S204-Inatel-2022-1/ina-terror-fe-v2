import React from "react";
import { Wrapper, Note } from "./style";
import { useHistory } from "react-router-dom";

export default function Emf() {
  const history = useHistory();
  return (
    <Wrapper>
      <Note>
        <button onClick={() => history.push("/menu/emf")} className="hunt">
          Hunt Ghosts
        </button>

        <button onClick={() => history.push("/menu/camera")}>Supernatural Camera</button>

        <button onClick={() => history.push("/menu/article")}>
          Infernal Dictionary
        </button>

        <button onClick={() => history.push("/menu/sightings")}>
          Ghost Sightings
        </button>

        <button onClick={() => history.push("/menu/account")}>Account</button>

        <button onClick={() => history.push("/")}>Go Back</button>
      </Note>
    </Wrapper>
  );
}
