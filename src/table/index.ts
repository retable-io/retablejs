import { Base } from "../base";
import * as TableTypes from "./table.types";

const URL = 'retable';

export class Table extends Base {

    getTable(retable_id: string): Promise<TableTypes.Table> {
        return this.invoke(`/${URL}/${retable_id}`);
    }

    deleteColumn(retable_id: string, columns: TableTypes.Column): Promise<TableTypes.DeleteColumn> {
        return this.invoke(`/${URL}/${retable_id}/column`, {
            method: "DELETE",
            body: JSON.stringify(columns),
        });
    }

    addColumn(retable_id: string, newColumn: TableTypes.NewColumn): Promise<TableTypes.CreatedColumn> {
        return this.invoke(`/${URL}/${retable_id}/column`, {
            method: "POST",
            body: JSON.stringify(newColumn),
        });
    }

    getRows(retable_id: string): Promise<TableTypes.Row> {
        return this.invoke(`/${URL}/${retable_id}/data`);
    }

    insertRow(retable_id: string, newRow: TableTypes.NewRow): Promise<TableTypes.Row> {
        return this.invoke(`/${URL}/${retable_id}/data`, {
            method: "POST",
            body: JSON.stringify(newRow),
        });
    }

    updateRow(retable_id: string, newRow: TableTypes.UpdateRow): Promise<TableTypes.UpdatedRow> {
        return this.invoke(`/${URL}/${retable_id}/data`, {
            method: "PUT",
            body: JSON.stringify(newRow),
        });
    }

    deleteRow(retable_id: string, rows: TableTypes.DeleteRow): Promise<TableTypes.DeletedRow> {
        return this.invoke(`/${URL}/${retable_id}/data`, {
            method: "DELETE",
            body: JSON.stringify(rows),
        });
    }

}