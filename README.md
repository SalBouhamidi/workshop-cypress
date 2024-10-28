# AlloMedia-Dashboard

AlloMedia-Dashboard is a full-stack web application built using Express and React, designed to manage restaurant registrations, client orders, and deliveries for an online food ordering platform. It supports multiple roles, each with unique functionalities.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Super Admin](#super-admin)
  - [Client](#client)
  - [Delivery Person](#delivery-person)
  - [Restaurant Manager](#restaurant-manager)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Dashboard](#dashboard)
- [Scripts](#scripts)

## Project Overview

AlloMedia-Dashboard allows for comprehensive management of restaurants and orders on a food delivery platform. The application distinguishes between roles:
- **Super Admin**: Approves restaurant registrations and manages restaurants.
- **Client**: Searches restaurants, places orders, and tracks order status.
- **Delivery Person**: Receives and confirms deliveries.
- **Restaurant Manager**: Manages menu items and orders.

## Features

### Super Admin
- Approve or reject restaurant registrations.
- Add, edit, or delete restaurant details.
- Search for restaurants by name, cuisine type, or location.

### Client
- Search for restaurants based on name, cuisine, or location.
- Browse menus, add items to the cart, and place orders.
- Track the order status in real-time.

### Delivery Person
- Receive notifications for new delivery orders.
- Confirm delivery upon order completion.

### Restaurant Manager
- Add, modify, or delete menu items.
- View and manage incoming orders, including accepting or rejecting them and updating their status.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Cloudinary, AWS SDK
- **Frontend**: React, Tailwind CSS, Redux
- **Dashboard**: React, Redux, Tailwind CSS

## Setup

### Backend

1. **Navigate to Backend Folder**: 
    ```bash
    cd backend
    ```

2. **Install Dependencies**: 
    ```bash
    npm install
    ```

3. **Environment Variables**: Create a `.env` file with required configurations:
    ```plaintext
    PORT=3000
    DATABASE_URL=your_mongodb_url
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    AWS_ACCESS_KEY_ID=your_access_key
    AWS_SECRET_ACCESS_KEY=your_secret_key
    ```

4. **Start Backend Server**:
    ```bash
    npm run dev
    ```

### Frontend

1. **Navigate to Frontend Folder**:
    ```bash
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start Frontend Development Server**:
    ```bash
    npm run dev
    ```

### Dashboard

1. **Navigate to Dashboard Folder**:
    ```bash
    cd dashboard
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start Dashboard Development Server**:
    ```bash
    npm run dev
    ```

## Scripts

### Backend Scripts
- **Development Server**: `npm run dev` (Runs using `nodemon`).
- **Production Server**: `npm start` (Runs the compiled server).
- **Testing**: `npm test` (Runs tests with Jest).

### Frontend & Dashboard Scripts
- **Development Server**: `npm run dev` (Runs using Vite).
- **Production Build**: `npm run build` (Compiles the project for production).
- **Preview Build**: `npm run preview` (Preview the production build).
- **Linting**: `npm run lint` (Runs ESLint for code quality checks).

---

This README outlines the project's purpose, feature set, and setup instructions for each part of the stack. Let me know if you need any additional sections or details!

