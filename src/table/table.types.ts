//------------------------------- Get a Table----------------------------
export declare type Table = {
    data: table_data;
}

declare type table_data = {
    id: string;
    title: string;
    description: string;
    columns: {
        id: string;
        type: string;
        description: string;
        title: string;
        col_type: string;
    }[];
    created_by: table_by;
    updated_by: table_by | null;
    deleted_by: table_by | null;
    created_at: string;
    updated_at: string | null;
    deleted_at: string | null;
}

declare type table_by = {
    id: string;
    name: string;
    surname: string;
    email: string;
}



//---------------------------- Delete Column --------------------------
export declare type Column = {
    column_ids: string[];
}

export declare type DeleteColumn = {
    data: {
        name: string;
        type: string;
        title: string;
        col_type: string;
        created_at: string;
        hidden: boolean;
    }[];
}



//------------------------------ Add Column ----------------------------
export declare type NewColumn = {
    columns: {
        title: string;
        type: string;
    }[];
}

export declare type CreatedColumn = {
    data: {
        name: string;
        type: string;
        title: string;
        col_type: string;
        created_at: string;
        hidden: boolean;
    }[];
}



//----------------------------- Get Row -------------------------------
export declare type Row = {
    data: table_rows;
}

declare type table_rows = {
    rows: {
        id: 1,
        created_at: string;
        updated_at: string | null;
        created_by: table_by;
        updated_by: table_by | null;
        columns: {
            column_id: string;
            title: string;
            cell_value: string;
        };
    }[];
}



//--------------------------- Insert Row --------------------------------
export declare type NewRow = {
    data: insert_data
}

declare type insert_data = {
    columns: {
        column_id: string;
        cell_value: string;
    }[]
}[]



//--------------------------- Update Row --------------------------------
export declare type UpdateRow = {
    rows: {
        row_id: number;
        columns: {
            column_id: string;
            update_cell_value: string;
        }[];
    }[];
}

export declare type UpdatedRow = {
    data: string[];
}



//--------------------------- Delete Row --------------------------------
export declare type DeleteRow = {
    row_ids: number[];
}

export declare type DeletedRow = {
    data: {
        deleted_row_count: number;
    }
}