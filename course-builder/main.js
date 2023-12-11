// main.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('course-form');
    const courseOutput = document.getElementById('course-output');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the values from the form
        const subject = document.getElementById('subject').value;
        const courseLength = document.getElementById('course-length').value;
        const educationLevel = document.getElementById('education-level').value;

        // Validate the input
        if (!subject || !courseLength || !educationLevel) {
            alert('Please fill in all fields.');
            return;
        }

        // Call the function to build the course
        buildCourse(subject, courseLength, educationLevel);
    });

    async function buildCourse(subject, courseLength, educationLevel) {
        try {
            // Call the courseBuilder module to get the course content
            const courseContent = await courseBuilder.buildCourse(subject, courseLength, educationLevel);

            // Display the course content in the course output section
            courseOutput.innerHTML = courseContent;
        } catch (error) {
            console.error('Failed to build the course:', error);
            courseOutput.innerHTML = '<p>There was an error building the course. Please try again later.</p>';
        }
    }
});

// Assuming courseBuilder.buildCourse is an async function that returns a promise
// with the course content or throws an error if something goes wrong.
