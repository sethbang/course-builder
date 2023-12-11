let openai;

async function loadOpenAI() {
    openai = await import('openai');
}

async function buildCourse(openaiClient, subject, courseLength, educationLevel) {
    if (!openai) {
        await loadOpenAI();
    }
    // Define the prompt for the OpenAI API
    const prompt = `Create a ${courseLength}-week course outline for a ${educationLevel} level on the subject of ${subject}. Include weekly topics, key objectives, and resources.`;

    try {
        // Make the API call to OpenAI's Completion endpoint
        const response = await openaiClient.createCompletion({
            model: "text-davinci-003", // You can change the model based on your needs
            prompt: prompt,
            temperature: 0.7, // Adjust temperature to control the randomness of the output
            max_tokens: 1500, // Adjust based on how long you expect the course outline to be
            stop: ["\n", "Week"], // Define stopping criteria to structure the output
        });

        // Extract the text from the response
        const courseOutline = response.data.choices[0].text.trim();

        // Return the course outline
        return {
            subject: subject,
            courseLength: courseLength,
            educationLevel: educationLevel,
            outline: courseOutline
        };
    } catch (error) {
        console.error('Error while building the course with OpenAI:', error);
        throw error;
    }
}

module.exports = {
    buildCourse
};
