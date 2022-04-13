import styles from "../styles/Login.module.css"
import LoginComp from "../Comps/login"
import Resister from "../Comps/register"

const Login = () => {
   
    return ( 
        <div className={`${styles.mainRow} row`}>
            <div  className={`${styles.ehniiCol} col-sm`}>

            </div>
            <div className={`${styles.hyorCol} col`}>
                {/* <LoginComp/> */}
                <Resister/>
            </div>
        </div>
     );
}
 
export default Login;