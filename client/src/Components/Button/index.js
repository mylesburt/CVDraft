import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {props.buttontext}
      </button>
    </div>
  );
}

export default Button;
