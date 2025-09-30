document.addEventListener("DOMContentLoaded", function() {
    const indexLinksDiv = document.getElementById("indexLinks");
    if (!indexLinksDiv) return;

    const links = Array.from(indexLinksDiv.querySelectorAll("a"));
    const currentPath = window.location.pathname.replace(/\/$/, "");

    links.forEach(link => {
        let text = link.textContent;

        // Remove link labeled "posts" and its following <br>
        if (text.trim().toLowerCase() === "posts" || text.trim().toLowerCase() === "bio") {
            if (link.nextSibling && link.nextSibling.nodeName === "BR") {
                link.nextSibling.remove();
            }
            link.remove();
            return;
        }

        // Replace dashes with ampersands
        text = text.replace(/-/g, " & ");

        // Replace underscores with spaces
        text = text.replace(/socialmedia/g, "Social Media");

        // Capitalize first letter of each word
        text = text.replace(/\b\w/g, char => char.toUpperCase());

        link.textContent = text;

        // Add dot to the left of the selected page in index
        const linkPath = link.getAttribute("href").replace(/\/$/, "");
        if (linkPath === currentPath) {
            link.style.position = "relative";
            const dot = document.createElement("span");
            dot.textContent = "•";
            dot.style.position = "absolute";
            dot.style.left = "-16px";
            dot.style.top = "50%";
            dot.style.transform = "translateY(-50%)";
            dot.style.color = "#E08C17";
            dot.style.fontSize = "1em";
            link.prepend(dot);
        }
    });
});