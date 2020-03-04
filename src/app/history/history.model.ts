export interface ITransaction {
    transaction: Results [];
}

export interface Results {
    presentation_request: object,
    updated_at: string,
    error_msg: string,
    role: string,
    initiator: string,
    thread_id: string,
    presentation_exchange_id: string,
    auto_present: boolean,
    created_at: string,
    verified: boolean,
    presentation_proposal_dict: object,
    state: string,
    presentation: Results
}