# Advanced To-Do App

A full-featured, modern to-do list web application built using **React**, **Redux Toolkit**, and **Vite**.  
This project showcases clean architecture, component design, state management, and testing with **Jest**.

## Features

- Add, complete, and delete tasks
- Set **due dates** and prioritize tasks (low, normal, high)
- State management using **Redux Toolkit**
- Functional React components with hooks (`useState`, `useDispatch`, `useSelector`)
- Built with **Vite** for fast dev experience
- Unit tested with **Jest** and **React Testing Library**
- Clean and responsive UI using plain HTML & CSS (no UI framework)
- Modular folder structure and scalable architecture
- Ready for Docker and GitHub Actions CI/CD (optional setup)

## Tech Stack

| Technology        | Purpose                                |
|-------------------|-----------------------------------------|
| React             | UI library                              |
| Redux Toolkit     | State management                        |
| Vite              | Build tool and dev server               |
| JavaScript (ES6)  | Language                                |
| HTML5 & CSS3      | UI structure and styling                |
| Jest              | Unit testing framework                  |
| React Testing Library | Component behavior testing         |
| Git & GitHub      | Version control and hosting             |

## Folder Structure

```
src/
│
├── components/ # Reusable components (TodoInput, TodoList, TodoItem)
├── redux/ # Redux slice and store setup
├── tests/ # Unit test files
├── App.jsx # Root app component
├── main.jsx # Entry point
├── style.css # Custom CSS styling
└── index.html # HTML container
```

## Screenshots

### Main Interface
![Home UI](https://github.com/vbx14/todo-app/blob/bd628b5e51ef2d9d4806cbc162825466e8cbcc27/screenshots/main.png)

### Server Live and Tests Passed
![Test Cases and Server Live - Success](https://github.com/vbx14/todo-app/blob/de2a0d32b576ea91616de0cb55d501c0294d5cb6/screenshots/server_live%2BtestCase_pass.png)

## Docker Support (Optional)

To run inside Docker:

```
docker build -t todo-app .
docker run -p 5173:5173 todo-app
```

## CI/CD with GitHub Actions (Optional)

This project can be extended with `.github/workflows/deploy.yml` to automate tests and deployment.
