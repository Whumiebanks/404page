const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <ul>
          <li>Github</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
        <div>
         &copy; Whumiebanks {year}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
