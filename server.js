const http = require('http');
const fs = require('fs');
const path = require('path');
const { generateMockData } = require('./data')
const port = 3004;
const mockDataCount = 45;
const filePathGet = path.join(__dirname, 'photos.txt');
const filePathPost = path.join(__dirname, 'comments.txt')

const saveMockData = () => {
  const mockData = generateMockData(mockDataCount);
  fs.writeFileSync(filePathGet, JSON.stringify(mockData, null, 2), 'utf-8');
  fs.writeFileSync(filePathPost, JSON.stringify([], null, 2), 'utf-8');
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  console.log(`Запрос: ${req.method} ${req.url}`); 
  if (req.method === 'GET' && req.url === '/offers') {
    fs.readFile(filePathGet, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ошибка чтения файла' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/offer') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const newData = JSON.parse(body);

        fs.readFile(filePathPost, 'utf-8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Ошибка чтения файла' }));
            return;
          }

          const existingData = JSON.parse(data);
          const updatedData = [...existingData, newData];

          fs.writeFile(filePathPost, JSON.stringify(updatedData, null, 2), 'utf-8', (writeErr) => {
            if (writeErr) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Ошибка записи файла' }));
              return;
            }
            
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedData));
          });
        });
      } catch (parseErr) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ошибка обработки данных' }));
      }
    });
  } else {
    console.log(`Маршрут не найден: ${req.method} ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Маршрут не найден' }));
  }
}); 

server.listen(port, () => {
  console.log('порт', port);
  saveMockData();
}); 

