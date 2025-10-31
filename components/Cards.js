function Card({title, children, cta}){
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
      <a className="btn btn-primary" href="#download">{cta}</a>
    </div>
  )
}

export default function Cards(){
  return (
    <section className="section container" aria-labelledby="who">
      <h2 id="who" className="h1" style={{fontSize:36}}>Making a difference where it’s needed</h2>
      <div className="cards" style={{marginTop:20}}>
        <Card title="Users" cta="Discover our App">
          Use your smartphone to get free, instant visual description anytime. Connect with a volunteer, take a picture and let Vision Assist describe it, or reach out to partners for help with their products.
        </Card>
        <Card title="Volunteers" cta="Discover the Volunteer Hub">
          Our volunteers provide real‑time descriptions and assistance for people who are blind or have low vision. Join the community and make a meaningful impact.
        </Card>
        <Card title="Businesses" cta="Learn More for Business">
          Enhance accessible customer service with real‑time video support and tools that make your workplace more accessible for employees who are blind or have low vision.
        </Card>
      </div>
    </section>
  )
}
