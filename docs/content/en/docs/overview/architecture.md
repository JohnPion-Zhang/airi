# Project Architecture

This document outlines the architecture of Project AIRI. The following diagram provides a high-level overview of the various components and how they interact.

## Architecture Diagram

```mermaid
%%{ init: { 'flowchart': { 'curve': 'catmullRom' } } }%%

flowchart TD
  Core("Core")
  Unspeech("unspeech")
  DBDriver("@proj-airi/drizzle-duckdb-wasm")
  MemoryDriver("[WIP] Memory Alaya")
  DB1("@proj-airi/duckdb-wasm")
  SVRT("@proj-airi/server-runtime")
  Memory("Memory")
  STT("STT")
  Stage("Stage")
  StageUI("@proj-airi/stage-ui")
  UI("@proj-airi/ui")

  subgraph AIRI
    DB1 --> DBDriver --> MemoryDriver --> Memory --> Core
    UI --> StageUI --> Stage --> Core
    Core --> STT
    Core --> SVRT
  end

  subgraph UI_Components
    UI --> StageUI
    UITransitions("@proj-airi/ui-transitions") --> StageUI
    UILoadingScreens("@proj-airi/ui-loading-screens") --> StageUI
    FontCJK("@proj-airi/font-cjkfonts-allseto") --> StageUI
    FontXiaolai("@proj-airi/font-xiaolai") --> StageUI
  end

  subgraph Apps
    Stage --> StageWeb("@proj-airi/stage-web")
    Stage --> StageTamagotchi("@proj-airi/stage-tamagotchi")
    Core --> RealtimeAudio("@proj-airi/realtime-audio")
    Core --> PromptEngineering("@proj-airi/playground-prompt-engineering")
  end

  subgraph Server_Components
    Core --> ServerSDK("@proj-airi/server-sdk")
    ServerShared("@proj-airi/server-shared") --> SVRT
    ServerShared --> ServerSDK
  end

  STT -->|Speaking| Unspeech
  SVRT -->|Playing Factorio| F_AGENT
  SVRT -->|Playing Minecraft| MC_AGENT

  subgraph Factorio_Agent
    F_AGENT("Factorio Agent")
    F_API("Factorio RCON API")
    factorio-server("factorio-server")
    F_MOD1("autorio")

    F_AGENT --> F_API -.-> factorio-server
    F_MOD1 -.-> factorio-server
  end

  subgraph Minecraft_Agent
    MC_AGENT("Minecraft Agent")
    Mineflayer("Mineflayer")
    minecraft-server("minecraft-server")

    MC_AGENT --> Mineflayer -.-> minecraft-server
  end

  XSAI("xsAI") --> Core
  XSAI --> F_AGENT
  XSAI --> MC_AGENT

  Core --> TauriMCP("@proj-airi/tauri-plugin-mcp")
  Memory_PGVector("@proj-airi/memory-pgvector") --> Memory

  style Core fill:#f9d4d4,stroke:#333,stroke-width:1px
  style AIRI fill:#fcf7f7,stroke:#333,stroke-width:1px
  style UI fill:#d4f9d4,stroke:#333,stroke-width:1px
  style Stage fill:#d4f9d4,stroke:#333,stroke-width:1px
  style UI_Components fill:#d4f9d4,stroke:#333,stroke-width:1px
  style Server_Components fill:#d4e6f9,stroke:#333,stroke-width:1px
  style Apps fill:#d4d4f9,stroke:#333,stroke-width:1px
  style Factorio_Agent fill:#f9d4f2,stroke:#333,stroke-width:1px
  style Minecraft_Agent fill:#f9d4f2,stroke:#333,stroke-width:1px

  style DBDriver fill:#f9f9d4,stroke:#333,stroke-width:1px
  style MemoryDriver fill:#f9f9d4,stroke:#333,stroke-width:1px
  style DB1 fill:#f9f9d4,stroke:#333,stroke-width:1px
  style Memory fill:#f9f9d4,stroke:#333,stroke-width:1px
  style Memory_PGVector fill:#f9f9d4,stroke:#333,stroke-width:1px
```

## Explanation

This architecture is designed around a central AI brain, called **`AIRI`**, which can interact with the world through different applications and services.

### Core Components (The `AIRI` subgraph)

*   **`Core`**: This is the heart of the application. It orchestrates everything, connecting the user interface, memory, and other services.
*   **`Stage`**: This represents the frontend of the main application. It's built from smaller UI components (`@proj-airi/ui` and `@proj-airi/stage-ui`).
*   **`Memory`**: This is the AI's brain. From the file system, I can see it uses `DuckDB` (a database that can run in the browser) to store information. The diagram shows a `[WIP] Memory Alaya`, which is likely a more advanced memory system under development.
*   **`STT` (Speech-to-Text)**: This component handles voice recognition, converting spoken audio into text for the AI to understand.
*   **`SVRT` (Server Runtime)**: This is the backend logic that connects to external services, like game agents.

### Applications (The `Apps` subgraph)

These are the main ways you interact with AIRI:

*   **`@proj-airi/stage-web`**: This is the web application that runs in your browser. Its source code can be found in `apps/stage-web`.
*   **`@proj-airi/stage-tamagotchi`**: This is the desktop application. It is a [Tauri](https://tauri.app/) application, which means it uses web technologies (like Vue.js) for its interface but can interact more deeply with the operating system, powered by a Rust backend. Its code is in `apps/stage-tamagotchi`.
*   **Other Apps**: The diagram also shows `realtime-audio` and `playground-prompt-engineering`, which are likely smaller, focused applications for development and demonstration purposes.

### Game Agents

A key feature of this project is its ability to play games. The diagram shows two agents:

*   **`Factorio Agent`**: This module allows the AI to play Factorio. It uses a `Factorio RCON API` to communicate with a Factorio server.
*   **`Minecraft Agent`**: This module allows the AI to play Minecraft, using the `Mineflayer` library to control a character in a Minecraft server.

### Key Libraries & Services

*   **`xsAI`**: This is a crucial library that provides an interface to connect the `Core` brain to many different Large Language Models (LLMs) like ChatGPT, Claude, and others.
*   **`@proj-airi/tauri-plugin-mcp`**: This is one of the Rust-based Tauri plugins found in the `crates/` directory. It's used by the `StageTamagotchi` desktop app to enhance its capabilities.
