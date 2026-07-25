const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const role = document.getElementById("jobRole").value;
    const experience = document.getElementById("experience").value;
    const company = document.getElementById("company").value;
    const difficulty = document.getElementById("difficulty").value;

    if (role.trim() === "") {
        alert("Please enter a Job Role.");
        return;
    }

    // Loading Animation
    result.innerHTML = `
        <h2>⏳ Generating AI Interview Questions...</h2>
        <p>Please wait...</p>
    `;

    setTimeout(() => {

        result.innerHTML = `
            <h2>${role} Interview Questions</h2>

            <p><strong>Company:</strong> ${company || "Any Company"}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Difficulty:</strong> ${difficulty}</p>

            <hr>

            <ol>
                <li>Tell me about yourself.</li>
                <li>Why do you want to join ${company || "our company"}?</li>
                <li>Why are you interested in the ${role} role?</li>
                <li>Explain one project you have completed.</li>
                <li>What are your strengths?</li>
                <li>What are your weaknesses?</li>
                <li>Explain your technical skills related to ${role}.</li>
                <li>How do you solve difficult problems?</li>
                <li>What do you know about ${company || "our company"}?</li>
                <li>Why should we hire you?</li>
            </ol>

            <hr>

            <h3>Preparation Tips</h3>

            <ul>
                <li>✅ Revise your projects.</li>
                <li>✅ Practice coding daily.</li>
                <li>✅ Learn about ${company || "the company"}.</li>
                <li>✅ Improve communication skills.</li>
                <li>✅ Attend mock interviews.</li>
            </ul>

            <br>

            <button id="copyBtn">📋 Copy Questions</button>
        `;

        // Copy Button
        document.getElementById("copyBtn").addEventListener("click", function () {

            const text = result.innerText;

            navigator.clipboard.writeText(text);

            alert("Questions copied successfully!");

        });

    }, 1500);

});
