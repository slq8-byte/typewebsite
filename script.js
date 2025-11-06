document.addEventListener('DOMContentLoaded', function() {
    const containers = ['ab-container', 'sizes']; 

    containers.forEach(id => {
        const container = document.getElementById(id);

        if (container) {
            function changeFont() {
                if (container.className === "regular") {
                    container.className = 'bold';
                } else {
                    container.className = 'regular';
                }
            }

            container.addEventListener('click', changeFont);
            container.style.cursor = 'pointer'; 
        }
    });
});
