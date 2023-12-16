import Input from "../../components/input/Input.tsx";
import {useRandomChampion} from "../../hooks/useRandomChampion.tsx";
import AttemptList from "../../components/classic/AttemptList/AttemptList.tsx";
import {ChangeEvent} from "react";
import Button from "../../components/button/Button.tsx";
import {useChampionForm} from "../../hooks/useChampionForm.tsx";
import ChampionsDataList from "../../components/classic/ChampionsDataList/ChampionsDataList.tsx";
import styles from "./classic.module.css"
import {useWinModal} from "../../hooks/useWinModal.tsx";
import WinModal from "../../components/classic/WinModal/WinModal.tsx";

export default function Classic() {

    const randomChampion = useRandomChampion()
    const {champions, submitHandler, value, setValue} = useChampionForm()
    const {showWinModal, setShowWinModal} = useWinModal(randomChampion, champions)

    return (
        <main>
            <form onSubmit={submitHandler} className={styles.form}>
                <Input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value);
                }} placeholder="Enter champion name..." list={"champions"} className={styles.input}/>
                <ChampionsDataList id={"champions"}/>
                <Button isLink={false} className={styles.btn}>Send</Button>
            </form>
            {randomChampion && <AttemptList champions={champions} randomChampion={randomChampion}/>}
            {showWinModal && randomChampion &&
                <WinModal randomChampion={randomChampion} setShowModal={setShowWinModal}/>}
        </main>
    )
}