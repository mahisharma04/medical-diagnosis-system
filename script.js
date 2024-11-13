// Check if the current page is the symptom form page
if (document.getElementById("symptomForm")) {
    // Select the form element
    const symptomForm = document.getElementById("symptomForm");

    // Add an event listener for form submission
    symptomForm.addEventListener("submit", async function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the symptoms input value
        const symptoms = document.getElementById("symptoms").value.split(",");

        try { 
            // Fetch symptoms from the backend to get their corresponding IDs
            const symptomResponse = await fetch("http://localhost:8000/api/symptoms");
            const allSymptoms = await symptomResponse.json();

            // Match the user input symptoms with their IDs
            const symptomIds = allSymptoms
                .filter(symptom => symptoms.includes(symptom.name.trim()))
                .map(symptom => symptom._id);

            
            localStorage.setItem("userSymptoms", document.getElementById("symptoms").value);


            // Send the symptoms (IDs) to the backend
            const response = await fetch("http://localhost:8000/api/diagnosis", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ symptoms: symptomIds })
            });

            // Check if the response is successful
            if (response.ok) {
                const data = await response.json();
                
                // Save the diagnosis result in localStorage and redirect
                localStorage.setItem("diagnosisResult", JSON.stringify(data));
                window.location.href = "diagnostic_results.html";
            } else {
                console.error("Failed to submit symptoms.");
            }
        } catch (error) {
            console.error("Error submitting symptoms:", error);
        }
    });
}

// Check if the current page is the diagnosis results page
if (document.getElementById("results")) {
    // Retrieve the diagnosis result from localStorage
    const diagnosisResult = JSON.parse(localStorage.getItem("diagnosisResult"));

    // Display the diagnosis results
    const resultsDiv = document.getElementById("results");
    if (diagnosisResult) {
        resultsDiv.innerHTML = `<p>Possible conditions based on your symptoms:</p><ul>${diagnosisResult.map(condition => `<li>${condition.name}: ${condition.description}</li>`).join('')}</ul>`;
    } else {
        resultsDiv.innerHTML = `<p>No diagnosis available.</p>`;
    }

    // Optionally clear the diagnosis data from localStorage after displaying
    // localStorage.removeItem("diagnosisResult");
}
