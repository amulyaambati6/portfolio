import profile from "../assets/profile1.jpg";
function Home() {
  return (
    <div className="container">
      <div className="card hero">
        
        <h1>Hi, I'm Amulya 💖</h1>
        <p>Computer Science student passionate about AI and creativity.</p>
      </div>

<div className="profile-container">
  <img src={profile} alt="profile" className="profile-img" />
</div>
      <div className="card">
        <h2>🌸 About Me</h2>
        <p>
          I enjoy building applications and exploring how technology impacts
          behavior and decision-making.
        </p>
      </div>
<div className="card">
  <h2>📋 Personal Details</h2>

  <p><strong>Name:</strong> Amulya Ambati</p>
  <p><strong>Phone:</strong> 9059087603</p>
  <p><strong>College Email:</strong> se23ucse024@mahindrauniversity.edu.in</p>
  <p><strong>Personal Email:</strong> amulyaambati6@gmail.com</p>

  <h3>💻 Skills</h3>
  <p>
    Python, Java, C/C++, HTML, CSS, JavaScript, Git, VS Code,
    Canva, Meta Ads Manager, Content Creation
  </p>

  <h3>💼 Projects</h3>
  <ul>
    <li>Peer to Peer Tutoring Platform</li>
    <li>Password Strength Checker</li>
  </ul>
</div>

      <div className="card">
        <h2>📋 Personal Details</h2>
        <p>📞 9059087603</p>
        <p>📧 se23ucse024@mahindrauniversity.edu.in</p>
      </div>

      <div className="card">
        <h2>💻 Skills</h2>
        <p>Python • Java • HTML • CSS • JavaScript • Canva</p>
      </div>
    </div>
  );
}

export default Home;