import express, {Express, query, Request, Response} from "express";
const server: Express = express();

server.use(express.json());

server.get("/calculadora", (req: Request, res: Response) => {
  const operacao = req.query.operacao;
  const valorA = req.query.valorA;
  const valorB = req.query.valorB;
  const numA = Number(valorA);
  const numB = Number(valorB);
  let resultado;
  switch (operacao) {
    case "somar":
      resultado = numA + numB;
      break;
    case "subtrair":
      resultado = numA - numB;
      break;
    case "multiplicar":
      resultado = numA * numB;
      break;
    case "dividir":
      resultado = numA / numB;
      break;
    default:
      res.send("Operação Invalida");
      break;
  }
  res.send(resultado?.toString());
});

server.listen(8081, () => {
  console.log("Servidor OK");
});
