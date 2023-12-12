export interface Champion {
    _id: string,
    name: string,
    releaseDate: string,
    rangeType: string,
    resource: string,
    positions: [string],
    gender: string,
    species: [string],
    regions: [string]
}