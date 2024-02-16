import React, { useId } from "react";

const Select = (
  { options = [], label = "", className = "", ...props },
  ref
) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
      >
        {options &&
          options?.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
