
const {useEffect,useState} = React;

const skills = {
  Backend: [["Java / Spring Boot",96],["Microservices / REST APIs",94],["Kafka / Event Processing",88],["Spring Security / JPA",88]],
  Frontend: [["React",91],["JavaScript / TypeScript",87],["HTML / CSS",90],["UI / API Integration",89]],
  Database: [["PostgreSQL / MySQL",90],["MongoDB",84],["Redis",86],["SQL / Query Optimization",88]],
  "Cloud & DevOps": [["Azure / GCP / AWS",84],["Docker",88],["GitHub Actions / CI-CD",90],["JFrog / Maven / Gradle",89]],
  AI: [["LLM APIs / Prompt Engineering",82],["GenAI Integrations",80],["Automation with Python",91],["AI-assisted Engineering",88]]
};

const projects = {
  payflow: {
    title:"PayFlow Nexus", kicker:"FINTECH · EVENT-DRIVEN",
    desc:"A production-style payment orchestration and risk platform designed around resilient transaction workflows.",
    stack:["Java","Spring Boot","Kafka","React","PostgreSQL","Redis","Docker"],
    flow:["API Gateway","Payment Service","Kafka","Risk Engine","Ledger"],
    points:["Idempotent payment initiation","Transaction state machine","Retry + failure handling","Audit-ready event trail"],
    color:"cyan"
  },
  caresync: {
    title:"CareSync Hub", kicker:"HEALTHCARE · WORKFLOW",
    desc:"A smart healthcare workflow platform for appointments, eligibility, documents and event-driven notifications.",
    stack:["Java","Spring Boot","React","Node.js","MySQL","Kafka","Docker"],
    flow:["Patient Portal","Workflow API","Eligibility","Events","Notifications"],
    points:["Appointment coordination","Insurance eligibility workflow","Document lifecycle","Event-driven reminders"],
    color:"violet"
  }
};

function Icon({name,size=17}) {
  useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); },[name]);
  return <i data-lucide={name} style={{width:size,height:size}}></i>
}

