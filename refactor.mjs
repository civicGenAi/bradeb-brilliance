import fs from 'fs';

const files = fs.readdirSync('src/routes').map(f => 'src/routes/' + f);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace Link
  content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*['"]@tanstack\/react-router['"];?/g, 'import { Link } from "react-router-dom";');
  content = content.replace(/import\s*\{\s*createFileRoute[^\}]*\}\s*from\s*['"]@tanstack\/react-router['"];?/g, '');
  
  // Find component name from "component: Name,"
  const match = content.match(/component:\s*([A-Za-z0-9_]+)/);
  const componentName = match ? match[1] : null;

  // Remove Route
  content = content.replace(/export\s+const\s+Route\s*=\s*createFileRoute[\s\S]*?\n\}\);/g, '');

  if (componentName) {
      const funcRegex = new RegExp(`function\\s+${componentName}\\s*\\(`);
      content = content.replace(funcRegex, `export default function ${componentName}(`);
  }

  fs.writeFileSync(file, content);
});

// Fix components
const components = [];
function findFiles(dir) {
    if(!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, {withFileTypes: true});
    for(const item of items) {
        if(item.isDirectory()) findFiles(dir + '/' + item.name);
        else if(item.name.endsWith('.tsx') || item.name.endsWith('.ts')) components.push(dir + '/' + item.name);
    }
}
findFiles('src/components');
components.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    if (content.includes('@tanstack/react-router')) {
        content = content.replace(/['"]@tanstack\/react-router['"]/g, '"react-router-dom"');
        changed = true;
    }
    if (changed) fs.writeFileSync(file, content);
});
