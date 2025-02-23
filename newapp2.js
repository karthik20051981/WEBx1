function showGuidance() {
    const grade = document.getElementById("grade").value;
    let guidanceText = "";

    if (grade === "10th") {
        guidanceText = `
            After 10th, you can choose:
            <ul>
                <li><b>Science Stream</b> - For Engineering, Medical, Research</li>
                <li><b>Commerce Stream</b> - For Business, CA, Banking</li>
                <li><b>Arts/Humanities</b> - For Journalism, Law, Government Exams</li>
                <li>Consider skill-based courses like IT, Digital Marketing, etc.</li>
            </ul>
        `;
    } else if (grade === "12th") {
        guidanceText = `
            After 12th, career options depend on your stream:
            <ul>
                <li><b>Science:</b> Engineering (B.Tech), Medical (MBBS), B.Sc, etc.</li>
                <li><b>Commerce:</b> CA, B.Com, Business Management, CFA</li>
                <li><b>Arts:</b> Journalism, Fashion Designing, UPSC, Law</li>
                <li>Explore certification courses and internships.</li>
            </ul>
        `;
    } else if (grade === "ug") {
        guidanceText = `
            After UG, you can:
            <ul>
                <li>Go for <b>higher studies</b> (MBA, M.Tech, M.Sc, etc.)</li>
                <li>Start a <b>job</b> in your field</li>
                <li>Explore <b>entrepreneurship</b></li>
                <li>Learn industry skills (coding, finance, marketing, etc.)</li>
            </ul>
        `;
    } else {
        guidanceText = "Please select a valid education level.";
    }

    document.getElementById("guidanceResult").innerHTML = guidanceText;
}
