# Custom Course Builder

Custom Course Builder is a web application that generates custom course outlines based on user input. The application takes in a subject, course length in weeks, and education level (e.g., 8th grade, first year undergraduate) and utilizes the OpenAI API to create a tailored course outline.

## Features

- User-friendly web interface to input course parameters.
- Integration with OpenAI API to generate course content.
- Validation of user input to ensure accurate course generation.
- Display of custom course outline within the web application.

## Installation

Before you can run the application, make sure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
```bash
git clone https://github.com/yourusername/custom-course-builder.git
cd custom-course-builder
```

2. Install the dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

## Usage

To start the application, run the following command in your terminal:

```bash
npm start
```

This will start the server, and you can now access the application by navigating to `http://localhost:3000` in your web browser.

## Testing

To run the tests for the application, execute:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Author

Your Name <your.email@example.com>

## Acknowledgments

- OpenAI for providing the API used to generate course content.
- Node.js community for the vast array of helpful libraries.

