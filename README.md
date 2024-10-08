# Portofolio-webpage
#Project Structure
The project uses vanilla JavaScript for DOM manipulation, the GitHub API to fetch repositories, and a simple modal to display additional details about the selected project.

#Key Features:
Dynamic GitHub Repository Fetching: Fetches repositories from GitHub using the GitHub API.
Predefined Descriptions: Adds detailed descriptions for specific projects, like a Calculator, Ecommerce platform, and Drag and Drop functionality.
Modal Pop-Up: Displays project details in a modal when a project is clicked.
Error Handling: Handles cases where the GitHub API fails or if no repositories are found.
#How It Works
Fetching Repositories: The script uses the GitHub API to fetch your repositories.
Displaying Projects: It displays the first 3 repositories and adds predefined descriptions for specific projects.
Modal Interaction: Clicking on a project opens a modal that shows the project’s name and description. For projects with predefined descriptions, additional details like GitHub links are displayed.
Close Modal: The modal can be closed by clicking the "X" button or by clicking outside the modal window.
#Approach
DOMContentLoaded Event: The script begins once the DOM content is fully loaded.
Modal Setup: The modal opens when a project is clicked and closes when clicking the "X" or outside the modal.
Predefined Project Descriptions: An object holds specific descriptions for the repositories, allowing the modal to display custom content for each project. For example, the Calculator project has a description including a GitHub link.
GitHub API: It fetches a list of repositories using the fetch() function and parses the JSON response.
#How to Run the Project
Open the HTML file:
Navigate to the project directory and open the index.html file in your web browser.

View the Projects:
Once the page loads, it will dynamically fetch the projects from GitHub and display them. Click on any project to open the modal and see more details.
#Error Handling
If the GitHub API fails, an error message is displayed on the page.
If no projects are found, a "No projects found" message is displayed.
#Future Improvements
Add pagination or a load-more button to display more projects.
Improve the modal design with animations.
Allow more interactivity, such as filtering projects by language or stars.
