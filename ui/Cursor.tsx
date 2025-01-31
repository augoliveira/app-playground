"use client";
import React from "react";

import mousecursor from "#/app/common/mouseEffect";

const Cursor = () => {
  React.useEffect(() => {
    mousecursor();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
