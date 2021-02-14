import React from "react";

function Inputbox(props) {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
        type="text"
        placeholder={props.placeholderText}
        value={props.inputValue}
        onChange={props.inputOnChange}
        name={props.inputName}
      />
    </div>
  );
}

export default Inputbox;
