document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Close modal when clicking on 'x' or outside modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Predefined descriptions for each specific project with GitHub links
    const projectDescriptions = {
        "Calculator": "A simple calculator is a digital tool designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It allows users to input numerical values, select the desired operation, and quickly calculate the result.    [GitHub Link](https://github.com/ShaikArshad1234/Calculator)",
        "BI-task2": "The Dashboard is an interactive and visually organized interface designed to display key metrics and data for users at a glance. As part of this task, the dashboard was developed to show essential information like user statistics, activity summaries, and notifications in a clean and accessible layout. The design emphasized usability, with well-structured sections for easy navigation. [GitHub Link](https://github.com/ShaikArshad1234/BI-task2)",
        "Bharath_intern": "The Registration Form is a web-based interface designed for users to create an account by providing essential information. This task involved developing a user-friendly form that captures inputs such as full name, email, password, phone number, and other relevant details. The form features client-side validation to ensure data accuracy before submission, ensuring fields like email format and password strength are properly checked. Once submitted, the data is sent to the backend for processing and storage, with feedback provided to the user on the success or failure of the registration process. [GitHub Link](https://github.com/ShaikArshad1234/Bharath_intern)"
    };

    // Fetch projects from GitHub API
    fetch('https://api.github.com/users/ShaikArshad1234/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = ''; // Clear existing projects

            // Limit to 3 projects (Assuming your 3 specific projects will be in the first 3 fetched)
            const displayedProjects = data.slice(0, 3);

            displayedProjects.forEach((repo) => {
                // Create a new div for each project
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('project');
                projectDiv.setAttribute('data-title', repo.name);

                // Add content inside each project div
                projectDiv.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Description'}</p>
                `;

                // Append the project to the project-list container
                projectList.appendChild(projectDiv);

                // Add click event for each project to open modal
                projectDiv.addEventListener('click', () => {
                    modalTitle.innerText = repo.name;

                    // Set specific description based on project title
                    const description = projectDescriptions[repo.name] || 'No additional details available for this project.';
                    modalDescription.innerHTML = description; // Use innerHTML to allow links

                    modal.style.display = 'block';
                });
            });

            // If no projects are found
            if (data.length === 0) {
                projectList.innerHTML = '<p>No projects found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = '<p>Error loading projects. Please try again later.</p>';
        });
});
