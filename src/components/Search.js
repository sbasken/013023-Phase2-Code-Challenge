import React, { useState } from "react";

function Search({ onFilterTransactions }) {
  const [ searchQuery, setSearchQuery ] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    onFilterTransactions(e.target.value)
  }

  console.log(searchQuery)

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
