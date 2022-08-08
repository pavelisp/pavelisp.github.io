import './Footer.scss';

function Footer() {
  return ( 
    <footer className="footer">
      Copyright &copy; Pavel Ispravnikov {new Date().getFullYear()}
    </footer>
   );
}

export default Footer;