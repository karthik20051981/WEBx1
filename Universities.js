function showGuidance() {
    const career = document.getElementById("career").value;
    let guidanceText = "";

    if (career === "engineering") {
        guidanceText = `
            <b>What an Engineering University Should Have:</b>
            <ul>
                <li>Modern labs & research centers with latest technologies</li>
                <li>Strong industry partnerships & internship opportunities</li>
                <li>Accredited engineering programs (ABET, NBA, etc.)</li>
                <li>High placement rates in core companies</li>
                <li>Innovation & entrepreneurship programs</li>
            </ul>
        `;
    } else if (career === "medicine") {
        guidanceText = `
            <b>What a Medical University Should Have:</b>
            <ul>
                <li>Affiliation with reputed hospitals for clinical training</li>
                <li>Accredited programs (MCI, WHO, etc.)</li>
                <li>Well-equipped labs, anatomy models, and medical research centers</li>
                <li>Hands-on internship and residency programs</li>
                <li>Availability of scholarships and financial aid for students</li>
            </ul>
        `;
    } else if (career === "business") {
        guidanceText = `
            <b>What a Business School Should Have:</b>
            <ul>
                <li>Strong corporate tie-ups for internships and placements</li>
                <li>Accreditations like AACSB, EQUIS for global recognition</li>
                <li>Case study-based learning and real-world business projects</li>
                <li>Networking opportunities and global exchange programs</li>
                <li>Entrepreneurship and leadership development programs</li>
            </ul>
        `;
    } else if (career === "arts") {
        guidanceText = `
            <b>What an Arts & Humanities University Should Have:</b>
            <ul>
                <li>Diverse courses in literature, philosophy, media, etc.</li>
                <li>Opportunities for public speaking, debates, and creative projects</li>
                <li>Internships in media, publishing, NGOs, and public relations</li>
                <li>Creative learning environment with access to arts and music</li>
                <li>Alumni network and mentorship programs</li>
            </ul>
        `;
    } else if (career === "science") {
        guidanceText = `
            <b>What a Science & Research University Should Have:</b>
            <ul>
                <li>State-of-the-art research facilities and science labs</li>
                <li>Funding and grants for student-led research projects</li>
                <li>International collaborations with research institutions</li>
                <li>Highly qualified faculty involved in active research</li>
                <li>Opportunities to publish research papers and patents</li>
            </ul>
        `;
    } else if (career === "law") {
        guidanceText = `
            <b>What a Law School Should Have:</b>
            <ul>
                <li>Moot court sessions and real-world legal case studies</li>
                <li>Internships with law firms, judiciary, and corporate legal teams</li>
                <li>Recognized accreditation (Bar Council approved programs)</li>
                <li>Experienced faculty with legal practice backgrounds</li>
                <li>Access to legal databases and libraries for case studies</li>
            </ul>
        `;
    } else {
        guidanceText = "Please select a valid career interest.";
    }

    document.getElementById("guidanceResult").innerHTML = guidanceText;
}
