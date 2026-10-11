const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of ["index.html", "style.css", "app.js"]) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}
console.log("Build completed: static site created in dist/");
