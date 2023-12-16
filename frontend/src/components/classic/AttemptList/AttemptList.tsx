import {Champion} from "../../../types/championTypes.ts";
import AttemptChampion from "../AttemptChampion/AttemptChampion.tsx";
import styles from "./attemptList.module.css"

interface AttemptListProps {
    champions: Champion[]
    randomChampion: Champion
}

export default function AttemptList({champions, randomChampion}: AttemptListProps) {

    if (!champions.length) {
        return (
            <div>
                <h3 className={styles["nothing-msg"]}>Nothing to show. Your first guess.</h3>
            </div>
        )
    }

    return (
        <div className={styles.list}>
            <div className={styles["head-list"]}>
                <h3>Champion</h3>
                <h3>Gender</h3>
                <h3>Position(s)</h3>
                <h3>Species</h3>
                <h3>Resource</h3>
                <h3>Range Type</h3>
                <h3>Regions</h3>
                <h3>Release Year</h3>
            </div>
            {Array.isArray(champions) && champions.map(champion => {
                return (
                    <AttemptChampion key={champion._id} name={champion.name} gender={champion.gender}
                                     positions={champion.positions}
                                     species={champion.species} resource={champion.resource}
                                     rangeType={champion.rangeType} regions={champion.regions}
                                     releaseYear={champion.releaseDate} randomChampion={randomChampion}/>
                )
            })}
        </div>
    )
}