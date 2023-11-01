const { assert } = require('chai');
const Retable = require('../dist/index');

const errorMocks = require('./mocks/errors');
const projectMocks = require('./mocks/project');
const workspaceMocks = require('./mocks/workspace');
const tableMocks = require('./mocks/table');

const RETABLE_API_KEY = 'RETABLE_TEST_KEY_123';
const RETABLE_MOCK_API_URL = 'https://f6e01297-6f38-45b2-a9f6-9df7a3e2abfd.mock.pstmn.io'

let retableClient = {};

beforeEach(() => {
  retableClient = new Retable.default({
    apiKey: RETABLE_API_KEY,
    apiUrl: RETABLE_MOCK_API_URL
  });
});

describe('Retable API', () => {

  describe('client', () => {

    it('returns error with no API token', () => {
      assert.throws(() => {
        retableClient = new Retable.default();
      }, /Please provide a Retable API key/);
    });

    it('rejects promise on API error', () => {

      return retableClient.getAllWorkspaces().catch(err => {
        assert.instanceOf(err, Error);
        assert.hasAllKeys(err, errorMocks.AUTH_ERROR_RES);
      });
    });

  });


  describe('workspace', () => {
    it('creates a workspace', () => {

      return retableClient.createWorkspace({
        name: 'TEST',
        description: 'NODE CLIENT TEST'
      }).then(response => {
        assert.deepEqual(response, workspaceMocks.NEW_WORKSPACE_RES);
      });
    });

    it('gets all workspaces', () => {

      return retableClient.getAllWorkspaces().then(response => {
        assert.deepEqual(response, workspaceMocks.ALL_WORKSPACE_RES);
      });
    });

    it('gets a workspace', () => {

      return retableClient.getWorkspace(workspaceMocks.ALL_WORKSPACE_RES.data.workspaces[0].id).then(response => {
        assert.deepEqual(response, workspaceMocks.WORKSPACE_RES);
      });
    });

    it('gets workspace projects', () => {

      return retableClient.getWorkspaceProjects(workspaceMocks.ALL_WORKSPACE_RES.data.workspaces[0].id).then(response => {
        assert.deepEqual(response, workspaceMocks.WORKSPACE_PROJECTS_RES);
      });
    });

    it('deletes a workspace', () => {

      return retableClient.deleteWorkspace(workspaceMocks.NEW_WORKSPACE_RES.data.id).then(response => {
        assert.deepEqual(response, workspaceMocks.DELETED_WORKSPACE_RES);
      });
    });

  });


  describe('project', () => {

    it('creates a project', () => {

      return retableClient.createProject(workspaceMocks.WORKSPACE_RES.data.id, {
        name: 'TEST',
        description: 'NODE CLIENT TEST',
        color: '#898cff'
      }).then(response => {
        assert.deepEqual(response, projectMocks.NEW_PROJECT_RES);
      });
    });

    it('get a project', () => {

      return retableClient.getProject(projectMocks.PROJECT_RES.data.id).then(response => {
        assert.deepEqual(response, projectMocks.PROJECT_RES);
      });
    });

    it('get project tables', () => {

      return retableClient.getProjectTables(projectMocks.PROJECT_RES.data.id).then(response => {
        assert.deepEqual(response, projectMocks.PROJECT_TABLES_RES);
      });
    });


    it('deletes a project', () => {

      return retableClient.deleteProject(projectMocks.NEW_PROJECT_RES.data.id).then(response => {
        assert.deepEqual(response, projectMocks.DELETED_PROJECT_RES);
      });
    });

  });


  describe('table', () => {

    it('creates a table', () => {

      return retableClient.createTable(projectMocks.PROJECT_RES.data.id).then(response => {
        assert.deepEqual(response, tableMocks.NEW_TABLE_RES);
      });
    });

    it('get a table', () => {

      return retableClient.getTable(tableMocks.NEW_TABLE_RES.data.id).then(response => {
        assert.deepEqual(response, tableMocks.TABLE_RES);
      });
    });

    it('add column', () => {

      return retableClient.addColumn(tableMocks.NEW_TABLE_RES.data.id, {
        columns: [
          {
            title: "1",
            type: "1"
          }
        ]
      }).then(response => {
        assert.deepEqual(response, tableMocks.ADD_COLUMN_RES);
      });
    });


    it('delete column', () => {

      return retableClient.deleteColumn(tableMocks.NEW_TABLE_RES.data.id, {
        column_ids: [
          1,
        ]
      }).then(response => {
        assert.deepEqual(response, tableMocks.DELETE_COLUMN_RES);
      });
    });

    it('get rows data', () => {

      return retableClient.getRows(tableMocks.NEW_TABLE_RES.data.id).then(response => {
        assert.deepEqual(response, tableMocks.GET_ROWS_RES);
      });
    });

    it('insert row', () => {

      return retableClient.insertRow(tableMocks.NEW_TABLE_RES.data.id, {
        data: [
          {
            columns: [
              {
                column_id: 1,
                cell_value: "1"
              }
            ]
          },
        ]
      }).then(response => {
        assert.deepEqual(response, tableMocks.INSERT_ROWS_RES);
      });
    });

    it('update row', () => {

      return retableClient.updateRow(tableMocks.NEW_TABLE_RES.data.id, {
        rows: [
          {
            row_id: 1,
            columns: [
              {
                column_id: 1,
                update_cell_value: "1"
              }
            ]
          },
        ]
      }).then(response => {
        assert.deepEqual(response, tableMocks.UPDATE_ROWS_RES);
      });
    });

    it('delete row', () => {

      return retableClient.deleteRow(tableMocks.NEW_TABLE_RES.data.id, {
        row_ids: [
          1
        ]
      }).then(response => {
        assert.deepEqual(response, tableMocks.DELETE_ROWS_RES);
      });
    });

  });

});