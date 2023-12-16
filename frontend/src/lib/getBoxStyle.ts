import styles from "../components/classic/AttemptChampion/attemptChampion.module.css"

export function getBoxStyle(randomChampArr: string[], myArr: string[]) {

    let style = styles.wrong
    let count = 0

    myArr.forEach((el) => {
        randomChampArr.includes(el) ? count++ : ""
    })

    if (count > 0) {
        style = styles.good
    }

    if (count === randomChampArr.length && randomChampArr.length === myArr.length) {
        style = styles.perfect
    }

    return style
}