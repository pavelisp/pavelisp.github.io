import './Footer.scss';

function Footer() {
  return ( 
    <footer className="footer">
      Copyright &copy; Pavel Ispravnikov {new Date().getFullYear()} | v 0.1.0
    </footer>
   );
}

export default Footer;