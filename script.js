// Check if the current page is the symptom form page
if (document.getElementById("symptomForm")) {
    // Select the form element
    const symptomForm = document.getElementById("symptomForm");

    // Add an event listener for form submission
    symptomForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the symptoms input value
        const symptoms = document.getElementById("symptoms").value;

        // Store symptoms in localStorage
        localStorage.setItem("userSymptoms", symptoms);

        // Redirect to the diagnosis results page
        window.location.href = "diagnostic_results.html"; 
    });
}

// Check if the current page is the diagnosis results page
if (document.getElementById("results")) {
    // Retrieve symptoms from localStorage
    const userSymptoms = localStorage.getItem("userSymptoms");

    // Display the symptoms in the results div
    const resultsDiv = document.getElementById("results");
    if (userSymptoms) {
        resultsDiv.innerHTML = `<p>Your symptoms: ${userSymptoms}</p>`;
    } else {
        resultsDiv.innerHTML = `<p>No symptoms submitted.</p>`;
    }

    // Optionally clear the symptoms from localStorage after displaying
    // localStorage.removeItem("userSymptoms");
}