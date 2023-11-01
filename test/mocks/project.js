const nock = require('nock');
const workspaceMocks = require('./workspace');

const TEST_API_HOST = 'https://f6e01297-6f38-45b2-a9f6-9df7a3e2abfd.mock.pstmn.io';

const NEW_PROJECT_RES = {
    "data": {
        "id": "3Jv31Kh5FyL26cWv",
        "name": "TEST_PROJECT",
        "description": "TEST PROJECT",
        "is_deleted": false,
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": null,
        "deleted_by": null,
        "created_at": "2023-02-10T13:26:42.031Z",
        "updated_at": "2023-02-10T13:26:42.031Z",
        "deleted_at": null,
        "retables": [
            {
                "columns": [
                    {
                        "column_id": "K8uOHSHsFLXGitNp",
                        "title": "Name",
                        "type": "text"
                    }
                ],
                "id": "dymqJYxcdbkY7t2E",
                "title": "Retable 1",
                "description": null,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-02-10T13:26:42.099Z",
                "updated_at": "2023-02-10T13:26:42.099Z",
                "deleted_at": null
            }
        ]
    }
};

const PROJECT_RES = {
    "data": {
        "id": "IDnwIpbzMUS8APDX",
        "name": "TEST_PROJECT",
        "description": "TEST PROJECT",
        "is_deleted": false,
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "deleted_by": null,
        "created_at": "2023-01-25T14:13:49.838Z",
        "updated_at": "2023-02-08T13:35:33.313Z",
        "deleted_at": null,
        "retables": [
            {
                "id": "wLM2ncSrKO7tR9na",
                "title": "Retable 1",
                "description": null,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "deleted_by": null,
                "created_at": "2023-01-25T14:13:49.863Z",
                "updated_at": "2023-01-25T14:14:51.475Z",
                "deleted_at": null
            }
        ]
    }
};

const PROJECT_TABLES_RES = {
    "data": {
        "retables": [
            {
                "id": "wLM2ncSrKO7tR9na",
                "title": "Retable 1",
                "description": null,
                "columns": [
                    {
                        "column_id": "XqlnQDKvGa6uXCjM",
                        "title": "Name",
                        "type": "text",
                        "created_at": "2023-01-25 17:14:51.475000"
                    },
                    {
                        "column_id": "gGOiQVV8tIFxTaOj",
                        "title": "text 3",
                        "type": "text",
                        "created_at": "2023-01-25 17:14:51.476000"
                    }
                ],
                "project_id": "IDnwIpbzMUS8APDX",
                "workspace_id": "YHooVteRcQKskpw2",
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "deleted_by": null,
                "created_at": "2023-01-25T14:13:49.863Z",
                "updated_at": "2023-01-25T14:14:51.475Z",
                "deleted_at": null
            }
        ],
        "count": 1
    }
};

const DELETED_PROJECT_RES = {
    "data": {
        "project_name": "TEST_PROJECT"
    }
};

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/project/' + PROJECT_RES.data.id)
    .reply(200, PROJECT_RES);


nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/project/ ' + PROJECT_RES.data.id + '/retable')
    .reply(200, PROJECT_TABLES_RES)

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .post('/workspace/' + workspaceMocks.WORKSPACE_RES.data.id + '/project')
    .reply(201, NEW_PROJECT_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .delete('/project/' + PROJECT_TABLES_RES.data.id)
    .reply(200, DELETED_PROJECT_RES);

module.exports = {
    NEW_PROJECT_RES, PROJECT_RES, PROJECT_TABLES_RES, DELETED_PROJECT_RES
};













