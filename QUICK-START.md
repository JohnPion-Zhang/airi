# Quick Start

This guide will help you get the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [pnpm](https://pnpm.io/installation)
-   [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/moeru-ai/airi.git
    cd airi
    ```

2.  **Install dependencies:**

    This project uses `pnpm` for package management. To install all the necessary dependencies, run the following command from the root of the project:

    ```bash
    pnpm install
    ```

## Running the Application

To start the development server for the mobile application, run the following command:

```bash
pnpm --filter @proj-airi/stage-mobile start
```

This will start the Metro bundler and provide you with a QR code to run the app on your physical device using the Expo Go app, or you can run it in an emulator.

### Running on a specific platform

You can also run the application directly on a specific platform:

-   **Android:**

    ```bash
    pnpm --filter @proj-airi/stage-mobile android
    ```

-   **iOS:**

    ```bash
    pnpm --filter @proj-airi/stage-mobile ios
    ```

-   **Web:**

    ```bash
    pnpm --filter @proj-airi/stage-mobile web
    ```