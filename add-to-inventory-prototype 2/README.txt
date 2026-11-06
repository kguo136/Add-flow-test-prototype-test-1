Add to Inventory - Test Prototype (Tech360)
===========================================

Upload this whole folder to any web server (an internal Comcast server, SharePoint
site that serves HTML, intranet host, etc.) and share the URL of index.html.

- Keep the folder structure as-is; files load each other by relative path.
- Everything is bundled (React, Babel, DM Sans font) - no outside internet needed.
- It must be served over http(s). Opening index.html directly from a phone's
  Files app (file://) will not work.

Quick local test on your computer:
  cd add-to-inventory-prototype
  python3 -m http.server 8000
  then open http://localhost:8000 (or http://<your-computer-IP>:8000 on a phone
  on the same Wi-Fi network).

The "Start over" link on the last screen resets the flow for the next participant.
