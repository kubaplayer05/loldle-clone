import loadIntoCheerio from "./loadIntoCheerio.js";

export default async function getChampionsLink() {

    const BASE_URL = process.env.BASE_URL
    const path = "/wiki/List_of_champions"

    const url = `${BASE_URL}${path}`

    if (!BASE_URL) {
        throw Error("Provide BASE_URL in .env")
    }

    const $ = await loadIntoCheerio(url)

    const selector = ".article-table"
    const table = $(`${selector} > tbody`)

    const champions_url = []

    table.find("tr > td:first-child a > img").each((i, el) => {
        champions_url.push(el.parent.attribs.href)
    })

    return champions_url
}