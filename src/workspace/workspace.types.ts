//------------------------------- Get a Workspace----------------------------
export declare type Workspace = {
    data: workspace_data;
}

declare type workspace_data = {
    id: string;
    name: string;
    description: string;
    created_by: workspace_by;
    updated_by: workspace_by | null;
    deleted_by: workspace_by | null;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
    projects: {
        id: string;
        name: string;
        description: string;
        created_by: workspace_by;
        updated_by: workspace_by | null;
        deleted_by: workspace_by | null;
        created_at: string;
        updated_at: string | null;
        deleted_at: string | null;
        is_deleted: boolean;
    }[];
}

declare type workspace_by = {
    id: string;
    name: string;
    surname: string;
    email: string;
}



//---------------------------- Get All Workspaces---------------------
export declare type AllWorkspaces = {
    data: {
        workspaces: workspace_data[];
    };
    count: number;
}



//---------------------------- Create Workspace-----------------------
export declare type NewWorkspace = {
    name: string;
    description: string;
}



//-------------------------- Get Workspace Projects----------------------
export declare type WorkspaceProjects = {
    data: {
        projects: {
            id: string;
            name: string;
            description: string;
            workspace_id: string
            created_by: workspace_by;
            updated_by: workspace_by | null;
            deleted_by: workspace_by | null;
            created_at: string;
            updated_at: string | null;
            deleted_at: string | null;
            is_deleted: boolean;
        }[]
    };
    count: number;
}



//-------------------------- Create Workspace Project ----------------------
export declare type NewProject = {
    name: string;
    description: string;
    color: string;
}

export declare type Project = {
    id: string;
    name: string;
    description: string;
    workspace_id: string
    created_by: workspace_by;
    updated_by: workspace_by | null;
    deleted_by: workspace_by | null;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
    is_deleted: boolean;
    retables: {
        id: string;
        title: string;
        description: string;
        created_by: workspace_by;
        updated_by: workspace_by | null;
        deleted_by: workspace_by | null;
        created_at: string;
        updated_at: string | null;
        deleted_at: string | null;
        is_deleted: boolean;
        columns: {
            name: string;
            type: string;
            title: string;
            col_type: string;
        }[];
    }[];
}

//-------------------------- Delete Workspace -----------------------
export declare type DeleteWorkspace = {
    workspace_name: string;
}
