export interface SoarVersion {
    version: string
}

export interface SoarCollection<T> {
    count: number,
    num_pages: number,
    data: T[]
}

export interface SoarApp {
    id: number
    appid: string,
    app_version: string,
    publisher: string
	_pretty_asset_count: number
    directory: string
}

export interface SoarAsset {
}

export interface SoarActionRun {

}

export interface SoarPlaybook {
}

