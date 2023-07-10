// 1) Crie um servidor HTTP que responda a uma requisição GET na rota '/info'. O
// servidor deve retornar as seguintes informações em formato JSON:
// ● O nome do sistema operacional do servidor.
// ● O total de memória disponível no servidor.
// ● O diretório de trabalho atual do servidor

const http2 = require('node:http2');
const fs = require('node:fs');
const client = http2.connect('https://localhost:8443', {
  ca: fs.readFileSync('localhost-cert.pem'),
});
client.on('error', (err) => console.error(err));

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) => { data += chunk; });
req.on('end', () => {
  console.log(`\n${data}`);
  client.close();
});
req.end(); 



// ================================###================================

// 2) Crie um programa que após receber o caminho
// “https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pd
// f”, execute as seguintes ações:
// a) Extraia o nome do diretório e exiba no console;
// b) Extraia a extensão do caminho e exiba no console;
// c) A partir do caminho relativo “/planodecurso.pdf”, obtenha o caminho
// absoluto e exiba no console.
// d) Por fim, crie um objeto contendo os segmentos que compõem o caminho
// fornecido.



// ================================###================================

// 3) Crie um programa que construa uma Url baseada no objeto da imagem
// e exiba no console.
// Dica: A Url final é a mesma encontrada em “href”.
// Ao finalizar a construção da url, através de um objeto você deverá extrair todas
// as informações dos parâmetros que a compõem e exibir no console (como na
// imagem).

const myURL = new URL('/foo', 'https://nodejs.org/api/url.html#url_new_url_input_base');

console.log(myURL)



// ================================###================================

// 4) Crie um programa utilizando o core module File System, que faça
// com que o arquivo seja renomeado.



// ================================###================================

// 5) Crie um programa utilizando o core module OS, que retorne as
// informações contidas sobre cada núcleo lógico da CPU, como
// representado na imagem:

[
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 252020,
        nice: 0,
        sys: 30340,
        idle: 1070356870,
        irq: 0,
      },
    },
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 306960,
        nice: 0,
        sys: 26980,
        idle: 1071569080,
        irq: 0,
      },
    },
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 248450,
        nice: 0,
        sys: 21750,
        idle: 1070919370,
        irq: 0,
      },
    },
    {
      model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
      speed: 2926,
      times: {
        user: 256880,
        nice: 0,
        sys: 19430,
        idle: 1070905480,
        irq: 20,
      },
    },
  ]