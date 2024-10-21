// Function to analyze the text input
function analyzeSentiment() {
    const statement = document.getElementById("text-input").value;

    // Check if the text area is empty
    if (!statement) {
        document.getElementById('result').innerHTML = "<p class='error'>🤔 Please enter some text to analyze.</p>";
        return;
    }

    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ statement: statement })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Display results from sentiment analysis
        document.getElementById('result').innerHTML = `
            <div class='result-box ${data.label.toLowerCase()}'>
                <p><strong>Sentiment:</strong> ${data.label} 🌈 (Score: ${data.score})</p>
            </div>
        `;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('result').innerHTML = `<p class='error'>Error: ${error.message}</p>`;
    });
}

// Event listener for the Analyze button
document.getElementById("analyze-button").addEventListener("click", analyzeSentiment);

// Event listener for pressing Enter in the text area
document.getElementById("text-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent the default action (like form submission)
        analyzeSentiment();  // Call the analyze function
    }
});
