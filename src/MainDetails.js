import React, { useReducer } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const MainTableArea = styled.div`
  width: 100%;
  height: 400px;
  transition: width 1s;
  background-color: wheat;
`;

const DetailsArea = styled.div`
  background-color: cornsilk;
  flex-grow: 1;
`;

const StyledSpan = styled.span`
  background-color: cornsilk;
`;

const IconSpan = styled.span`
  background-color: white;
  border: blue 1px solid;
  font-size: 9px;
  border-radius: 25px;
  padding: 3px;
  position: relative;
  right: 7px;
`;

const CloseButton = styled.button`
  float: right;
`;

const Right = `>`;

const Left = `<`;

const initialState = { details: "closed" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CLOSED":
      return { details: "closed" };
    case "OPEN-DEFAULT":
      return {
        details: "open",
        openType: "default",
        style: { width: "25%", float: "left", borderRight: "1px solid blue" }
      };
    case "OPEN-FULL":
      return {
        details: "open",
        openType: "full",
        style: { width: "0%", float: "left", borderRight: "1px solid blue" }
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
        <>
          <StyledSpan
            onClick={
              state.openType === "default"
                ? openFullHandler
                : openDefaultHandler
            }
          >
            {state.openType === "default" ? (
              <IconSpan>{Left}</IconSpan>
            ) : (
              <IconSpan>{Right}</IconSpan>
            )}
          </StyledSpan>
          <div></div>
        </>
      )}
      {state.details === "open" && (
        <DetailsArea>
          <CloseButton onClick={closeHandler}>Close</CloseButton>
          {props.details}
        </DetailsArea>
      )}
    </Container>
  );
}

export default MainDetails;
