import './Navbar.css';

function Navbar({ activeSection }) {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleScroll('home')}>Home</li>
        <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleScroll('about')}>About</li>
        <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleScroll('projects')}>Projects</li>
        <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
