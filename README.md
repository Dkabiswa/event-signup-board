# [Event Signup Board](https://event-signup-board.vercel.app/)

A simple, user-friendly event board built with Next.js 15, designed for exploring community events, expressing interest, and adding comments. visit the hosted version [here](https://event-signup-board.vercel.app/)


## Overview

**Event Signup Board** is a frontend-only project that allows users to browse a list of events, mark their interest, and leave comments. It showcases the use of the latest features in Next.js including server and client component interop, React Context for state management, and UI built with shadcn/ui and Tailwind CSS v4.

## Features

- View a list of community events (fetched from JSONPlaceholder)
- Paginated event listing
- Express interest in an event (client-only state)
- View and add comments to events (also client-only state)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4, Shadcn/ui
- **State Management:** React Context API
- **APIs:** JSONPlaceholder (mock REST API)
- **Environment:** Node.js 20.13
- **Package Manager:** npm

> Note: No backend or database is used. All data interactions are simulated using fetch requests to JSONPlaceholder APIs.

## Setup

```bash
# Clone the repo
git clone https://github.com/your-user/event-signup-board.git
cd event-signup-board

# Install dependencies
npm install

# Run the development server
npm run dev
```

Make sure you're using Node.js `v20.13.0` for similar experience.

## Architecture & Folder Structure

```plaintext
app/                  # Next.js app directory (routes, layouts, pages)
  events/             # Event listing and detail pages
components/           # Shared UI components
  ui/                 # shadcn/ui-based and custom components
context/              # React Context for event state
lib/                  # Data fetching helpers
public/               # Static assets
styles/               # Global Tailwind config
```

## Contribution Guide

We use GitHub Projects to manage tasks.

1. **Create an issue** on the repo describing your task.
2. Apply appropriate **labels** (e.g., `feature`, `bug`, `enhancement`).
3. **Attach the issue** to the GitHub Project board.
4. **Assign the task** to yourself or another contributor.
5. **Move the card** to the appropriate column on the board (e.g., `To Do`, `In Progress`).
6. Fork the repository.
7. Create a new branch for your changes.
8. Submit a Pull Request referencing the issue.

## UI & Styling Guidelines

- Use **Tailwind CSS** for all layout and visual styling.
- Use **shadcn/ui** only for importing specific components needed. Do not import entire libraries.
- Maintain a clean and minimal design throughout.

## Deployment

The **Event Signup Board** is deployed on [**Vercel**](https://vercel.com/).
Every push to the `main` branch automatically triggers a new deployment of the application via Vercel’s CI/CD pipeline. This ensures that the latest changes are live without any manual steps required.

If you'd like to test changes before merging to `main`, you can open a pull request—Vercel will create a preview deployment linked to the PR.



## Future Improvements

- ⬜ Use TanStack Query for data fetching and caching
- ⬜ Implement server-side prefetching and client hydration
- ⬜ Add tests using Jest or Vitest
- ⬜ Introduce persistence with a backend service
- ⬜ Add filtering, sorting, and tagging for events
- ⬜ Add user authentication
- ⬜ Improve accessibility and keyboard navigation



## Credits

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API to simulate fetching event data and user comments.
This projects uses free vectors form [FreePik](https://www.freepik.com/) and user avatars from [i.pravatar.cc](https://i.pravatar.cc/).



## Author

Made by [Davis kabiswa](https://dkabiswa.github.io/my-portfolio/)


