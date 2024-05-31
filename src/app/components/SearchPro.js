import React from 'react';

const SearchPro = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search..."
    className="border-2 p-2 rounded-md   outline-none w-96"
  />
);

export default SearchPro;
