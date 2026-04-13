const fs = require('fs');

function removePath(file, strokeColor) {
    let raw = fs.readFileSync(file, 'utf-8');
    let regex = new RegExp('<path[^>]*?stroke="' + strokeColor + '"[^>]*?/>', 'g');
    let modified = raw.replace(regex, '');
    if (raw !== modified) {
        fs.writeFileSync(file, modified);
        console.log("Modified", file);
    } else {
        console.log("No changes", file);
    }
}

removePath('public/riddhimam.svg', '#1C4CC3');
removePath('public/YashSir.svg', '#FF8A00');
