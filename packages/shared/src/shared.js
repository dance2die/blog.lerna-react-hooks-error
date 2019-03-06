import React from "react";

function SharedComponent({ title }) {
  return <div>{title}</div>;
}

function useSharedValue() {
  const [state, _] = React.useState("Shared state value!");
  return state;
}

export { useSharedValue };
export default SharedComponent;
