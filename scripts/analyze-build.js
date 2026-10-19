import { gzipSync } from "node:zlib";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const assetsDir = path.resolve("build/assets");
const files = await readdir(assetsDir);
const javascript = [];

for (const file of files.filter((name) => name.endsWith(".js"))) {
  const filePath = path.join(assetsDir, file);
  const contents = await BunlessRead(filePath);
  const metadata = await stat(filePath);
  javascript.push({
    file,
    bytes: metadata.size,
    gzipBytes: gzipSync(contents).length,
  });
}

javascript.sort((a, b) => b.bytes - a.bytes);
const total = javascript.reduce((sum, asset) => sum + asset.bytes, 0);
const totalGzip = javascript.reduce((sum, asset) => sum + asset.gzipBytes, 0);

console.log("JavaScript bundle report");
console.log(`Total: ${format(total)} raw, ${format(totalGzip)} gzip`);
for (const asset of javascript) {
  console.log(`- ${asset.file}: ${format(asset.bytes)} raw, ${format(asset.gzipBytes)} gzip`);
}

function format(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

async function BunlessRead(filePath) {
  const { readFile } = await import("node:fs/promises");
  return readFile(filePath);
}
