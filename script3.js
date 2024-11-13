document.getElementById("aboutUsBtn").addEventListener("click", function() {
    const aboutUsBox = document.getElementById("aboutUsBox");

    // Toggle the visibility of the About Us box with a smooth slide-down effect
    if (aboutUsBox.style.display === "none" || aboutUsBox.style.display === "") {
        aboutUsBox.style.display = "block";
        aboutUsBox.style.height = "0px"; // Start from 0 height for animation
        setTimeout(() => {
            aboutUsBox.style.height = "160px"; // Set the desired height for the visible box
        }, 10); // Delay to allow the transition to kick in
    } else {
        aboutUsBox.style.height = "0px"; // Collapse the box
        setTimeout(() => {
            aboutUsBox.style.display = "none"; // Hide the box after collapsing
        }, 500); // Wait for the collapse animation to finish
    }
});
