import styles from '@/styles/Loading.module.css'

export default function Loading()
{
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h4>POP ART</h4>
                <span>Carregando...</span>
                {/* <div className={styles["ball"] + " " + styles["blue"]}>*/}
                <div className={styles.circle_line}>
                    <div className={styles.circle_red}></div>
                    <div className={styles.circle_blue}></div>
                    <div className={styles.circle_green}></div>
                    <div className={styles.circle_yellow}></div>
                </div>
            </div>
        </div>
    );
    
}