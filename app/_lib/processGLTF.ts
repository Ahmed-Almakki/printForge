// create gltf-pipeline.d.ts in your project root
// @ts-ignore
import { processGltf } from 'gltf-pipeline';
import fs from 'fs';
import path from 'path';


export async function processModel(inputBuffer: Buffer, filename: string) {
  // Processing options
  const options = {
    dracoOptions: { compressionLevel: 7 }, // Draco compression
    separate: true,                        // separate buffers/textures
    center: true,                          // center at origin
    scale: 6                               // scale so max dimension = 6
  };

  // Run gltf-pipeline
  const results = await processGltf(inputBuffer, options);

  // Ensure output folder exists
  const outputDir = path.join(process.cwd(), 'public', 'threeDmodel');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, filename);

  // Write the processed GLB
  fs.writeFileSync(outputPath, results.glb);

  // Return public URL
  return `/threeDmodel/${filename}`;
}
