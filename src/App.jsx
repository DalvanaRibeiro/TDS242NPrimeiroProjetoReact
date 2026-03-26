// Tela inicial
// Usa vários componentes (aqui faremos a composição)
import Header from "./components/ui/Header"
import Card from "./components/ui/Card"

function App({onNavigation}){
  return(
    <section className="page">
      <Header
      title="Olá eu sou um cabeçalho!"
      subtitle="Exemplo simples com componentização"
      />
      {/**  Separando componentes */}
      <Header
      title="Olá eu sou um outro cabeçalho!"
      subtitle="Exemplo simples com componentização"
       />
       {/**  Separando componentes */}
       <div className="App">
        <h1> Meus Cards </h1>
        {/**  Card 1 */}
        <Card>
          <h2> Card 1 </h2>
          <p> Este é o conteúdo do primeiro card.</p>
        </Card>

        {/**  Card 2 */}
        <Card>
          <h2> Card 2 </h2>
          <p> 21:43 por hj deu né by Lucas .</p>
        </Card>
       </div>

    </section>
  )
}

export default App