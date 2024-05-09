import './Navbar.css';

function Navbar({ activeSection }) {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log('Active Section:', activeSection);

  return (
    <nav>
      <ul>
        <li className={activeSection === 'home' ? 'active' : 'white'} onClick={() => handleScroll('home')}>Home</li>
        <li className={activeSection === 'about' ? 'active' : 'white'} onClick={() => handleScroll('about')}>About</li>
        <li className={activeSection === 'projects' ? 'active' : 'white'} onClick={() => handleScroll('projects')}>Projects</li>
        <li className={activeSection === 'contact' ? 'active' : 'white'} onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
