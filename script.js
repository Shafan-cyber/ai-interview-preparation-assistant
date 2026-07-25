const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const role = document.getElementById("jobRole").value;
    const experience = document.getElementById("experience").value;

    if (role.trim() === "") {
        alert("Please enter a job role.");
        return;
    }

    result.innerHTML = `
        <h3>${role} Interview Questions (${experience})</h3>

        <ol>
            <li>Tell me about yourself.</li>
            <li>Why do you want to become a ${role}?</li>
            <li>What are your strengths?</li>
            <li>Explain one project you have completed.</li>
            <li>How do you solve difficult problems?</li>
            <li>Why should we hire you?</li>
            <li>Where do you see yourself in 5 years?</li>
            <li>What technologies do you know?</li>
            <li>How do you handle pressure?</li>
            <li>Do you have any questions for us?</li>
        </ol>

        <h3>Preparation Tips</h3>

        <ul>
            <li>✔ Revise your projects.</li>
            <li>✔ Practice coding daily.</li>
            <li>✔ Improve communication skills.</li>
            <li>✔ Learn company basics.</li>
            <li>✔ Be confident.</li>
        </ul>
    `;
});
