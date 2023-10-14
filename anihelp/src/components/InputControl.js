import React from "react";

function InputControl(props) {
    return (
      <div className="flex flex-col">
        {props.label && <label className="font-bold mb-2">{props.label}</label>}
        <input type="text" {...props} className="border-2 border-gray-300 p-2 rounded-md" />
      </div>
    );
  }
  export default InputControl;