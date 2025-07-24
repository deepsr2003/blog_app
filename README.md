ChronoLog
ChronoLog is a micro-blogging platform built from the ground up. It serves as a complete demonstration of a modern full-stack application, incorporating user authentication, protected routes, and full CRUD (Create, Read, Update, Delete) functionality for posts. The frontend is built as a Single Page Application (SPA) that communicates with a backend API to handle data and business logic.
Core Features
User Authentication: Secure signup and login functionality.
Session Management: Uses tokens (e.g., JWT) to manage user sessions and protect routes.
CRUD for Posts: Logged-in users can create, view, update, and delete their own posts.
Responsive Design: A mobile-first design that looks great on all devices, thanks to Tailwind CSS.
Dynamic UI: A smooth user experience with components that update in real-time without full-page reloads.
What's So Special About It?
This project stands out by blending a standard, robust application architecture with a highly polished and unique user interface.
Utility-First CSS Migration: The project was initially built with plain CSS and then strategically migrated to Tailwind CSS. This demonstrates an understanding of modern CSS architecture, maintainability, and the benefits of a utility-first approach. All base element styles (button, input) and layout classes have been converted.
Dynamic Animated Background: The most striking feature is the generative art background, built with React Three Fiber and GLSL shaders. This isn't a pre-rendered video; it's a live, interactive WebGL canvas that renders a retro, dithered wave pattern, providing a visually stunning and performant user experience that sets it apart from typical web apps.
Clean, Component-Based Architecture: The frontend code is logically structured into pages, reusable components, and purpose-built layouts (like the CenteredLayout for auth pages). State management for authentication is handled cleanly using React's Context API.

Tech Stack & Libraries

Frontend
Framework: React
Build Tool: Vite
Styling: Tailwind CSS
Routing: React Router DOM
3D/Graphics: React Three Fiber & Postprocessing
API Communication: Axios (or native fetch)

Backend
(This section is a placeholder. Update it with your backend details!)
Framework: Node.js with Express.js
Database: PostgreSQL 
Authentication: JSON Web Tokens (JWT)

How It Works (Getting Started)
To get a local copy up and running, follow these simple steps.
Prerequisites
Node.js (v18 or later)
pnpm (or npm/yarn)
A running instance of the backend server.
