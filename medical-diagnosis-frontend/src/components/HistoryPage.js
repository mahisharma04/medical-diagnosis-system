import React from 'react';

function HistoryPage() {
  // Assuming you store previous diagnosis results in localStorage or another state
  const history = JSON.parse(localStorage.getItem('history')) || [];

  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.length === 0 ? (
          <li>No history available</li>
        ) : (
          history.map((entry, index) => (
            <li key={index}>{entry.date}: {entry.condition}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default HistoryPage;
