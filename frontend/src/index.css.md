@import "tailwindcss";
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  width: 100%;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}

input, textarea {
  width: 100%;
  padding: 0.8em;
  margin: 0.5em 0;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: white;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-card {
  border: 1px solid #444;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
  background-color: #2c2c2c;
}
.post-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #aaa;
  font-size: 0.9em;
}

.post-card-actions {
  display: flex;
  gap: 0.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #444;
  margin-bottom: 2rem;
}
