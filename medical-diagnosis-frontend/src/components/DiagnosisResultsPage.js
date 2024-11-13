import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function DiagnosisResultsPage() {
  const { state } = useLocation();
  const diagnosisData = state?.diagnosisData || [];
  const symptoms = state?.symptoms || [];
  const symptomsList = state?.symptomsList || [];

  const getSymptomName = (id) => {
    const symptom = symptomsList.find(symptom => symptom._id === id);
    return symptom ? symptom.name : 'Unknown Symptom';
  };

  return (
    <div>
      <h1>Diagnosis Results</h1>
      <h2>Your Symptoms:</h2>
      {symptoms.length > 0 ? symptoms.map(id => getSymptomName(id)).join(', ') : "No symptoms available"}

      <h2>Possible Conditions:</h2>
      {diagnosisData.length > 0 ? (
        <ul>
          {diagnosisData.map((condition, index) => (
            <li key={index}>{condition.name}</li>
          ))}
        </ul>
      ) : (
        "No conditions available"
      )}

      <div>
        <Link to="/">Back to Home</Link>
        <Link to="/symptoms">Enter New Symptoms</Link>
      </div>
    </div>
  );
}

export default DiagnosisResultsPage;
