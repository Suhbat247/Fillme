import Header from "../Comps/Header"
import styles from "../styles/surveys.module.css"
import Survey from "../Comps/survey";

const Surveys = () => {
    return ( 
        <div>
            <Header/>
            <div className={`${styles.mainContainer} container-fluid px-5 `}>
                <div className="addSurvey d-flex justify-content-end">
                    <div className="pt-3">
                        <div className={`${styles.addSurveyBtn} btn btn-sm border`}>+СУДАЛГАА НЭМЭХ </div>
                    </div>
                    <p className="p-3">Таны үлдэгдэл оноо: <span>247,000</span></p>
                </div>
                <div className="container-fluid px-5">
                    
                    <div className="row">
                        <div className={`${styles.filter} row border-end d-none d-lg-block d-print-block`}>
                        <ul>
                            <li>aaaaaaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaaaaaa</li>
                            <li>aaaaaaaaaaaaaaaa</li>
                        </ul>
                        </div>
                        <div className={`col `}>
                            <div className="container-fluid ">
                            <div className="container">
                                <div className="row row-cols-3">
                                    <Survey/>
                                    <Survey/>
                                    <Survey/>
                                    <Survey/>
                                    <Survey/>
                                    <Survey/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Surveys;
