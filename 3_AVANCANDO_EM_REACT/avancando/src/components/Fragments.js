import React from "react";

const Fragments = ({propFragments}) => {
  return (
    <>
      <h2>Primeiro título</h2>
      <h3>Segundo título</h3>
      <h4>{propFragments}</h4>
    </>
  );
};

export default Fragments;