document.addEventListener("DOMContentLoaded", function() {
    const indexLinksDiv = document.getElementById("indexLinks");
    if (!indexLinksDiv) return;

    const links = Array.from(indexLinksDiv.querySelectorAll("a"));
    links.forEach(link => {
        let text = link.textContent;

        // Remove link labeled "posts" and its following <br>
        if (text.trim().toLowerCase() === "posts" || text.trim().toLowerCase() === "bio") {
            // Remove the next sibling <br> if it exists
            if (link.nextSibling && link.nextSibling.nodeName === "BR") {
                link.nextSibling.remove();
            }
            link.remove();
            return;
        }

        // Replace dashes with ampersands
        text = text.replace(/-/g, " & ");

        // Replace underscores with spaces
        text = text.replace(/_/g, " ");

        // Capitalize first letter of each word
        text = text.replace(/\b\w/g, char => char.toUpperCase());

        link.textContent = text;
    });
});