function App(){
  const [dark,setDark]=useState(true);
  const [mobile,setMobile]=useState(false);
  const [tab,setTab]=useState("Backend");
  const [modal,setModal]=useState(null);
  const [toast,setToast]=useState("");
  const [photo,setPhoto]=useState(null);

  useEffect(()=>{
    document.body.className=dark?"":"light";
    const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[dark]);

  useEffect(()=>{ if(window.lucide) window.lucide.createIcons(); });

  const notify=(msg)=>{setToast(msg);setTimeout(()=>setToast(""),2200)}
  const copyEmail=async()=>{try{await navigator.clipboard.writeText("pragya.sharma3.2025@gmail.com");notify("Email copied ✓")}catch{notify("Email: pragya.sharma3.2025@gmail.com")}}

  return <div className="app">
    <nav className={"nav "+(mobile?"mobile-open":"")}>
      <a className="brand" href="#home"><span className="brand-mark">PS</span> Pragya Sharma</a>
      <div className="nav-links">
        {["about","experience","skills","projects","process","contact"].map(x=><a key={x} href={"#"+x} onClick={()=>setMobile(false)}>{x[0].toUpperCase()+x.slice(1)}</a>)}
      </div>
      <div className="nav-actions">
        <button className="icon-btn" onClick={()=>setDark(!dark)} aria-label="Toggle theme"><Icon name={dark?"sun":"moon"}/></button>
        <button className="menu-btn" onClick={()=>setMobile(!mobile)}><Icon name={mobile?"x":"menu"}/></button>
      </div>
    </nav>

    <main>
      <section id="home" className="container hero">
        <div className="reveal">
          <div className="eyebrow">Software Engineer · India</div>
          <h1>Building <span className="gradient">reliable systems</span> that solve real problems.</h1>
          <p className="lead">3+ years across Healthcare & FinTech, building backend services and polished web experiences with <b>Java, Spring Boot, React and Node.js</b> — backed by SQL, Kafka, Cloud and automation.</p>
          <div className="tags">{["Java","Spring Boot","React","Node.js","MySQL","PostgreSQL","Kafka","Cloud","GenAI"].map(t=><span className="tag" key={t}>{t}</span>)}</div>
          <div className="cta-row">
            <a className="btn primary" href="#projects">Explore My Work <Icon name="arrow-right"/></a>
            <a className="btn" href="./assets/Pragya-Sharma-Resume.pdf" download>Download Resume <Icon name="download"/></a>
            <button className="btn" onClick={copyEmail}><Icon name="copy"/> Copy Email</button>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/" target="_blank"><Icon name="linkedin"/></a>
            <a href="https://github.com/pragya0106" target="_blank"><Icon name="github"/></a>
            <a href="https://leetcode.com/" target="_blank"><Icon name="code-2"/></a>
          </div>
        </div>
        <div className="photo-wrap reveal">
          <div className="photo-orbit"></div>
          <div className="photo-card">
            {photo ? <img src={photo} alt="Pragya Sharma"/> :
            <div className="photo-placeholder">
              <div><div className="avatar">PS</div><small>Replace with your professional photo<br/>by adding <b>assets/pragya.jpg</b></small></div>
            </div>}
          </div>
          <div className="float-stat stat-a"><strong>3+</strong>Years Experience</div>
          <div className="float-stat stat-b"><strong>25+</strong>Services & Jobs</div>
        </div>
      </section>

      <section id="about" className="container section reveal">
        <div className="section-head"><div><div className="eyebrow">01 · About</div><h2>Backend depth.<br/>Frontend range.</h2></div><p>I enjoy working at the point where business-critical workflows meet clean engineering: APIs, event processing, UI flows, data, testing and production troubleshooting.</p></div>
        <div className="panel numbers">
          {[["3+","Years Experience"],["25+","Microservices / Services"],["120+","Scheduled Jobs"],["3","Cloud Platforms"]].map(([n,l])=><div className="number" key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </section>

      <section id="experience" className="container section reveal">
        <div className="section-head"><div><div className="eyebrow">02 · Experience</div><h2>Where I've built things.</h2></div><p>Healthcare, BFSI and payments — with hands-on delivery across backend, automation, cloud and web application work.</p></div>
        <div className="panel experience">
          <div><div className="eyebrow">GlobalLogic</div><p style={{color:"var(--muted)",marginTop:8}}>2023 — Present</p></div>
          <div className="timeline">
            <div className="exp-item"><span className="dot"></span><div className="exp-meta">Healthcare · ECP / PMS / POS</div><h3>Software Engineer</h3><p>Built and supported scheduling, patient communication, insurance, billing, POS and document-management workflows; integrated third-party systems and handled production issues.</p></div>
            <div className="exp-item"><span className="dot"></span><div className="exp-meta">FinTech · CCOM</div><h3>Automation & Cloud Migration</h3><p>Worked with microservices, JFrog artifacts, batch/cron workflows and Python automation across multiple server instances, supporting large scheduled-job estates.</p></div>
            <div className="exp-item"><span className="dot"></span><div className="exp-meta">FinTech · FortisPay</div><h3>Payments Engineering</h3><p>Contributing to web applications, payment-flow handling, validations, APIs and coordinated UI/API enhancements with CI/CD and automated tests.</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="container section reveal">
        <div className="section-head"><div><div className="eyebrow">03 · Toolkit</div><h2>One stack isn't enough.</h2></div><p>Switch categories to see the range. The goal is not a list of buzzwords — it's being able to move across layers when the product needs it.</p></div>
        <div className="skill-tabs">{Object.keys(skills).map(x=><button className={"tab "+(tab===x?"active":"")} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>
        <div className="panel skills-grid">{skills[tab].map(([name,val])=><div className="skill-card" key={name}><div className="skill-top"><b>{name}</b><span>{val}%</span></div><div className="bar"><i style={{width:val+"%"}}/></div></div>)}</div>
      </section>

      <section id="projects" className="container section reveal">
        <div className="section-head"><div><div className="eyebrow">04 · Featured Work</div><h2>Two systems, built to feel real.</h2></div><p>Self-directed portfolio systems designed to demonstrate architecture, implementation thinking and UI/API integration. They are not client/company work.</p></div>
        <div className="projects">
          {Object.entries(projects).map(([key,p],i)=><article className="panel project" key={key}>
            <div className="project-num">0{i+1} · {p.kicker}</div><h3>{p.title}</h3><p>{p.desc}</p>
            <div className="flow">{p.flow.map((x,j)=><React.Fragment key={x}><span>{x}</span>{j<p.flow.length-1&&<b className="arrow">→</b>}</React.Fragment>)}</div>
            <div className="tags">{p.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div>
            <div className="project-footer"><button className="case-btn" onClick={()=>setModal(p)}>View Architecture <Icon name="arrow-up-right"/></button><button className="case-btn" onClick={()=>notify("GitHub link will be connected when the project repo is pushed.")}>GitHub <Icon name="github"/></button></div>
          </article>)}
        </div>
      </section>

      <section id="process" className="container section reveal">
        <div className="section-head"><div><div className="eyebrow">05 · Engineering Process</div><h2>From idea to production.</h2></div></div>
        <div className="panel process">
          {[["search","Discover","Requirements & scope"],["layers","Architect","APIs, data & boundaries"],["pen-tool","Design","Flows & contracts"],["code-2","Develop","Clean, scalable code"],["shield-check","Test","Unit, integration & security"],["rocket","Deploy","CI/CD, cloud & monitoring"]].map(([ic,t,d])=><div className="process-item" key={t}><div className="process-icon"><Icon name={ic}/></div><h4>{t}</h4><p>{d}</p></div>)}
        </div>
      </section>

      <section id="contact" className="container section reveal">
        <div className="contact">
          <div className="panel contact-card">
            <div className="eyebrow">06 · Contact</div><h2>Let's build something useful.</h2><p>Open to strong software engineering opportunities where backend depth and full-stack range can make an impact.</p>
            <div className="contact-list">
              <a href="mailto:pragya.sharma3.2025@gmail.com"><Icon name="mail"/> pragya.sharma3.2025@gmail.com</a>
              <a href="https://www.linkedin.com/" target="_blank"><Icon name="linkedin"/> LinkedIn</a>
              <a href="https://github.com/pragya0106" target="_blank"><Icon name="github"/> GitHub</a>
            </div>
          </div>
          <div className="panel contact-card">
            <form onSubmit={(e)=>{e.preventDefault();notify("Message form is ready — connect it to Formspree/EmailJS when you want live submissions.")}}>
              <input className="field" placeholder="Your name" required/><input className="field" placeholder="Your email" type="email" required/><input className="field" placeholder="Subject" style={{gridColumn:"1/-1"}}/><textarea className="field" placeholder="Tell me what you're building..." required/><button className="btn primary" type="submit" style={{justifySelf:"start"}}>Send Message <Icon name="send"/></button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer className="container"><span>© 2026 Pragya Sharma · Software Engineer</span><span>Java · React · Node.js · Cloud · AI</span></footer>

    {modal && <div className="modal-backdrop" onClick={()=>setModal(null)}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <button className="icon-btn close" onClick={()=>setModal(null)}><Icon name="x"/></button>
        <div className="eyebrow">{modal.kicker}</div><h2 style={{fontSize:44,margin:"10px 0"}}>{modal.title}</h2><p className="lead" style={{fontSize:15}}>{modal.desc}</p>
        <div className="arch">{modal.flow.map((x,i)=><React.Fragment key={x}><div>{x}</div>{i<modal.flow.length-1&&<b>→</b>}</React.Fragment>)}</div>
        <h3 style={{fontSize:20,marginBottom:14}}>What the system demonstrates</h3>
        <div className="tags">{modal.points.map(x=><span className="tag" key={x}>{x}</span>)}</div>
        <div className="tags">{modal.stack.map(x=><span className="tag" key={x}>#{x}</span>)}</div>
        <div className="cta-row"><button className="btn primary" onClick={()=>notify("Interactive demo page can be connected here next.")}>Open Live Demo <Icon name="external-link"/></button><button className="btn" onClick={()=>notify("Push the repo first, then paste its GitHub URL here.")}>GitHub <Icon name="github"/></button></div>
      </div>
    </div>}

    {toast && <div className="toast">{toast}</div>}
  </div>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
