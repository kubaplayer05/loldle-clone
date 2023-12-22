import Button from "../../components/button/Button.tsx";
import styles from "./root.module.css"
import {motion} from "framer-motion";

export default function Root() {


    return (
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}}>
            <p>Choose The Game Mode:</p>
            <div className={styles.gameModesWrapper}>
                <Button isLink={true} linkPath={"/classic"} className={styles.btn}>Classic</Button>
            </div>
        </motion.main>
    )
}
