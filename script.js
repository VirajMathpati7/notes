// Configuration
const username = "VirajMathpati7"; // Replace with your GitHub username
const repo = "notes"; // Replace with your repository name
const folderPath = "web"; // Path to the folder within your repo

// Function to fetch and display files from the folder
async function fetchFiles() {
  const apiUrl = `https://api.github.com/repos/VirajMathpati7/notes/contents/web`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch files: ${response.status}`);
    }

    const files = await response.json();

    // Get the container element
    const container = document.getElementById("files-container");

    // Clear the container
    container.innerHTML = "";

    // Loop through each file and display it
    files.forEach(file => {
      if (file.type === "file") {
        const fileLink = document.createElement("a");
        fileLink.href = file.download_url; // File's direct download URL
        fileLink.target = "_blank";
        fileLink.textContent = file.name; // File name as the link text
        fileLink.style.display = "block"; // Add some spacing
        container.appendChild(fileLink);
      }
    });
  } catch (error) {
    console.error("Error fetching files:", error);
  }
}

// Call the function on page load
window.onload = fetchFiles;
