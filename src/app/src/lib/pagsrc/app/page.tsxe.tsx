export default function Home() {
  return (
    <main className="container">
      <section className="card" style={{textAlign:'center'}}>
        <h1 style={{fontSize:32, margin:0}}>Treci examenul cu încredere</h1>
        <p style={{color:'#6b7280', marginTop:12}}>
          Simulări reale, explicații clare și statistici care te ajută să înveți mai inteligent, nu mai mult.
        </p>
        <div style={{marginTop:16, display:'flex', gap:12, justifyContent:'center'}}>
          <a href="/exersare/romana"><button>Începe gratuit</button></a>
          <a href="/pricing"><button>Planuri</button></a>
        </div>
      </section>
    </main>
  )
}
