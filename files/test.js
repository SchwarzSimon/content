// simple.js
import { execSync } from "child_process";

console.log("Hello, world!");

try {
  const output = execSync("id", { encoding: "utf-8" });
  console.log(output.trim());
} catch (err) {
  console.error("Error executing id:", err.message);
}

process.exit(1);
