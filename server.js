const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ideia Digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            padding: 20px;
          }
          .box {
            max-width: 500px;
            margin: auto;
            background: #1e293b;
            padding: 20px;
            border-radius: 10px;
          }
          input, button {
            width: 100%;
            padding: 12px;
            margin-top: 10px;
            border-radius: 6px;
            border: none;
          }
          button {
            background: #22c55e;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>📌 Gerador de Ideias Digitais</h2>
          <p>Digite um tema e receba uma ideia de produto digital.</p>
          <form method="POST">
            <input name="tema" placeholder="Ex: saúde, estudos, dinheiro" required />
            <button>Gerar ideia</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

app.post("/", (req, res) => {
  const tema = req.body.tema;

  res.send(`
    <html>
      <head>
        <title>Ideia Premium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            background:#020617;
            color:white;
            font-family:Arial;
            padding:20px;
            text-align:center;
          }
          .box {
            max-width:500px;
            margin:auto;
            background:#1e293b;
            padding:20px;
            border-radius:10px;
          }
          a {
            display:block;
            margin-top:20px;
            padding:15px;
            background:#22c55e;
            color:black;
            text-decoration:none;
            border-radius:8px;
            font-weight:bold;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h2>💡 Ideia sobre: ${tema}</h2>
          <p>
            Criar um microproduto digital focado em <b>${tema}</b>,
            resolvendo um problema específico com conteúdo simples.
          </p>

          <p><b>🔒 Conteúdo completo disponível apenas para assinantes.</b></p>

          <a href="COLE_AQUI_SEU_LINK_DO_MERCADO_PAGO" target="_blank">
            🔓 Desbloquear Ideias Premium (R$19,90/mês)
          </a>

          <br>
          <a href="/" style="background:#334155;color:white">
            ← Voltar
          </a>
        </div>
      </body>
    </html>
  `);
});

  res.send(`
    <html>
      <head>
        <title>Resultado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="background:#020617;color:white;font-family:Arial;padding:20px">
        <h2>💡 Ideia gerada sobre: ${tema}</h2>
        <p>
          Crie um micro-site que ajude pessoas interessadas em <b>${tema}</b> 
          a resolver um problema específico com conteúdo simples e direto.
        </p>
        <a href="/" style="color:#22c55e">← Gerar outra ideia</a>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando"));
