# React Todo List Project

This project is a simple Todo List application built with React. It demonstrates several key React concepts and practices.

## What I Learned

### 1. Component Structure
- Created multiple components (`App`, `TodoInput`, `TodoList`, `TodoCard`) to break down the application into manageable, reusable parts.
- Practiced passing props between parent and child components.

### 2. State Management
- Used the `useState` hook to manage state within functional components.
- Managed both local state (e.g., `todoValue` in `TodoInput`) and lifted state (e.g., `todos` in `App`).

### 3. Effect Hooks
- Utilized the `useEffect` hook to perform side effects in functional components.
- Used `useEffect` to load initial data from localStorage when the app mounts.

### 4. Event Handling
- Implemented event handlers for user interactions like adding, editing, and deleting todos.
- Used inline arrow functions and separate handler functions for different scenarios.

### 5. Conditional Rendering
- Applied conditional logic to render components or trigger actions (e.g., handling Enter key press in `TodoInput`).

### 6. List Rendering
- Used the `map` function to render lists of items dynamically in `TodoList`.

### 7. Prop Drilling
- Passed down handler functions through multiple levels of components.

### 8. Local Storage
- Integrated with browser's localStorage to persist todo items between sessions.

### 9. Controlled Components
- Implemented controlled input in `TodoInput` where the value is controlled by React state.

### 10. Immutable State Updates
- Practiced updating state immutably, creating new arrays instead of modifying existing ones.

### 11. Functional Programming Concepts
- Used array methods like `filter` and spread operator for state updates.

### 12. React Fragments
- Used React Fragments (`<>...</>`) in the `App` component to return multiple elements without adding extra nodes to the DOM.

## Key Takeaways

- React's component-based architecture allows for creating complex UIs from simple, reusable pieces.
- Hooks provide a powerful way to use state and other React features in functional components.
- Proper state management and data flow are crucial for building scalable React applications.
- Integrating with browser APIs (like localStorage) can enhance the user experience in web applications.

This project served as a practical application of React fundamentals and has laid a solid foundation for building more complex React applications in the future.