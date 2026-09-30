import fs from 'fs';
import path from 'path';

const valDir = 'app/src/main/res/values';
const enDir = 'app/src/main/res/values-en';

const enFiles = fs.readdirSync(enDir);
for (const f of enFiles) {
  const valContent = fs.readFileSync(path.join(valDir, f), 'utf8');
  const enContent = fs.readFileSync(path.join(enDir, f), 'utf8');
  
  const valKeys = [...valContent.matchAll(/name="([^"]+)"/g)].map(m => m[1]);
  const enKeys = [...enContent.matchAll(/name="([^"]+)"/g)].map(m => m[1]);
  
  const missingInEn = valKeys.filter(k => !enKeys.includes(k));
  const missingInVal = enKeys.filter(k => !valKeys.includes(k));
  
  if (missingInEn.length > 0) console.log(f, 'Missing in en:', missingInEn);
  if (missingInVal.length > 0) console.log(f, 'Missing in val:', missingInVal);
}
console.log('Comparison complete.');
