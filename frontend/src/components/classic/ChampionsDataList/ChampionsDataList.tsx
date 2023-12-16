import {useChampions} from "../../../hooks/useChampions.tsx";

interface ChampionsDataListProps {
    id: string
}

export default function ChampionsDataList({id}: ChampionsDataListProps) {

    const {champions} = useChampions()

    return (
        <datalist id={id}>
            {champions.map((champion) => {
                return (
                    <option key={champion._id} value={champion.name}/>
                )
            })}
        </datalist>
    )
}