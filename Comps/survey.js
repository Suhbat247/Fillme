import styles from "../styles/surveys.module.css"

const survey = () => {
    return ( 
        <div className="col mt-4 ">
            <div className={styles.survey}>
                <div className={`${styles.surveyHeader} pt-2 px-2`}>
                    <p>Цаxим хэрэглээ болон контент үзэлт</p>
                </div>
                <div className={`${styles.information}`}>
                    <div className={taniltsuulga}>
                        <div className={medeelel}>

                        </div>
                        <div className={`${styles.onoo}`}>

                        </div>
                        <div className={`${styles.hugatsa}`}></div>
                    </div>
                    <div className={`${styles.zurag}`}>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default survey;