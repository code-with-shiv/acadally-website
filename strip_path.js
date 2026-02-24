import fs from 'fs';

['public/riddhimam.svg', 'public/YashSir.svg'].forEach(file => {
    let raw = fs.readFileSync(file, 'utf-8');
    let start = raw.indexOf('<path d="M541.152');
    if (start !== -1) {
        let end = raw.indexOf('/>', start);
        if (end !== -1) {
            // also remove any newline after
            let after = end + 2;
            while(raw[after] === '\r' || raw[after] === '\n') {
                after++;
            }
            let modified = raw.substring(0, start) + raw.substring(after);
            if (raw !== modified) {
                fs.writeFileSync(file, modified);
                console.log("Modified", file);
            } else {
                console.log("No changes for", file);
            }
        }
    } else {
        console.log("Pattern not found in", file);
    }
});
