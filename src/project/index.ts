import { Base } from "../base";
import * as ProjectTypes from "./project.types";

const URL = 'project';

export class Project extends Base {

    getProject(project_id: string): Promise<ProjectTypes.Project> {
        return this.invoke(`/${URL}/${project_id}`);
    }

    deleteProject(project_id: string): Promise<ProjectTypes.DeleteProject> {
        return this.invoke(`/${URL}/${project_id}`, {
            method: "DELETE",
        });
    }

    getProjectTables(project_id: string): Promise<ProjectTypes.ProjectTables> {
        return this.invoke(`/${URL}/${project_id}/retable`);
    }

    createTable(project_id: string): Promise<ProjectTypes.NewTable> {
        return this.invoke(`/${URL}/${project_id}/retable`, {
            method: "POST",
        });
    }

}