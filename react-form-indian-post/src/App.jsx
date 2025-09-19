import React, { useState } from "react";
import "./App.css"; // Add your styles here

const App = () => {
  const [pincode, setPincode] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  const handleLookup = async () => {
    if (pincode.length !== 6 || isNaN(pincode)) {
      setError("Please enter a valid 6-digit Indian Postal Code.");
      setData([]);
      setFilteredData([]);
      return;
    }

    setLoading(true);
    setError("");
    setData([]);
    setFilteredData([]);

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const result = await response.json();

      if (result[0].Status !== "Success") {
        setError("No data found for this pincode.");
      } else {
        setData(result[0].PostOffice);
        setFilteredData(result[0].PostOffice);
      }
    } catch (err) {
      setError("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    const filtered = data.filter((postOffice) =>
      postOffice.Name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <h1>Pincode Lookup</h1>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter 6-digit Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          maxLength={6}
        />
        <button onClick={handleLookup}>Lookup</button>
      </div>

      {error && <p className="error">{error}</p>}

      {loading && <div className="loader">Loading...</div>}

      {!loading && data.length > 0 && (
        <>
          <div className="filter-group">
            <input
              type="text"
              placeholder="Filter by Post Office Name"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>

          {filteredData.length > 0 ? (
            <div className="results">
              {filteredData.map((postOffice) => (
                <div key={postOffice.Name} className="card">
                  <h3>{postOffice.Name}</h3>
                  <p><strong>Pincode:</strong> {postOffice.Pincode}</p>
                  <p><strong>District:</strong> {postOffice.District}</p>
                  <p><strong>State:</strong> {postOffice.State}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">
              Couldn’t find the postal data you’re looking for…
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
