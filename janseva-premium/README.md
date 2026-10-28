# JanSeva — Premium Grievance Portal Prototype

## Run locally
1. Install dependencies from the repository root with `npm install`.
2. Set `MONGODB_URI` in `janseva-premium/.env`. Optionally set `MONGODB_DB` (defaults to `janseva`).
3. Start the server from the repository root with `npm start`.
4. Open `http://localhost:3000`.

## Prototype features
- Premium responsive citizen portal UI
- Grievance submission with required fields and automatic reference ID
- Tracking and status history
- Service directory search
- Officer dashboard with search, filters, status updates, high-priority highlighting and CSV export
- Browser-local persistence with `localStorage`

## Important limitations
This is a prototype and is not connected to any government department. The officer dashboard and grievance API are not protected by authentication. Do not enter sensitive or real personal information, especially after deploying publicly.

## Deploy to Render
1. In the Render dashboard, create a **Blueprint** and connect this GitHub repository.
2. Render will read `render.yaml` and prompt for `MONGODB_URI`. Enter the MongoDB connection string as a secret in Render; never commit it to the repository. `MONGODB_DB` defaults to `janseva`.
3. Ensure your MongoDB Atlas network access settings allow connections from Render, then deploy the Blueprint.

The deployed service is public. Add authentication and server-side access controls before using it with real grievance data.
