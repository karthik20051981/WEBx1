function showUniversities() {
    const career = document.getElementById("career").value;
    let universityText = "";

    if (career === "engineering") {
        universityText = `
            Recommended Universities for Engineering:
            <ul>
                <li><b>MIT</b> - Massachusetts Institute of Technology</li>
                <li><b>Stanford University</b> - USA</li>
                <li><b>IITs</b> - India</li>
                <li><b>Technical Universities</b> - Germany, Canada</li>
            </ul>
        `;
    } else if (career === "medicine") {
        universityText = `
            Top Universities for Medicine:
            <ul>
                <li><b>Harvard Medical School</b> - USA</li>
                <li><b>Johns Hopkins University</b> - USA</li>
                <li><b>AIIMS</b> - India</li>
                <li><b>Oxford & Cambridge</b> - UK</li>
            </ul>
        `;
    } else if (career === "business") {
        universityText = `
            Best Business Schools:
            <ul>
                <li><b>Harvard Business School</b> - USA</li>
                <li><b>London Business School</b> - UK</li>
                <li><b>Wharton School</b> - USA</li>
                <li><b>IIMs</b> - India</li>
            </ul>
        `;
    } else if (career === "arts") {
        universityText = `
            Top Universities for Arts & Humanities:
            <ul>
                <li><b>University of Oxford</b> - UK</li>
                <li><b>Yale University</b> - USA</li>
                <li><b>JNU</b> - India</li>
                <li><b>Parsons School of Design</b> - USA</li>
            </ul>
        `;
    } else if (career === "science") {
        universityText = `
            Leading Science & Research Universities:
            <ul>
                <li><b>California Institute of Technology (Caltech)</b> - USA</li>
                <li><b>MIT</b> - USA</li>
                <li><b>Indian Institute of Science (IISc)</b> - India</li>
                <li><b>Max Planck Institute</b> - Germany</li>
            </ul>
        `;
    } else if (career === "law") {
        universityText = `
            Best Law Universities:
            <ul>
                <li><b>Harvard Law School</b> - USA</li>
                <li><b>Yale Law School</b> - USA</li>
                <li><b>National Law Universities (NLUs)</b> - India</li>
                <li><b>University of Melbourne</b> - Australia</li>
            </ul>
        `;
    } else {
        universityText = "Please select a valid career interest.";
    }

    document.getElementById("universityResult").innerHTML = universityText;
}
