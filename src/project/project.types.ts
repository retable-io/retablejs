//------------------------------- Get a Project----------------------------
export declare type Project = {
    data: project_data;
}

declare type project_data = {
    id: string;
    name: string;
    description: string;
    workspace_id: string
    created_by: project_by;
    updated_by: project_by | null;
    deleted_by: project_by | null;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
    is_deleted: boolean;
    retables: {
        id: string;
        title: string;
        description: string;
        created_by: project_by;
        updated_by: project_by | null;
        deleted_by: project_by | null;
        created_at: string;
        updated_at: string | null;
        deleted_at: string | null;
    }[];
}

declare type project_by = {
    id: string;
    name: string;
    surname: string;
    email: string;
}



//-------------------------- Get Projects Retables -----------------------
export declare type ProjectTables = {
    data: project_retables;
    count: number;
}

declare type project_retables = {
    retables: {
        id: string;
        title: string;
        description: string;
        columns: {
            name: string;
            type: string;
            title: string;
            col_type: string;
        }[];
        project_id: string;
        workspace_id: string;
        created_by: project_by;
        updated_by: project_by | null;
        deleted_by: project_by | null;
        created_at: string;
        updated_at: string | null;
        deleted_at: string | null;
    }[]
}



//---------------------------- Create Table-----------------------
export declare type NewTable = {
    data: created_table;
}

declare type created_table = {
    id: string;
    title: string;
    description: string;
    columns: {
        column_id: string;
        type: string;
        title: string;
    }[];
    created_by: project_by;
    updated_by: project_by | null;
    deleted_by: project_by | null;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
}

//-------------------------- Delete Project -----------------------
export declare type DeleteProject = {
    project_name: string;
}
