const PDFDocument = require('pdfkit');
const fs = require('fs');

if (!fs.existsSync('build')) {
    fs.mkdirSync('build');
}

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('build/product-model.pdf'));

function addFiles(path) {
    if (fs.existsSync(path)) {
        const stat = fs.statSync(path);
        if (stat.isDirectory()) {
            const subpaths = fs.readdirSync(path);
            subpaths.forEach((subpath) => addFiles(`${path}/${subpath}`));
        }
        if (stat.isFile()) {
            const fileContent = fs.readFileSync(path, 'utf8');
            const fileContentReplaced = fileContent.replace(/(import.*\n|export.*)/g, '');
            doc.font('scripts/Microsoft-JhengHei.ttf').fontSize(16).text(String(fileContentReplaced)).text('\n');
        }
    }
}

// Add another page
doc
  .fontSize(25)
  .text('enum', { align: 'center' })
  .text('\n');
addFiles('src/enum');

doc
  .addPage()
  .fontSize(25)
  .text('interface', { align: 'center' })
  .text('\n');
addFiles('src/model');

// Finalize PDF file
doc.end();