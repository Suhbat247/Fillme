import { useState } from "react";
import styles from "../styles/Register.module.css" 

const Register = () => {
    const [margin, setMargin] = useState('0')


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
                <div className={`${styles.bullet} `}>
                    <span></span>
                </div>
                <p>ТАНЫ МЭДЭЭЛЭЛ</p>
                <div className="checked"></div>        
            </div>
        </div>
        <div className={`${styles.formOuter}`}>
            <form action="#">
                <div className={`${styles.page} ${styles.slidepage}`} style={{margin: margin}}>
                    <div className="row row-cols-2 ">
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НЭВТРЭХ НЭР</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.title}`}>И-МЭЙЛ</div>
                            <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НУУЦ ҮГ</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.title}`}>И-МЭЙЛ БАТАЛГААЖУУЛАХ</div>
                            <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НУУЦ ҮГ БАТАЛГААЖУУЛАХ</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                <div className={`${styles.containNext} d-flex justify-content-center`}>
                    <div className={`${styles.nextButton} btn `} onClick={() => setMargin('-25%')}>ОРУУЛАХ</div>
                </div>
                </div>

                <div className={`${styles.page} ${styles.slidepage}`}>
                    <div className="row row-cols-2 ">
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НЭВТРЭХ НЭР</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.title}`}>И-МЭЙЛ</div>
                            <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НУУЦ ҮГ</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.title}`}>И-МЭЙЛ БАТАЛГААЖУУЛАХ</div>
                            <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НУУЦ ҮГ БАТАЛГААЖУУЛАХ</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                <div className={`${styles.containNext} d-flex justify-content-center`}>
                    <div className={`${styles.nextButton} btn `}>БУЦАХ</div>
                    <div className={`${styles.nextButton} ${styles.backButton} btn `}>ОРУУЛАХ</div>
                </div>
                </div>

                <div className={`${styles.page} ${styles.slidepage}`}>
                    <div className="row row-cols-2 ">
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НЭВТРЭХ НЭР</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.title}`}>И-МЭЙЛ</div>
                            <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НУУЦ ҮГ</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className={`${styles.title}`}>И-МЭЙЛ БАТАЛГААЖУУЛАХ</div>
                            <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div>
                                <div className={`${styles.title}`}>НУУЦ ҮГ БАТАЛГААЖУУЛАХ</div>
                                <input type="text" className={`${styles.registerInput} form-control`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                <div className={`${styles.containNext} d-flex justify-content-center`}>
                    <div className={`${styles.nextButton} btn `}>БУЦАХ</div>
                    <div className={`${styles.nextButton} ${styles.backButton} btn `}>ОРУУЛАХ</div>
                </div>
                </div>
            </form>     
        </div>       
    </div>
     );
}
 
export default Register;
