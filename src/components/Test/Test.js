const Test = () => {
  const opcoes = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
    { value: 'opcao4', label: 'Opção 4' },
    { value: 'opcao5', label: 'Opção 5' },
    { value: 'opcao6', label: 'Opção 6' },
  ];

  // const checked = [
  //   { value: 'opcao3', label: 'Opção 3' },
  //   { value: 'opcao4', label: 'Opção 4' },
  //   { value: 'opcao5', label: 'Opção 5' },
  // ];

  const checked = ['opcao3', 'opcao4', 'opcao5'];

  const handleCheck = () => {};

  return (
    <div>
      <h1>Ambiente de teste</h1>
      <button onClick={() => handleCheck()}>Marcar</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {opcoes.map((opcao) => (
          <div
            style={{
              display: 'flex',
              margin: '10px',
            }}
          >
            <input
              type="checkbox"
              checked={checked.includes(opcao.value) && true}
            />
            <label>{opcao.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
