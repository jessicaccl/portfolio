import './App.css'

function App() {
  return (
    <main className="placeholder">
      <p className="placeholder__name">Jessica Lima</p>
      <h1>Transformo problemas de negócio em produto que funciona.</h1>
      <p className="placeholder__lead">
        PO técnica: escrevo os critérios, testo, homologo com quem usa e monitoro depois da
        entrega.
      </p>
      <p className="placeholder__status">
        <span aria-hidden="true" className="placeholder__dot" />
        Portfólio em construção. Acompanhe a evolução no{' '}
        <a href="https://github.com/jessicaccl/portfolio" target="_blank" rel="noreferrer">
          GitHub<span className="visually-hidden"> (abre em nova aba)</span>
        </a>
        .
      </p>
    </main>
  )
}

export default App
