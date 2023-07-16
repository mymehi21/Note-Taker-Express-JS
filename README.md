# Note-Taker-Express-JS

![Note Taker](https://example.com/note-taker-screenshot.png)

## Description

Note Taker is a web application that allows users to write and save notes. It provides a simple and intuitive interface for managing notes. The application uses an Express.js back end to handle HTTP requests and stores the note data in a JSON file.

The front end of the application has already been developed, and your task is to build the back end, connect it with the front end, and deploy the entire application to Heroku.

## Installation

To install and run the Note Taker application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/note-taker.git`
2. Navigate to the project directory: `cd note-taker`
3. Install the dependencies: `npm install`

## Usage

To start the Note Taker application, use the following command:

```bash
npm start
```

Once the server is running, open your web browser and visit `http://localhost:3000` to access the application.

## Features

The Note Taker application provides the following features:

- Create a new note by entering a title and content.
- Save notes to the server.
- View a list of saved notes.
- Click on a note to view its content.
- Delete notes.

## Endpoints

The Note Taker application exposes the following endpoints:

- `GET /api/notes` - Retrieves all saved notes.
- `POST /api/notes` - Creates a new note.
- `DELETE /api/notes/:id` - Deletes a note by its unique identifier.

## Deployment

To deploy the Note Taker application to Heroku, follow these steps:

1. Create a new Heroku app.
2. Set up Heroku as a remote for your Git repository.
3. Push your code to Heroku using `git push heroku main`.

Ensure that you have the necessary Heroku environment configurations set up, such as the Node.js buildpack and any required environment variables.

## Technologies Used

The Note Taker application utilizes the following technologies:

- Express.js
- Node.js
- JSON

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- The front end of the Note Taker application was provided as part of the challenge.
- [Express.js](https://expressjs.com)
- [Node.js](https://nodejs.org)

## Contact

For any questions or inquiries, please contact [Moustapha Merhri](mostafa_mer3e8@hotmail.com).
