import { interactiveCalendarGridTemplate } from "@microsoft/fast-foundation"

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

export interface SoarAction {
    id: number,
    action: string,
    _pretty_app: string
    app: number,
    description: string,
    identifier: string,
    output: SoarActionOutput[],
    parameters: SoarActionParameters 
}

export interface SoarActionOutput {
    data_path: string
    data_type: string
}

export interface SoarActionParameters {
    [key: string]: SoarActionParameter
}

export interface SoarActionParameter {
    order: number,
    primary: boolean,
    contains: string[],
    value_list: string[],
    required: boolean,
    data_type: string,
    description: string
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
    id: number,
    action: string,
    cancelled: string,
    close_time: string,
    comment: string,
    container: number,
    creator: number,
    due_time: string,
    exec_delay_secs: number,
    ip_address: string,
    message: string,
    name: string
    owner: number
    playbook: number | null
    playbook_run: number | null
    status: string
    type: string
    update_time: string
    version: number
    node_guid: string
    _pretty_update_time: string
    _pretty_playbook: string
    _pretty_owner: string
    _pretty_due_time: string,
    _pretty_creator: string,
    _pretty_create_time: string,
    _pretty_close_time: string,
    _pretty_container: string
}

export interface SoarPlaybookRun {
    id: number,
    cancelled: string,
    _pretty_container: string
    container: number,
    ip_address: string,
    log_level: number,
    message: string,
    _pretty_owner: string,
    owner: number,
    _pretty_playbook:string,
    playbook: number,
    start_time: string
    _pretty_start_time: string,
    status: string,
    test_mode: boolean,
    _pretty_update_time: string
    update_time: string
    last_artifact: number
    misc: {
        scope: string
        scope_artifact_ids: string
    },
    version: string,
    _pretty_effective_user: string
    effective_user: string
    _pretty_scm_name: string
}

export interface SoarAppRun {
    id: number
    action: string
    _pretty_action_run: string
    action_run: number
    _pretty_asset: string
    _pretty_app: string
    app: number
    app_name: string
    app_version: string
    _pretty_container: string
    container: number,
    _pretty_end_time: string
    end_time: string
    exception_occured: boolean
    message: string
    playbook_run: number | null
    _pretty_start_time: string
    start_time: string
    status: string
    version: number
    _pretty_effective_user: string
    effective_user: number
    node_guid: string
    _pretty_automation_broker: string
    automation_broker: number | null
    _pretty_app_directory: string
    _pretty_has_widget: boolean
}