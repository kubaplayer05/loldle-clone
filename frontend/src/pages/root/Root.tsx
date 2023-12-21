import Button from "../../components/button/Button.tsx";
import styles from "./root.module.css"

export default function Root() {

    return (
        <main>
            <p>Choose The Game Mode:</p>
            <div className={styles.gameModesWrapper}>
                <Button isLink={true} linkPath={"/classic"} className={styles.btn}>Classic</Button>
            </div>
        </main>
    )
}
