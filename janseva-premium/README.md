# JanSeva — Premium Grievance Portal Prototype

## Run locally
1. Extract the ZIP.
2. Open the `janseva-premium` folder in VS Code.
3. Install the VS Code extension **Live Server** (or use any local static server).
4. Open `index.html` and choose **Open with Live Server**.

## Prototype features
- Premium responsive citizen portal UI
- Grievance submission with required fields and automatic reference ID
- Tracking and status history
- Service directory search
- Officer dashboard with search, filters, status updates, high-priority highlighting and CSV export
- Browser-local persistence with `localStorage`

## Important limitations
This version is a front-end demonstration. Data is stored only in the current browser and is not shared across devices. The officer dashboard is not protected by authentication, and the prototype is not connected to any government department. Do not enter sensitive or real personal information.

## Firebase next step
Before public deployment, connect Firebase Authentication and Firestore, implement server-enforced access controls and validation, and test rules using the Firebase Emulator Suite. Never place private service-account keys in front-end code.
