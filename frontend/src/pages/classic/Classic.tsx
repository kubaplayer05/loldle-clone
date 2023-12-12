import Input from "../../components/input/Input.tsx";
import {useRandomChampion} from "../../hooks/useRandomChampion.tsx";
import AttemptChampion from "../../components/classic/AttemptChampion/AttemptChampion.tsx";

export default function Classic() {

    const {name, gender, positions, species, resource, rangeType, regions, releaseDate} = useRandomChampion()

    return (
        <main>
            <Input placeholder="Enter champion name..."/>
            <AttemptChampion name={name} gender={gender} positions={positions} species={species} resource={resource}
                             rangeType={rangeType} regions={regions}
                             releaseYear={releaseDate.split("-")[0]}/>
        </main>
    )
}