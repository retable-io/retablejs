import { Base } from "../base";
import * as WorkspaceTypes from "./workspace.types";

const URL = 'workspace';

export class Workspace extends Base {

    getWorkspace(workspace_id: string): Promise<WorkspaceTypes.Workspace> {
        return this.invoke(`/${URL}/${workspace_id}`);
    }

    deleteWorkspace(workspace_id: string): Promise<WorkspaceTypes.DeleteWorkspace> {
        return this.invoke(`/${URL}/${workspace_id}`, {
            method: "DELETE",
        });
    }

    getAllWorkspaces(): Promise<WorkspaceTypes.AllWorkspaces> {
        return this.invoke(`/${URL}`);
    }

    createWorkspace(newWorkspace: WorkspaceTypes.NewWorkspace): Promise<WorkspaceTypes.Workspace> {
        return this.invoke(`/${URL}`, {
            method: "POST",
            body: JSON.stringify(newWorkspace),
        });
    }

    getWorkspaceProjects(workspace_id: string): Promise<WorkspaceTypes.WorkspaceProjects> {
        return this.invoke(`/${URL}/${workspace_id}/project`);
    }

    createProject(workspace_id: string, newProject: WorkspaceTypes.NewProject): Promise<WorkspaceTypes.Project> {
        return this.invoke(`/${URL}/${workspace_id}/project`, {
            method: "POST",
            body: JSON.stringify(newProject),
        });
    }

}