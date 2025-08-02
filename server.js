const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');

const app = express();
const upload = multer();
const port = process.env.PORT || 3000;

app.post('/parse-pdf', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');
  try {
    const data = await pdfParse(req.file.buffer);
    res.send({ text: data.text });
  } catch (err) {
    res.status(500).send('Error parsing PDF.');
  }
});

app.listen(port, () => {
  console.log(`PDF parser running at http://localhost:${port}`);
});
