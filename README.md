# Real-Time Sentiment Analysis App

This is a simple real-time sentiment analysis application built with Flask and Hugging Face's Transformers library. The app allows users to input text and receive instant feedback on the sentiment of their input.

## Features

- Real-time sentiment analysis using a pre-trained model.
- Simple and intuitive user interface.
- Feedback displayed directly on the page.

## Project Structure

real-time/
├── app.py                # Main Flask application file
├── venv/                 # Virtual environment directory
├── static/               # Directory for static files
│   ├── css/              # Folder for stylesheets
│   │   └── styles.css    # Custom styles for the application
│   └── js/               # Folder for JavaScript files
│       └── scripts.js     # JavaScript code for handling user interactions and API requests
└── templates/            # Directory for HTML templates
    └── index.html        # Main HTML file for user input and displaying results


### File Descriptions

- **app.py**: The main Flask application file that handles routing and sentiment analysis.
- **venv/**: Virtual environment directory containing dependencies.
- **static/**: Contains static files such as CSS and JavaScript.
  - **css/**: Folder for stylesheets.
    - **styles.css**: Custom styles for the application.
  - **js/**: Folder for JavaScript files.
    - **scripts.js**: JavaScript code for handling user interactions and API requests.
- **templates/**: Contains HTML templates for rendering the front end.
  - **index.html**: The main HTML file for user input and displaying results.

## Requirements

- Python 3.6 or higher
- Flask
- flask-cors
- transformers
- langdetect
