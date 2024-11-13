document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the diagnosis result from localStorage
    const diagnosisResult = JSON.parse(localStorage.getItem("diagnosisResult"));

    // Display user symptoms
    const userSymptomsElement = document.getElementById("user-symptoms");
    const storedSymptoms = localStorage.getItem("userSymptoms"); // Optionally store user symptoms
    userSymptomsElement.textContent = storedSymptoms ? storedSymptoms : "No symptoms entered.";

    // Display the diagnosis results
    const conditionsListElement = document.getElementById("conditions-list");
    if (diagnosisResult && diagnosisResult.length > 0) {
        conditionsListElement.innerHTML = diagnosisResult.map(condition => `
            <article class="condition">
                <h3>${condition.name}</h3>
                <p>${condition.description}</p>
            </article>
        `).join('');
    } else {
        conditionsListElement.innerHTML = `<p>No diagnosis available.</p>`;
    }
});
