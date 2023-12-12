interface AttemptChampionProps {
    name: string,
    gender: string,
    positions: [string],
    species: [string],
    resource: string,
    rangeType: string,
    regions: [string]
    releaseYear: string
}

import style from "./attemptChampion.module.css"

export default function AttemptChampion({
                                            name,
                                            gender,
                                            positions,
                                            species,
                                            resource,
                                            rangeType,
                                            regions,
                                            releaseYear
                                        }: AttemptChampionProps) {

    return (
        <div className={style.wrapper}>
            <div className={style.boxWrapper}>
                <h3>Champion</h3>
                <div className={style.box}>
                    <p>{name}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Gender</h3>
                <div className={style.box}>
                    <p>{gender}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Position(s)</h3>
                <div className={style.box}>
                    <p>{positions.map(position => {
                        return `${position} `
                    })}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Species</h3>
                <div className={style.box}>
                    <p>{species.map(specie => {
                        return `${specie} `
                    })}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Resource</h3>
                <div className={style.box}>
                    <p>{resource}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Range Type</h3>
                <div className={style.box}>
                    <p>{rangeType}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Regions</h3>
                <div className={style.box}>
                    <p>{regions.map(region => {
                        return `${region} `
                    })}</p>
                </div>
            </div>
            <div className={style.boxWrapper}>
                <h3>Release Year</h3>
                <div className={style.box}>
                    <p>{releaseYear}</p>
                </div>
            </div>
        </div>
    )
}