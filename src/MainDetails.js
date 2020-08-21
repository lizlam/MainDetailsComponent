import React, { useReducer } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const MainTableArea = styled.div`
  width: 100%;
  transition: width 1s;
  background-color: wheat;
`;

const DetailsArea = styled.div`
  background-color: cornsilk;
  flex-grow: 1;
`;

const Divider = styled.button`
  background-color: azure;
`;
const initialState = { details: "closed" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CLOSED":
      return { details: "closed" };
    case "OPEN-DEFAULT":
      return {
        details: "open",
        openType: "default",
        style: { width: "25%", float: "left" }
      };
    case "OPEN-FULL":
      return {
        details: "open",
        openType: "full",
        style: { width: "0%", float: "left" }
      };
    default:
      throw new Error();
  }
};
export function MainDetails(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeHandler = () => {
    dispatch({ type: "CLOSED" });
    if (props.onClose) props.onClose();
  };

  const openDefaultHandler = () => {
    dispatch({ type: "OPEN-DEFAULT" });
  };

  const openFullHandler = () => {
    dispatch({ type: "OPEN-FULL" });
  };

  const main = React.cloneElement(props.main, { onClick: openDefaultHandler });
  return (
    <Container>
      <MainTableArea style={state.style}>{main}</MainTableArea>
      {state.details === "open" && (
        <Divider
          onClick={
            state.openType === "default" ? openFullHandler : openDefaultHandler
          }
        />
      )}
      {state.details === "open" && (
        <DetailsArea>
          <button onClick={closeHandler}>Close</button>
          {props.details}
        </DetailsArea>
      )}
    </Container>
  );
}

export default MainDetails;
