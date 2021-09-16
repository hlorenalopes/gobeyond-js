import './App.css';

function App() {
  // Exercício 1:
  // criar array de objetos vendedores

  let vendedores = [];

  vendedores.push({
    nome: 'Roberto Pereira',
    salarioFixo: 1700,
    totalVendas: 5555.15648,
  });

  function addComissao() {
    for (let i = 0; i < vendedores.length; i++) {
      if (vendedores[i].comissao === undefined) {
        vendedores[i].comissao = Number(vendedores[i].totalVendas * 0.15);
        vendedores[i].totalAReceber = (
          vendedores[i].comissao + vendedores[i].totalVendas
        ).toFixed(2);
      }
    }
  }

  addComissao();

  function addFuncionarios() {
    vendedores.push(
      {
        nome: 'Maria Silva',
        salarioFixo: 1700,
        totalVendas: 5555.15648,
      },
      {
        nome: 'João Bosco',
        salarioFixo: 2000,
        totalVendas: 15000.484,
      },
      {
        nome: 'Zenilda Silva',
        salarioFixo: 1700,
        totalVendas: 10000.19,
      },
    );
  }

  addFuncionarios();
  addComissao();

  console.log(vendedores);

  return (
    <div className='App'>
      <table>
        <tr>
          <th>Nome</th>
          <th>Salário Fixo</th>
          <th>Total de Vendas</th>
          <th>Comissão</th>
          <th>Total a Receber</th>
        </tr>

        <tr>
          <td>{vendedores[0].nome}</td>
          <td>{vendedores[0].salarioFixo}</td>
          <td>{vendedores[0].totalVendas}</td>
          <td>{vendedores[0].comissao}</td>
          <td>{vendedores[0].totalAReceber}</td>
        </tr>

        <tr>
          <td>{vendedores[1].nome}</td>
          <td>{vendedores[1].salarioFixo}</td>
          <td>{vendedores[1].totalVendas}</td>
          <td>{vendedores[1].comissao}</td>
          <td>{vendedores[1].totalAReceber}</td>
        </tr>

        <tr>
          <td>{vendedores[2].nome}</td>
          <td>{vendedores[2].salarioFixo}</td>
          <td>{vendedores[2].totalVendas}</td>
          <td>{vendedores[2].comissao}</td>
          <td>{vendedores[2].totalAReceber}</td>
        </tr>

        <tr>
          <td>{vendedores[3].nome}</td>
          <td>{vendedores[3].salarioFixo}</td>
          <td>{vendedores[3].totalVendas}</td>
          <td>{vendedores[3].comissao}</td>
          <td>{vendedores[3].totalAReceber}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
