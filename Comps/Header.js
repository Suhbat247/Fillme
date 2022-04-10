import styles from "../styles/Header.module.css"

const Login = () => {
    return ( 
<nav id={styles.navbar} className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid px-5 py-2 mx-5 ">
    <a className="navbar-brand fw-bold " href="#">Fillme</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapsecollapse" id="navbarSupportedContent">
      <ul id={styles.ulul} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Бидний тухай</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Судалгаанууд</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Урамшуулал</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Нэвтрэх 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}
 
export default Login;