// test.js

const { buildCourse } = require('./courseBuilder');
const { validateInputs } = require('./validation');
const { saveCourse, getAllCourses, getCourseById } = require('./database');
const { logError, logInfo } = require('./utils');

// Mock OpenAI client
const openaiClient = {
    createCompletion: ({ model, prompt, temperature, max_tokens, stop }) => {
        return new Promise((resolve) => {
            // Mock response from OpenAI API
            const mockResponse = {
                data: {
                    choices: [
                        {
                            text: `Week 1: Introduction to ${prompt}\nWeek 2: Advanced topics in ${prompt}`
                        }
                    ]
                }
            };
            resolve(mockResponse);
        });
    }
};

// Test cases
async function runTests() {
    logInfo('Starting tests...');

    // Test validation
    logInfo('Testing input validation...');
    const invalidInputs = validateInputs('', '0', 'kindergarten');
    if (!invalidInputs.isValid && invalidInputs.errors.length === 3) {
        logInfo('Input validation test passed.');
    } else {
        logError('Input validation test failed.');
    }

    const validInputs = validateInputs('Mathematics', '10', '8th grade');
    if (validInputs.isValid) {
        logInfo('Input validation with valid data test passed.');
    } else {
        logError('Input validation with valid data test failed.');
    }

    // Test course building
    logInfo('Testing course building...');
    try {
        const course = await buildCourse(openaiClient, 'Mathematics', '10', '8th grade');
        if (course.subject === 'Mathematics' && course.courseLength === '10' && course.educationLevel === '8th grade') {
            logInfo('Course building test passed.');
        } else {
            logError('Course building test failed.');
        }
    } catch (error) {
        logError(`Course building test failed with error: ${error.message}`);
    }

    // Test database operations
    logInfo('Testing database operations...');
    const newCourse = saveCourse({ subject: 'Science', courseLength: 12, educationLevel: '9th grade', outline: 'Course outline' });
    if (newCourse && newCourse.id) {
        logInfo('Save course test passed.');
    } else {
        logError('Save course test failed.');
    }

    const allCourses = getAllCourses();
    if (Array.isArray(allCourses) && allCourses.length > 0) {
        logInfo('Get all courses test passed.');
    } else {
        logError('Get all courses test failed.');
    }

    const courseById = getCourseById(newCourse.id);
    if (courseById && courseById.id === newCourse.id) {
        logInfo('Get course by id test passed.');
    } else {
        logError('Get course by id test failed.');
    }

    logInfo('Tests completed.');
}

// Run the tests
runTests();
