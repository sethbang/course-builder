// validation.js

/**
 * Validates the subject input.
 * @param {string} subject - The subject of the course.
 * @returns {boolean} - True if the subject is valid, false otherwise.
 */
function validateSubject(subject) {
    return typeof subject === 'string' && subject.trim() !== '';
}

/**
 * Validates the course length input.
 * @param {string} courseLength - The length of the course in weeks.
 * @returns {boolean} - True if the course length is a valid number, false otherwise.
 */
function validateCourseLength(courseLength) {
    const length = parseInt(courseLength, 10);
    return !isNaN(length) && length > 0;
}

/**
 * Validates the education level input.
 * @param {string} educationLevel - The education level for the course.
 * @returns {boolean} - True if the education level is valid, false otherwise.
 */
function validateEducationLevel(educationLevel) {
    const validLevels = [
        '8th grade', '9th grade', '10th grade', '11th grade', '12th grade',
        'first year undergraduate', 'second year undergraduate',
        'third year undergraduate', 'fourth year undergraduate',
        'graduate', 'postgraduate'
    ];
    return validLevels.includes(educationLevel.trim());
}

/**
 * Validates all inputs and returns an object with the validation status and messages.
 * @param {string} subject - The subject of the course.
 * @param {string} courseLength - The length of the course in weeks.
 * @param {string} educationLevel - The education level for the course.
 * @returns {object} - An object containing the validation status and messages.
 */
function validateInputs(subject, courseLength, educationLevel) {
    const errors = [];

    if (!validateSubject(subject)) {
        errors.push('Invalid subject.');
    }

    if (!validateCourseLength(courseLength)) {
        errors.push('Invalid course length. It must be a positive number.');
    }

    if (!validateEducationLevel(educationLevel)) {
        errors.push('Invalid education level. Please select a valid level from the list.');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

module.exports = {
    validateInputs
};
