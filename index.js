document.addEventListener("DOMContentLoaded", function () {
    const material = {
        topic: [
            {
                title: "Javascript",
                "sub-topics": [
                    { name: "Vanilla JS", icon: "fa-brands fa-js-square", fname: "vanilla", path: "./topics/js/vanilla/" },
                    { name: "Vue.js", icon: "fa-brands fa-vuejs", fname: "vue", path: "./topics/js/vue/" },
                    { name: "React.js", icon: "fa-brands fa-react", fname: "react", path: "./topics/js/react/" },
                    { name: "TypeScript", icon: "fa-solid fa-code", fname: "typescript", path: "./topics/js/typescript/" }
                ]
            },
            {
                title: "Python",
                "sub-topics": [
                    { name: "Web Framework", icon: "fa-solid fa-database", fname: "pyweb", path: "./topics/py/pyweb/" },
                    { name: "Machine Learning", icon: "fa-solid fa-robot", fname: "pyml", path: "./topics/py/pyml/" }
                ]
            }
        ]
    };

    const content = {
        "topics": {
            "js": {
                "react": [
                    "1-learnreact1.md",
                    "2-learnreact2.md",
                    "3-learnreact3.md"
                ],
                "typescript": [
                    "1-learntypescript1.md",
                    "2-learntypescript2.md",
                    "3-learntypescript3.md"
                ],
                "vue": [
                    "1-learnvue1.md",
                    "2-learnvue2.md",
                    "3-learnvue3.md"
                ],
                "vanilla": [
                    "1-learnvanilla1.md",
                    "2-learnvanilla2.md",
                    "3-learnvanilla3.md"
                ]
            },
            "py": {
                "pyml": [
                    "1-learnpyml1.md",
                    "2-learnpyml2.md",
                    "3-learnpyml3.md"
                ],
                "pyweb": [
                    "1-learnpyweb1.md",
                    "2-learnpyweb2.md",
                    "3-learnpyweb3.md"
                ]
            }
        }
    };

    const sidebar = document.getElementById("sidebar");
    const contentArea = document.getElementById("contentArea");
    const markdownViewer = document.getElementById("markdownViewer");

    // Generate dynamic sidebar navigation
    material.topic.forEach((topic) => {
        const topicTitle = document.createElement("h5");
        topicTitle.textContent = topic.title;
        topicTitle.style.marginTop = "20px";
        topicTitle.style.color = "#f8f9fa";

        const subMenuDiv = document.createElement("div");
        topic["sub-topics"].forEach((subTopic) => {
            const subMenuButton = document.createElement("button");
            subMenuButton.className = "sub-menu-button";
            subMenuButton.innerHTML = `<i class="${subTopic.icon}"></i> &nbsp;&nbsp;${subTopic.name}`;
            subMenuButton.addEventListener("click", () => {
                // Clear previous buttons
                contentArea.innerHTML = '';

                // Create buttons for navigating files
                // console.log('subTopic.fname:', subTopic.fname);
                // console.log('content.topics:', content.topics);


                const files = content.topics.js[subTopic.fname] || content.topics.py[subTopic.fname];
                if (!files) {
                    console.error(`No files found for subTopic.fname: ${subTopic.fname}`);
                    return;
                }
                files.forEach((file, index) => {
                    const fileButton = document.createElement("button");
                    fileButton.className = "btn btn-primary m-2";
                    fileButton.textContent = `Lesson ${index + 1}`;
                    fileButton.addEventListener("click", () => {
                        const filePath = `${subTopic.path}${file}`;
                        markdownViewer.innerHTML = "Loading...";
                        fetch(filePath)
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(`Failed to load ${filePath}`);
                                }
                                return response.text();
                            })
                            .then((markdown) => {
                                const htmlContent = marked.parse(markdown);
                                markdownViewer.innerHTML = htmlContent;
                                Prism.highlightAll();
                            })
                            .catch((error) => {
                                console.error('Error loading the Markdown file:', error);
                                markdownViewer.innerHTML = `<p>Failed to load content for ${subTopic.name}.</p>`;
                            });
                    });
                    contentArea.appendChild(fileButton);
                });

                // Load the first file by default
                const firstFilePath = `${subTopic.path}${files[0]}`;
                console.log("#############");
                console.log(firstFilePath);
                markdownViewer.innerHTML = "Loading...";
                fetch(firstFilePath)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Failed to load ${firstFilePath}`);
                        }
                        return response.text();
                    })
                    .then((markdown) => {
                        const htmlContent = marked.parse(markdown);
                        markdownViewer.innerHTML = htmlContent;
                        Prism.highlightAll();
                    })
                    .catch((error) => {
                        console.error('Error loading the Markdown file:', error);
                        markdownViewer.innerHTML = `<p>Failed to load content for ${subTopic.name}.</p>`;
                    });

                    
            });
            subMenuDiv.appendChild(subMenuButton);
        });

        sidebar.appendChild(topicTitle);
        sidebar.appendChild(subMenuDiv);

    });

    const footerDiv = document.createElement("footer");
    footerDiv.className = "sidebar-footer text-center";
    const footerDivContent = document.createElement("p");
    footerDivContent.innerHTML = `<span>© 2024 Code Ta! All Rights Reserved.</span>`;
    footerDiv.appendChild(footerDivContent);
    sidebar.appendChild(footerDiv);

    // Toggle dark mode
    const switchButton = document.getElementById("switchButton");
    switchButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const elementsToToggle = document.querySelectorAll(
            ".navbar, .sidebar-wrapper, .content-wrapper"
        );
        elementsToToggle.forEach((el) => el.classList.toggle("dark-mode"));

        const markdownCssLink = document.getElementById("markdown-css");
        if (markdownCssLink.href.includes("github-markdown-light.css")) {
            markdownCssLink.href = "https://cdn.jsdelivr.net/npm/github-markdown-css@5.8.0/github-markdown-dark.css";
        } else {
            markdownCssLink.href = "https://cdn.jsdelivr.net/npm/github-markdown-css@5.8.0/github-markdown-light.css";
        }
    });

    // JavaScript for toggling the sidebar and submenu
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar-wrapper');
        const submenu = document.querySelector('.submenu');
        
        sidebar.classList.toggle('active'); // Toggle sidebar visibility
        submenu.classList.toggle('active'); // Toggle submenu visibility inside the hamburger menu
    });

    
});
