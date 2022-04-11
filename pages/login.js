import styles from "../styles/Login.module.css"

const Login = () => {
   
    return ( 
        <div className={`${styles.mainRow} row`}>
            <div  className={`${styles.ehniiCol} col`}>

            </div>
            <div className={`${styles.hyorCol} col`}>
                <div id={styles.baruunCol} className="container d-flex justify-content-center flex-column">
                    <div className="d-flex justify-content-center">
                        <h1 className={`${styles.garchig}`}>Нэвтрэх</h1>
                    </div>
                    <input id={styles.headerinput} type="text" className="form-control" placeholder="Нэвтрэх нэр" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <input id={styles.headerinput} type="text" className="form-control" placeholder="Нууц үг" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <a className="d-flex justify-content-end" href=""><p>Нууц үгээ мартсан?</p></a>
                    <div className="d-grid gap-2 col-9 mx-auto">
                        <button id={styles.loginButtonTop}  className="btn-lg" type="button">Нэвтрэх</button>
                        <button id={styles.loginButtonBott} className="btn" type="button">Бүртгүүлэх</button>
                    </div>
                </div>
            </div>
        </div>
        //registeriig hii
     );
}
 
export default Login;