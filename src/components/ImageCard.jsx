import React from "react";

export default function ImageCard(props) {
  return (
    <div
      style={{
        width: props.width || "100%",
        height: props.height || "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        boxShadow: "5px 6px 8px rgba(0,0,0,0.2)",
        borderRadius: 10,
        gap: 20,
      }}
    >
      {props.left} {props.right}
    </div>
  );
}
