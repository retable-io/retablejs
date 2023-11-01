import { Base } from "./base";
import { Workspace } from "./workspace";
import { Table } from "./table";
import { Project } from "./project";
import { applyMixins } from "./utils";

class Retable extends Base { }
interface Retable extends Workspace, Table, Project { }

applyMixins(Retable, [Workspace, Table, Project]);

export default Retable;