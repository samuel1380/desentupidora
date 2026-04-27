const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/elementor-invisible/g, '');
html = html.replace(/data-lazyloaded="1"\s+src="data:image[^"]+"/g, '');
html = html.replace(/data-src="[^"]+\/([^"\/]+)"/g, 'src="images/$1"');
fs.writeFileSync('index.html', html, 'utf8');
