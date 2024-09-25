const fs = require('fs');
const path = require('path');

// Verifica se o diretório 'build/' existe, se não, cria-o
const dir = './build';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Escreve o conteúdo no arquivo 'output.txt'
fs.writeFileSync(path.join(dir, 'output.txt'), 'Build completed successfully.');
console.log('Build completed and file created successfully!');
