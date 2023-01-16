

# Node todolist app

- This project requires a connection to a MongoDB Atlas account. You can create a free cluster at https://www.mongodb.com/cloud/atlas.

Once you have your credentials set up, create a `.env` file in the project directory and add your connection string to the `MONGO` variable:

Example `.env` file format:
```
MONGO=mongodb+srv://name:password@cluster.strings.mongodb.net/?somemore=parameters
```

With that done, you can run your own instance of the app locally by following these steps:

1. Clone this repo.
2. Run `npm install` to install dependencies from within the project directory.
3. Run `npm start`.

