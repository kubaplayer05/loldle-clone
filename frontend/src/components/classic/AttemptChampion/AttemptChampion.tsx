import {Champion} from "../../../types/championTypes.ts";
import style from "./attemptChampion.module.css"
import {getBoxStyle} from "../../../lib/getBoxStyle.ts";

interface AttemptChampionProps {
    name: string,
    gender: string,
    positions: [string],
    species: [string],
    resource: string,
    rangeType: string,
    regions: [string]
    releaseYear: string,
    randomChampion: Champion
}

export default function AttemptChampion({
                                            name,
                                            gender,
                                            positions,
                                            species,
                                            resource,
                                            rangeType,
                                            regions,
                                            releaseYear,
                                            randomChampion
                                        }: AttemptChampionProps) {


    const formattedYear = releaseYear.split("-")[0]
    const formattedYearForRandom = randomChampion.releaseDate.split("-")[0]

    return (
        <div className={style.wrapper}>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${randomChampion.name === name ? style.perfect : style.wrong}`}>
                    <p>{name}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${randomChampion.gender === gender ? style.perfect : style.wrong}`}>
                    <p>{gender}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${getBoxStyle(randomChampion.positions, positions)}`}>
                    <p>{positions.map(position => {
                        return `${position} `
                    })}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${getBoxStyle(randomChampion.species, species)}`}>
                    <p>{species.map(specie => {
                        return `${specie} `
                    })}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${randomChampion.resource === resource ? style.perfect : style.wrong}`}>
                    <p>{resource}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${randomChampion.rangeType === rangeType ? style.perfect : style.wrong}`}>
                    <p>{rangeType}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div className={`${style.box} ${getBoxStyle(randomChampion.regions, regions)}`}>
                    <p>{regions.map(region => {
                        return `${region} `
                    })}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>

                <div
                    className={`${style.box} ${formattedYearForRandom === formattedYear ? style.perfect : style.wrong}`}>
                    <p>{formattedYear}</p>
                </div>
            </div>
        </div>
    )
}