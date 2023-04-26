import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3 ">
      <SketchPicker
        color={snap.color}
        presetColors={[
          "#F8B195",
          "#4d648d",
          "#C06C84",
          "#6C5B7B",
          "#355C7D",
          "#99B898",
          "#FF847C",
          "#E84A5F",
          "#2A363B",
          "#A8E6CE",
          "#A8A7A7",
          "#CC527A",
          "#E8175D",
          "#474747",
          "#363636",
          " #45ADA8 ",
          "#547980",
          "#594F4F",
        ]}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
