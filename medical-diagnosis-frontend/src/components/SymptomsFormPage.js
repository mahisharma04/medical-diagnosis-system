import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';  // <-- Add Link import here

function SymptomsFormPage() {
  const [symptomsList, setSymptomsList] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/symptoms')
      .then(response => setSymptomsList(response.data))
      .catch(error => console.error('Error fetching symptoms:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/diagnosis', {
        symptoms: [selectedSymptom]
      });
      navigate('/diagnosis-results', { 
        state: { 
          diagnosisData: response.data, 
          symptoms: [selectedSymptom],
          symptomsList: symptomsList  // Pass the full list of symptoms
        } 
      });
    } catch (error) {
      console.error('Error fetching diagnosis:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Enter Symptoms</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedSymptom}
          onChange={(e) => setSelectedSymptom(e.target.value)}
        >
          <option value="">Select a symptom</option>
          {symptomsList.map((symptom) => (
            <option key={symptom._id} value={symptom._id}>
              {symptom.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={loading}>
          {loading ? 'Getting Diagnosis...' : 'Get Diagnosis'}
        </button>
      </form>

      <div>
        <Link to="/">Back to Home</Link>
        <Link to="/history">View History</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default SymptomsFormPage;
