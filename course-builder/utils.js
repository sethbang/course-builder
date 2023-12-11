// utils.js

/**
 * Generates a unique identifier for a course.
 * @returns {string} - A unique identifier.
 */
function generateUniqueId() {
    // This is a simple implementation and should be replaced with a more robust solution in production
    return Math.random().toString(36).substr(2, 9);
}

/**
 * Formats the course data into a structured object.
 * @param {string} subject - The subject of the course.
 * @param {string} courseLength - The length of the course in weeks.
 * @param {string} educationLevel - The education level for the course.
 * @returns {object} - The formatted course object.
 */
function formatCourseData(subject, courseLength, educationLevel) {
    return {
        subject: subject.trim(),
        courseLength: parseInt(courseLength, 10),
        educationLevel: educationLevel.trim(),
        content: [] // Placeholder for course content that will be generated
    };
}

/**
 * Logs an error message to the console with a timestamp.
 * @param {string} message - The error message to log.
 */
function logError(message) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] Error: ${message}`);
}

/**
 * Logs an informational message to the console with a timestamp.
 * @param {string} message - The informational message to log.
 */
function logInfo(message) {
    const timestamp = new Date().toISOString();
    console.info(`[${timestamp}] Info: ${message}`);
}

module.exports = {
    generateUniqueId,
    formatCourseData,
    logError,
    logInfo
};
