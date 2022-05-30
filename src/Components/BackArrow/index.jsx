
import { useHistory } from "react-router-dom";
import { Wrapper } from './style';

export default function Back() {
  const history = useHistory();

  return (
    <Wrapper id="back" onClick={() => history.goBack()}>
      Back
    </Wrapper>
  );
}
