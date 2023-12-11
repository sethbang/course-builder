// database.js

// This is a mock database implementation using an in-memory JavaScript object.
// In a real-world scenario, you would use a database system like MongoDB, PostgreSQL, etc.

let courses = []; // This will act as our in-memory database

/**
 * Saves a course to the "database".
 * @param {object} courseContent - The content of the course to be saved.
 * @returns {object} - The saved course with an id.
 */
function saveCourse(courseContent) {
    // Create a new course object with a unique id
    const newCourse = {
        id: courses.length + 1,
        ...courseContent
    };

    // Add the new course to the array of courses
    courses.push(newCourse);

    // In a real database, you would have error handling for failed inserts
    // and possibly other logic to handle duplicate courses, etc.

    // Return the newly saved course
    return newCourse;
}

/**
 * Retrieves all courses from the "database".
 * @returns {Array} - An array of all courses.
 */
function getAllCourses() {
    // Return a copy of the array to prevent direct modification
    return [...courses];
}

/**
 * Retrieves a course by its id from the "database".
 * @param {number} id - The id of the course to retrieve.
 * @returns {object|null} - The course with the given id, or null if not found.
 */
function getCourseById(id) {
    // Find the course with the given id
    const course = courses.find(course => course.id === id);

    // Return the course or null if not found
    return course || null;
}

// Export the functions to be used by other modules
module.exports = {
    saveCourse,
    getAllCourses,
    getCourseById
};
