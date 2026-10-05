# Smart Escape – Interactive Evacuation Route Simulator

> Educational simulation only. Not a certified real-world evacuation planning tool.

## 1. Identity
- **Full name:** Aditta Sarker
- **Registration number:** 241-15-068


## 2. Live link


## 3. Running instructions
Requirements: Node.js (LTS) only for the optional npm scripts. The app itself is plain HTML/CSS/JS with no build step and no dependencies.

```bash
npm start      # serves the app at http://localhost:8000
npm test       # runs routing and validation tests (expects "All tests passed")
```
Without npm: open `index.html` in Chrome, or run `python3 -m http.server 8000`.

Usage: click **Load sample** or **Import building.json**, choose a start (map click or dropdown), then use **Toggle hazards** to block/unblock rooms, junctions and corridors or close/reopen exits. **Reset hazards** restores the file's original `initial_state`.

## 4. Implemented features
- Import and validate JSON (2–60 nodes, 1–150 edges, unique case-sensitive IDs, valid references, positive integer costs, no self-loops or repeated pairs, initial-state IDs must exist and match their category). Malformed files are rejected with a clear message.
- Map drawn at the supplied coordinates with readable labels, distinct node types (room, junction, exit) and visible corridor costs.
- Select an unblocked room or junction as start; the lowest-cost route is highlighted with node sequence, exit and total cost.
- Block/unblock rooms, junctions and corridors; close/reopen exits; each state is visually distinct.
- Immediate recalculation after every start or hazard change, no re-import. Reset restores the original `initial_state`.
- Failure states: **No route available** and **Starting location blocked**.
- Bangla and English modes for all principal labels, buttons, statuses, errors and instructions.
- Routing rules: Dijkstra over summed edge costs; blocked nodes (and incident edges), blocked edges and closed exits are excluded, including as intermediate nodes; ties choose the smallest exit ID, then the lexicographically smallest node-ID sequence. No hard-coded routes; handles disconnected graphs.
- Subtle animations for selecting, toggling hazards and route updates (respects reduced-motion).

**Bonus:** keyboard operation (Tab/Enter), ARIA labels and live status, dark mode, remembered language, automated tests (`test.js`).

## 5. Known issues
- No PNG export, saved progress, or alternative-route display.
- Very long node labels may overlap on dense maps.

## 6. AI tools and most useful prompt
- **AI tool:** Claude (Anthropic).
- **Most useful prompt:** "Read the Smart Escape problem statement carefully and build a frontend-only app that fulfils every requirement: validation, Dijkstra routing with the exact tie-break rules, hazard toggling, Bangla/English, reset, and tests for the five sample checks."

## 7. Repository contents
`index.html`, `style.css`, `core.js` (validation and routing), `app.js` (UI), `building.json` (sample), `test.js`, `screenshots/` (baseline route and rerouting after C2 is blocked), `LICENSE` (MIT).
