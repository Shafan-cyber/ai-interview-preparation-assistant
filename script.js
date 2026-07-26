const button = document.getElementById("generateBtn");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

button.addEventListener("click", function () {

    const role = document.getElementById("jobRole").value;
    const experience = document.getElementById("experience").value;
    const company = document.getElementById("company").value;
    const difficulty = document.getElementById("difficulty").value;

    if (role.trim() === "") {
        alert("Please enter a Job Role.");
        return;
    }

    // Show Loading
    loading.style.display = "block";
    result.innerHTML = "";

    setTimeout(() => {

        // Hide Loading
        loading.style.display = "none";

        result.innerHTML = `
            <h2>🚀 ${role} Interview Questions</h2>

            <p><strong>🏢 Company:</strong> ${company || "Any Company"}</p>
            <p><strong>💼 Experience:</strong> ${experience}</p>
            <p><strong>🎯 Difficulty:</strong> ${difficulty}</p>

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

            <h3>📚 Preparation Tips</h3>

            <ul>
                <li>✅ Revise your projects.</li>
                <li>✅ Practice coding every day.</li>
                <li>✅ Learn about ${company || "the company"}.</li>
                <li>✅ Improve communication skills.</li>
                <li>✅ Attend mock interviews.</li>
            </ul>

            <br>

            <div style="margin-top:20px;">
                <button id="copyBtn">📋 Copy Questions</button>
                <button id="downloadBtn" style="margin-top:10px;">📄 Download PDF</button>
            </div>
        `;

        // Copy Questions
        document.getElementById("copyBtn").addEventListener("click", function () {
            navigator.clipboard.writeText(result.innerText);
            alert("✅ Questions copied successfully!");
        });

        // Download / Print PDF
        document.getElementById("downloadBtn").addEventListener("click", function () {

            const content = result.innerText;

            const win = window.open("", "_blank");

            win.document.write(`
                <html>
                <head>
                    <title>Interview Questions</title>
                    <style>
                        body{
                            font-family: Arial, sans-serif;
                            padding:30px;
                            line-height:1.8;
                        }
                        h2{
                            color:#2563eb;
                        }
                    </style>
                </head>
                <body>
                    <pre>${content}</pre>
                </body>
                </html>
            `);

            win.document.close();
            win.print();

        });

    }, 1500);

});

// Theme Toggle

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "🌞 Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});
