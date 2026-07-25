
const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    const role = document.getElementById("jobRole").value;
    const experience = document.getElementById("experience").value;

    if (role === "") {
        alert("Please enter a job role.");
        return;
    }

    result.innerHTML = `
        <h3>${role} Interview Questions (${experience})</h3>

        <ol>
            <li>Tell me about yourself.</li>
            <li>Why do you want to become a ${role}?</li>
            <li>What are your strengths and weaknesses?</li>
            <li>Explain one project you have worked on.</li>
            <li>How do you solve difficult problems?</li>
            <li>Why should we hire you?</li>
            <li>Where do you see yourself in 5 years?</li>
            <li>Describe a challenging situation and how you handled it.</li>
            <li>What technologies are you familiar with?</li>
            <li>Do you have any questions for us?</li>
        </ol>

        <br>

        <h3>Preparation Tips</h3>

        <ul>
            <li>✔ Practice coding every day.</li>
            <li>✔ Revise your projects thoroughly.</li>
            <li>✔ Learn common interview questions.</li>
            <li>✔ Improve communication skills.</li>
            <li>✔ Be confident and honest.</li>
        </ul>
    `;

});
