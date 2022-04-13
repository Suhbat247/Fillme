import styles from "../styles/Register.module.css" 

const Register = () => {
    return ( 
    <div id={styles.baruunCol} className="container d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
            <h1 className={`${styles.registerGarchig}`}>БҮРТГҮҮЛЭХ </h1>
        </div>
        <div className={`${styles.progress}`}>
                    <div className={`${styles.step}`}>
                        <div className={`${styles.bullet}`}>
                            <span></span>
                        </div>
                        <p>БҮРТГЭЛИЙН МЭДЭЭЛЭЛ</p>
                        <div className="checked"></div>
                    </div>
                    <div className={`${styles.step}`}>
                        <div className={`${styles.bullet}`}>
                            <span></span>
                        </div>
                        <p>ХУВИЙН МЭДЭЭЛЭЛ</p>
                        <div className="checked"></div>
                    </div>
                    <div className={`${styles.step}`}>
                        <div className={`${styles.bullet}`}>
                            <span></span>
                        </div>
                        <p>ТАНЫ МЭДЭЭЛЭЛ</p>
                        <div className="checked"></div>
                    </div>
                </div>
    </div>
     );
}
 
export default Register;
