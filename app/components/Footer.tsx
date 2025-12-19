export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              Creative Tim
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              Blog
            </a>
          </li>
        </ul>
        <div className="copyright">
          © 2018 made with <i className="tim-icons icon-heart-2" /> by
          <a href="javascript:void(0)" target="_blank">
            Creative Tim
          </a>{' '}
          for a better web.
        </div>
      </div>
    </footer>
  );
}
