# 📚 Book Surf

### Overview

The Personalized Book Recommendation Web Application is a full-stack web application that allows users to get book recommendations based on their preferences, including genres, authors, and ratings. The application consists of a React frontend and a Node.js/Express backend with MongoDB.

## Application Link

[https://book-surf.onrender.com/](https://book-surf.onrender.com/)

## Features

- **Recommendations**: Users receive book suggestions based on genres, authors.
- **RESTful API**: Endpoints for handling book data and recommendations.
- **MongoDB Database**: Stores book details and optionally user preferences.
- **Genre DropDown**: Search books based on genre.
- **Author Search**: Search Books based on Authors.
- **Responsive Design**: The layout adapts seamlessly to different screen sizes.
- **Animations**: Soothing Animations for Application using Javascript.

## Setup Instructions

### 1. Clone the repository

```shell
git clone https://github.com/sanketjaswal/book_recommeder.git
cd Book-recommendation
```

### 2. Install dependencies

```shell
cd backend
npm install

cd frontend
npm install
```

### 3. Set Up Environment Variables

```shell
MONGO_URI=your_mongo_connection_string
PORT=5000
```

### 4. Start the application

```shell
cd backend
npm run dev


cd frontend
npm start
```

This will run the app in development mode in http://localhost:5000.


## Dependencies

Below is a list of dependencies used in the project:

- **Frontend** : React.js
- **Backend** : Node.js, Express.js, MongoDB
- **Database** : MongoDB
- **Hosting** : Render

## Code Structure

```shell
book_recommender/
│-- backend/
│   ├── src/
│   │   ├── models/
│   │   │  
│   │   ├── controllers/
│   │   │   
│   │   ├── routes/
│   │   │  
│   │   ├── server.js
│
│-- frontend/
│   ├── src/
│   │   ├── components/
│   │   │ 
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   ├── App.js
│
│-- README.md
```


# Conclusion

A personalized book recommendation app that enhances reading discovery with tailored suggestions.

Happy Reading !!
