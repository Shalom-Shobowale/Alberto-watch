
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach(item => item.classList.remove("text-blue-600", "border-blue-600"));
            contents.forEach(content => content.classList.add("hidden"));

            // Add active classes to the clicked tab and show its content
            tab.classList.add("text-blue-600", "border-blue-600");
            document.getElementById(tab.getAttribute("data-target")).classList.remove("hidden");
        });
    });
});
