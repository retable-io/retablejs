<h1 align="center">
  <br>
   <a ><img src="https://1643612609-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MWwce7QQJjTB7U3RSKz%2F-MXkZJ01PPf8a54g0SGX%2F-MXkZROqw9vosEI875Xm%2Fretable-logo.png?alt=media&token=d70b85f0-38a5-44d3-80bd-52a481797b4a" alt="Markdownify" width="200"></a><br>
   API Node Client
</h1>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#development-guide">Development Guide</a> •
  <a href="#installation">Installation</a> •
  <a href="#client-usage">Client Usage</a> 
</p>


## ℹ️ Introduction

Official Node client for [Retable](https://www.retable.io/) API v1.

> **Note**   
> For the API documentation, please visit [API Document](https://docs.retable.io/retable-user-guide).

## 🚧Development Guide

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 

> For building the package, from your command line:

```bash
# Clone this repository
$ git clone https://github.com/retable-io/retablejs
# Go into the repository
$ cd retablejs
# Install dependencies
$ npm install
# Build the package
$ npm run build
```

> For testing, from your command line:
```bash
# Go into the repository
$ cd retablejs
# Run the test script
$ npm run test
```

## 💾Installation

```bash
npm install retablejs
```

## ⚡Client Usage

* Authorization
    > **Warning**  
    Your API requests are authenticated using API keys. Any request that doesn't include an API key will return an error.
    You can generate an API Key from your User page at any time on Retable.io.
    This generated API Key is constant, when it is generated it never changes or is deleted. Though you can change its usable state on the same page. 
    After obtaining your API Key (starts with RTBL-v1 prefix) you have to provide an apiKey header to every request. Otherwise, you will get an Unauthorized error.

    ```javascript
    // CommonJS Import
    const Retable = require('retable');

    // ES6 Import
    // Using TypeScript? Pass `esModuleInterop` in tsconfig.json
    import Retable from 'retable';

    const client = new Retable({
        apiKey: "RTBLv1-xxxxxxxxxxxxxxxxxxx"
    });
    ```
* Error Handling

    ```javascript
    client.getWorkspace(workspace_id: string).then((p) => {
        // Do something
    }).catch(err => {
        err.detail; // Error detail
        err.status; // Error status code
    });
    ```

* Function Detail
    ### **Workspace**
    | Function               | Description                                                                          |                                 
    | :--------------------- | :----------------------------------------------------------------------------------  |       
    | `getWorkspace`         |   [Get a specific Workspace and its Projects](#get-a-workspace)                      |
    | `getAllWorkspaces`     |   [Get user's all Workspaces](#get-all-Workspaces)                                   |
    | `createWorkspace`      |   [Create a new Workspace with a default Project](#create-a-workspace)               |
    | `deleteWorkspace`      |   [Delete a specific Workspace](#delete-a-workspace)                                 |
    | `getWorkspaceProjects` |   [Get all Projects that belong to a specific Workspace](#get-workspace's-projects)  |

    ### **Project**
    | Function               | Description                                                                               |                                 
    | :--------------------- | :---------------------------------------------------------------------------------------  |     
    | `createProject`        |   [Create a Project under the given Workspace with a default Retable](#create-a-project)  |  
    | `getProject`           |   [Get a specific Project with Retables](#get-a-project)                                  |
    | `deleteProject`        |   [Delete a specific Project](#delete-a-project)                                          |
    | `getProjectTables`     |   [Get all Retables that belong to a specific Project](#get-project's-tables)             |

    ### **Table**
    | Function               | Description                                                         |                                 
    | :--------------------- | :-----------------------------------------------------------------  |    
    | `createTable`          |   [Create a new Retable under a specific Project](#create-a-table)  |   
    | `getTable`             |   [Get information about a specific Retable](#get-a-table)          |
    | `deleteColumn`         |   [Delete column from a specific Retable](#delete-column)           |
    | `addColumn`            |   [Create a new column on the specific Retable](#add-column)        |
    | `getRow`               |   [Returns data of a specific Retable](#get-row)                    |
    | `insertRow`            |   [Insert row to a specific Retable](#insert-row)                   |
    | `updateRow`            |   [Update row of a specific Retable](#update-row)                   |
    | `deleteRow`            |   [Delete row from a specific Retable](#delete-row)                 |


    #### **Get a Workspace**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/workspace/{workspace_id}

    ```javascript
    client.getWorkspace(workspace_id: string).then(res => {
        res.data // workspace data object
    });
    ```

    #### **Get All Workspaces**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/workspace

    ```javascript
    client.getAllWorkspaces().then(res => {
      res.data // workspace data object
    });
    ```

    #### **Create a Workspace**
    > ![POST](https://img.shields.io/badge/-POST-blue)  https://api.retable.io/v1/public/workspace

    ```javascript
    client.createWorkspace(
      {
        name: 'string',
        description: 'string'
      }).then(res => {
      res.data // workspace data object
    });
    ```
    #### **Delete a Workspace**
    > ![DELETE](https://img.shields.io/badge/-DELETE-red)  https://api.retable.io/v1/public/workspace/{workspace_id}

    ```javascript
    client.deleteWorkspace(workspace_id: string).then(res => {
      res.data // workspace data object
    });
    ```

    #### **Get Workspace's Projects**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/workspace/{workspace_id}/project

    ```javascript
    client.getWorkspaceProjects(workspace_id: string).then(res => {
     res.data // workspace data object
    });
    ```

    #### **Create a Project**
    > ![POST](https://img.shields.io/badge/-POST-blue)  https://api.retable.io/v1/public/workspace/{workspace_id}/project

    ```javascript
    client.createProject(workspace_id: string,  {
        name: 'string',
        description: 'string',
        color: 'string';
      }).then(res => {
      res.data // project data object
    });
    ```

    #### **Get a Project**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/project/{project_id}

    ```javascript
    client.getProject(project_id: string).then(res => {
      res.data // project data object
    });
    ```
     #### **Delete a Project**
    > ![DELETE](https://img.shields.io/badge/-DELETE-red)  https://api.retable.io/v1/project/{project_id}

    ```javascript
    client.deleteProject(project_id: string).then(res => {
      res.data //project data object
    });
    ```

    #### **Get Project's Tables**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/project/{project_id}/retable

    ```javascript
    client.getProjectTables(project_id: string).then(res => {
      res.data // project data object
    });
    ```

    #### **Create a Table**
    > ![POST](https://img.shields.io/badge/-POST-blue)  https://api.retable.io/v1/public/project/{project_id}/retable

    ```javascript
    client.createTable(project_id: string).then(res => {
       res.data // retable data object
    });
    ```

    #### **Get a Table**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/retable/{retable_id}

    ```javascript
    client.getTable(retable_id: string).then(res => {
      res.data // retable data object
    });
    ```

    #### **Delete Column**
    > ![DELETE](https://img.shields.io/badge/-DELETE-red)  https://api.retable.io/v1/public/retable/{retable_id}/column

    ```javascript
    client.deleteColumn(retable_id: string,{
        column_ids: [
            "<column_id>",
            "<column_id>"
        ]
    }).then(res => {
      res.data // column data array
    });
    ```

    #### **Add Column**
    > ![POST](https://img.shields.io/badge/-POST-blue)  https://api.retable.io/v1/public/retable/{retable_id}/column

    ```javascript
    client.addColumn(retable_id: string,{
        columns: [
            {
                title: "hello",
                type: "text"
            }
        ]
    }).then(res => {
      res.data // column data array
    });
    ```

    #### **Get Row**
    > ![GET](https://img.shields.io/badge/-GET-green)  https://api.retable.io/v1/public/retable/{retable_id}/data

    ```javascript
    client.getRow(retable_id: string).then(res => {
       res.data // row data object
    });
    ```

    #### **Insert Row**
    > ![POST](https://img.shields.io/badge/-POST-blue)  https://api.retable.io/v1/public/retable/{retable_id}/data

    ```javascript
    client.insertRow(retable_id: string,{
        data: [
            {
                columns: [
                    {
                        column_id: "Bvt1FQhTyAPjmDx",
                        cell_value: "Isengard"
                    }
                ]
            },
            {
                columns: [
                    { 
                        column_id: "Bvt1FQhTyAPjmDx",
                        cell_value: "Rivendell"
                    }
                ]
            }
        ]
    }).then(res => {
      res.data // row data object
    });
    ```

    #### **Update Row**
    > ![PUT](https://img.shields.io/badge/-PUT-orange)  https://api.retable.io/v1/public/retable/{retable_id}/data

    ```javascript
    client.updateRow(retable_id: string,{
        rows: [
            {
                row_id: 2,
                columns: [
                    {
                        column_id: "Bvt1FtQhTyAPjmDx",
                        update_cell_value: "Mordor"
                    }
                ]
            },
        ]
    }).then(res => {
      res.data // row data array
    });
    ```

    #### **Delete Row**
    > ![DELETE](https://img.shields.io/badge/-DELETE-red)  https://api.retable.io/v1/public/retable/{retable_id}/data

    ```javascript
    client.deleteRow(retable_id: string,{
        row_ids: [
            1
        ]
    }).then(res => {
      res.data // row data object
    });
    ```