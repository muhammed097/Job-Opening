        const jobs = [
            { title: 'Tele-calling Executive', location: 'India - Chennai', jobId: 'JO - 126573', description: 'We are seeking a motivated Tele-calling Executive to join our team. The ideal candidate will have excellent communication skills and be able to engage customers over the phone.' },
            { title: 'Field Sales Executive', location: 'India - Mumbai', jobId: 'JO - 126574', description: 'Join our dynamic sales team as a Field Sales Executive. You will be responsible for meeting potential clients, presenting our products, and closing deals.' },
            { title: 'Customer Service Representative', location: 'India - Bangalore', jobId: 'JO - 126575', description: 'We are looking for a Customer Service Representative to handle customer inquiries, resolve issues, and ensure customer satisfaction.' },
            { title: 'Digital Marketing Specialist', location: 'India - Delhi', jobId: 'JO - 126576', description: 'Join our marketing team as a Digital Marketing Specialist. You will be responsible for creating and implementing digital marketing strategies across various platforms.' },
            { title: 'Software Developer', location: 'India - Hyderabad', jobId: 'JO - 126577', description: 'We are seeking a talented Software Developer to join our tech team. You will be involved in designing, coding, and modifying software to meet specific requirements.' }
        ];

        const firstJobCustomDescription = `
            <strong>Job Title:</strong> Sales Executive<br>
            <strong>Location:</strong> Chennai, Tamilnadu<br>
            <strong>Job Type:</strong> Full-time<br><br>
            <strong>Job Summary:</strong><br>
            We are seeking a dynamic and results-oriented Sales Executive to join our growing team in Newport City, California. The ideal candidate will have a passion for sales, excellent communication skills, and the ability to thrive in a fast-paced environment. You will be responsible for generating new business, managing client relationships, and meeting sales targets.<br><br>
            <strong>Key Responsibilities:</strong><br>
            - Identify and generate new business opportunities through networking, cold calling, and market research.<br>
            - Develop and maintain strong relationships with clients to understand their needs and provide tailored solutions.<br>
            - Achieve monthly, quarterly, and annual sales targets.<br>
            - Present, promote, and sell products/services to prospective customers.<br>
            - Prepare and deliver sales presentations and product demonstrations.<br>
            - Negotiate contracts, close deals, and handle customer objections.<br>
            - Collaborate with the marketing and product teams to enhance sales strategies.<br>
            - Maintain detailed records of sales activities and customer interactions in CRM software.<br>
            - Stay up-to-date with market trends, competitors, and industry developments.<br><br>
            <strong>Qualifications:</strong><br>
            - Bachelor’s degree in business, marketing, or a related field.<br>
            - Proven track record in sales, with at least 1-2 years of experience.<br>
            - Strong communication, negotiation, and interpersonal skills.<br>
            - Self-motivated with a goal-oriented approach.<br>
            - Ability to handle rejection and maintain enthusiasm for achieving sales targets.<br>
            - Proficiency in MS Office and CRM software.<br><br>
            <strong>Preferred Skills:</strong><br>
            - Experience in [insert relevant industry].<br>
            - Knowledge of digital marketing or e-commerce is a plus.<br><br>
            <strong>Benefits:</strong><br>
            - Competitive salary plus commission.<br>
            - Opportunities for career growth.<br>
            - Health insurance and other benefits.
        `;

        function createJobCard(job) {
            return `
                <div class="job-card">
                    <h2>${job.title}</h2>
                    <p>${job.location}</p>
                    <p>${job.jobId}</p>
                    <button class="apply-btn" onclick="showPopup('${job.title}', '${job.description}')">Apply</button>
                </div>
            `;
        }

        function renderJobs() {
            const jobListings = document.getElementById('jobListings');
            jobListings.innerHTML = jobs.map(createJobCard).join('');
        }

        function showPopup(title, description) {
            if (title === 'Tele-calling Executive') {
                document.getElementById('popupTitle').textContent = 'Sales Executive';
                document.getElementById('popupDescription').innerHTML = firstJobCustomDescription;
            } else {
                document.getElementById('popupTitle').textContent = title;
                document.getElementById('popupDescription').textContent = description;
            }
            document.getElementById('popup').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }

        renderJobs();