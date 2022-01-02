import { memo } from "react";
import React from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ReRender = memo((props) => {
  const { open, onClick } = props;
  console.log("ChildAreaがレンダリングされた");
  const data = [...Array(2000).keys()];

  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClick}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
