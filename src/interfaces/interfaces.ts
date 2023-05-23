export interface Employee {
    id: number,
    first_name: string,
    last_name: string,
    email?: string,
    username: string,
    profile_pic?: string,
    gender?: string,
    street_address: string,
    city?: string,
    manager_id?: number,
    bio?:string,
    isSelected?: boolean
    isEditMode: boolean
}