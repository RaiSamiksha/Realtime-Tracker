# Realtime-Tracker

## Overview
The Real-Time Tracker is a web application that provides real-time tracking of a user's location. This project is built using **Node.js**, **Express**, **EJS**, **Leaflet**, and **Socket.io**. The application tracks the location of users across multiple tabs and displays markers on a map for each active session.

## Features
- **Real-Time Location Tracking**: Users can see their location on a map in real-time.
- **Multiple Markers**: If the application is opened in multiple tabs, a unique marker is displayed for each session.
- **Live Updates**: Location updates are streamed live using Socket.io.
- **Responsive Map Display**: The map adjusts its view based on the user’s current location.

## Technology Stack
- **Node.js**: Backend server and real-time communication.
- **Express.js**: Web framework for Node.js.
- **EJS**: Template engine for generating HTML.
- **Leaflet.js**: JavaScript library for interactive maps.
- **Socket.io**: Library for real-time web applications.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/realtime-tracker.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd realtime-tracker
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a `.env` file** in the root directory and set the PORT variable:
   ```env
   PORT=4000
   ```

5. **Run the server**:
   ```bash
   npm start
   ```
6. **Open the application**:
   Open your browser and navigate to `http://localhost:4000`.

## Usage
- Open the application in your browser.
- Grant location permissions if prompted.
- Open the same URL in another tab to see multiple markers.
- The map will update with your current location and display a marker for each active session.
