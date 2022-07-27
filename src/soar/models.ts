export interface SoarVersion {
    version: string
}

export interface SoarCollection<T> {
    count: number,
    num_pages: number,
    data: T[]
}

export interface SoarAppContent {
    success: boolean,
    app_id: number,
    is_draft: boolean
    data: SoarFile[]
}
export interface SoarFile {
    name: string,
    content: string,
    type: string,
    pretty_name: string,
    metadata: string
}

export interface SoarPrettyAction {
    description: string,
    name: string
}

export interface SoarApp {
    id: number,
    name: string
    appid: string,
    app_version: string,
    product_name: string,
    product_vendor: string,
    publisher: string
    _pretty_asset_count: number
    directory: string,
    draft_mode: boolean,
    immutable: boolean,
    _pretty_actions: SoarPrettyAction[]
}

export interface SoarAsset {
    id: number,
    tags: string[],
    configuration: {
        [key: string]: string | boolean
    },
    description: string,
    disabled: boolean,
    name: string,
    concurrency_limit: number,
    _pretty_app: string,
    app: number,
    primary_voting: number,
    secondary_voting: number,
    token: unknown,
    type: string,
    version: number
}

export interface SoarActionRun {

}

export interface SoarPlaybook {
}

