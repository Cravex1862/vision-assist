function Benefit({icon, title, children}){
  return (
    <div className="benefit">
      <div className="icon" aria-hidden="true">{icon}</div>
      <h4>{title}</h4>
      <p className="p" style={{margin:0}}>{children}</p>
    </div>
  )
}

export default function Benefits(){
  return (
    <section className="section container" aria-labelledby="benefits">
      <h2 id="benefits" className="h1" style={{fontSize:40}}>Real people. Real support. Real impact.</h2>
      <div className="benefits" style={{marginTop:20}}>
        <Benefit icon="📞" title="Free and unlimited calls">Call as often as you need without worrying about costs.</Benefit>
        <Benefit icon="🕘" title="Available day and night">Connect with our network of volunteers 24/7.</Benefit>
        <Benefit icon="🙈" title="100% anonymous">Volunteers only hear your voice and see what you choose to share.</Benefit>
        <Benefit icon="🌍" title="Worldwide support">We’re available in over 150 countries.</Benefit>
        <Benefit icon="📡" title="Real‑time assistance">Get instant support as soon as you need it.</Benefit>
        <Benefit icon="♿" title="Accessibility for all">We want to make everyday tasks easy for everyone.</Benefit>
      </div>
    </section>
  )
}
