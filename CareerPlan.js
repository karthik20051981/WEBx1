function showCareerPlan() {
    const education = document.getElementById("education").value;
    let careerPlanText = "";

    if (education === "10th") {
        careerPlanText = `
            <b>Strategic Plan After 10th Grade:</b>
            <ul>
                <li>Explore different career options (Engineering, Medicine, Arts, etc.).</li>
                <li>Identify your interests & strengths through self-assessment.</li>
                <li>Choose the right stream (Science, Commerce, Arts) based on career goals.</li>
                <li>Start building foundational skills (Communication, Coding, etc.).</li>
                <li>Participate in Olympiads, competitions, and skill-based programs.</li>
            </ul>
        `;
    } else if (education === "12th") {
        careerPlanText = `
            <b>Strategic Plan After 12th Grade:</b>
            <ul>
                <li>Choose the right undergraduate program based on your interest.</li>
                <li>Apply for entrance exams (JEE, NEET, SAT, CAT, etc.).</li>
                <li>Consider scholarships, financial aid, and overseas opportunities.</li>
                <li>Start building an online presence (LinkedIn, personal website).</li>
                <li>Engage in internships, workshops, and networking events.</li>
            </ul>
        `;
    } else if (education === "ug") {
        careerPlanText = `
            <b>Strategic Plan During Undergraduate Studies:</b>
            <ul>
                <li>Focus on skill development (Technical, Analytical, Soft skills).</li>
                <li>Participate in internships, industry projects, and research.</li>
                <li>Build a strong resume and LinkedIn profile.</li>
                <li>Start preparing for higher studies or job placements.</li>
                <li>Attend career fairs, hackathons, and networking events.</li>
            </ul>
        `;
    } else if (education === "pg") {
        careerPlanText = `
            <b>Strategic Plan During Postgraduate Studies:</b>
            <ul>
                <li>Specialize in your field and gain deep knowledge.</li>
                <li>Work on research projects and publish papers if in academia.</li>
                <li>Build a strong professional network with industry experts.</li>
                <li>Prepare for leadership roles or entrepreneurial ventures.</li>
                <li>Look for global opportunities in your domain.</li>
            </ul>
        `;
    } else if (education === "professional") {
        careerPlanText = `
            <b>Strategic Plan for Working Professionals:</b>
            <ul>
                <li>Identify career growth opportunities (Promotions, Role Shifts).</li>
                <li>Upgrade skills through certifications and courses.</li>
                <li>Consider switching to leadership roles or entrepreneurship.</li>
                <li>Expand professional network through events & mentorship.</li>
                <li>Maintain work-life balance and personal development.</li>
            </ul>
        `;
    } else {
        careerPlanText = "Please select a valid education level.";
    }

    document.getElementById("careerPlan").innerHTML = careerPlanText;
}
