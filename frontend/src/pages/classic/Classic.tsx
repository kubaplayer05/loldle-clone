import Input from "../../components/input/Input.tsx";
import AttemptList from "../../components/classic/AttemptList/AttemptList.tsx";
import {ChangeEvent} from "react";
import Button from "../../components/button/Button.tsx";
import ChampionsDataList from "../../components/classic/ChampionsDataList/ChampionsDataList.tsx";
import styles from "./classic.module.css"
import {useWinModal} from "../../hooks/useWinModal.tsx";
import WinModal from "../../components/classic/WinModal/WinModal.tsx";
import {useClassicGame} from "../../hooks/useClassicGame.tsx";

export default function Classic() {

    const {champions, randomChampion, value, submitHandler, refreshGame, setValue} = useClassicGame()
    const {showWinModal, setShowWinModal} = useWinModal(randomChampion, champions)

    const isOver = champions[0] ? randomChampion?.name === champions[0].name : false

    return (
        <main>
            <form onSubmit={submitHandler} className={styles.form}>
                <Input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value);
                }} disabled={isOver}
                       placeholder="Enter champion name..."
                       list={"champions"} className={styles.input}/>
                <ChampionsDataList id={"champions"}/>
                <Button isLink={false} className={styles.btn}>Send</Button>
            </form>
            {randomChampion && <AttemptList/>}
            {isOver &&
                <Button onClick={refreshGame} isLink={false}>Reset</Button>}
            {showWinModal && randomChampion &&
                <WinModal randomChampion={randomChampion} setShowModal={setShowWinModal}/>}
        </main>
    )
}