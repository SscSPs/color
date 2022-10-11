const year = new Date().getFullYear();
const Footer = () => (
  <footer className='footer'>
    <span>© {year} Copyright — </span>
    <a title='My Twitter profile' href='https://twitter.com/heyitssahilsoni'>
      heyitssahilsoni
    </a>
  </footer>
);

export default Footer;
