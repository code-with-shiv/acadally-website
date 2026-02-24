const fs = require('fs');
const path = require('path');

function removePrefixPath(file, prefix) {
    const fullPath = path.join(__dirname, file);
    let raw = fs.readFileSync(fullPath, 'utf-8');
    let start = raw.indexOf(prefix);
    if (start !== -1) {
        let end = raw.indexOf('/>', start) + 2;
        let modified = raw.substring(0, start) + raw.substring(end);
        // Clean up any remaining leading/trailing newlines if necessary
        modified = modified.replace(/\n\s*\n/g, '\n');
        fs.writeFileSync(fullPath, modified);
        console.log('Successfully modified', file);
    } else {
        console.log('Prefix not found in', file, '... it might already be removed.');
    }
}

removePrefixPath('public/riddhimam.svg', '<path d="M541.152');
removePrefixPath('public/YashSir.svg', '<path d="M541.152');

