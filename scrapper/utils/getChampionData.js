import loadIntoCheerio from "./loadIntoCheerio.js";

export default async function getChampionData(path) {

    const BASE_URL = process.env.BASE_URL

    if (!BASE_URL) {
        throw Error("Provide BASE_URL in .env")
    }

    const url = `${BASE_URL}${path}`

    const $ = await loadIntoCheerio(url)

    const name = $("h2.pi-item:nth-child(2) > span:nth-child(1)").text()
    const releaseDate = $("#infobox-champion-container > aside:nth-child(1) > div:nth-child(4) > div:nth-child(2) > a:nth-child(1)").text().slice(0, 10)
    const rangeType = $("div.pi-item:nth-child(10) > div:nth-child(2) > span:nth-child(1) > a:nth-child(2)").text()
    const resource = $("div[data-source='resource'] > div > span > a:nth-child(2)").text()

    const positionsDiv = $("div.pi-item:nth-child(8) > div:nth-child(2)")
    const positions = []

    positionsDiv.find("span > a:last-child").each((i, el) => {
        if (el.children[0]?.data) {
            positions.push(el.children[0].data)
        }
    })

    const $2 = await loadIntoCheerio(url.slice(0, -4))

    const pronounce = $2("div[data-source='pronoun'] > div").text().split(" ")[0]
    let gender = "Other"

    if (pronounce.includes("He/Him")) {
        gender = "Male"
    }

    if (pronounce.includes("She/Her")) {
        gender = "Female"
    }

    const speciesDiv = $2("div[data-source='species']")
    const species = []

    speciesDiv.find("div a").each((i, el) => {
        if (el.parent.name !== "s" && el.parent.name !== "small") {
            species.push(el.children[0].data)
        }
    })

    if (!species.length) {
        species.push("Unknown")
    }

    const regionsDiv = $2("div[data-source='region']")
    const regions = []

    regionsDiv.find("span > span > a").each((i, el) => {
        regions.push(el.children[0].data)
    })

    return {
        name,
        releaseDate,
        rangeType,
        resource,
        positions,
        gender,
        species,
        regions
    }
}