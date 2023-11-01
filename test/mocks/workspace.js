const nock = require('nock');

const TEST_API_HOST = 'https://f6e01297-6f38-45b2-a9f6-9df7a3e2abfd.mock.pstmn.io';

const ALL_WORKSPACE_RES = {
    "data": {
        "workspaces": [
            {
                "id": "bVKM3lDYjXm2POX6",
                "name": "TEST",
                "description": null,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-01-25T12:46:00.919Z",
                "updated_at": null,
                "deleted_at": null
            },
            {
                "id": "YHooVteRcQKskpw2",
                "name": "API_TEST",
                "description": "API TEST",
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-01-25T14:13:30.235Z",
                "updated_at": null,
                "deleted_at": null
            }
        ],
        "count": 2
    }
};

const NEW_WORKSPACE_RES = {
    "data": {
        "id": "yBb678GG0V3cRKPH",
        "name": "API_TEST",
        "description": "API TEST",
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": null,
        "deleted_by": null,
        "created_at": "2023-02-10T13:42:06.884Z",
        "updated_at": null,
        "deleted_at": null,
        "projects": [
            {
                "id": "xaFJhWgYnPcwtr8u",
                "name": "To-Do List",
                "description": null,
                "is_deleted": false,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-02-10T13:42:07.071Z",
                "updated_at": "2023-02-10T13:42:07.071Z",
                "deleted_at": null
            }
        ]
    }
};

const WORKSPACE_RES = {
    "data": {
        "id": "YHooVteRcQKskpw2",
        "name": "API_TEST",
        "description": "API TEST",
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": null,
        "deleted_by": null,
        "created_at": "2023-01-25T14:13:30.235Z",
        "updated_at": null,
        "deleted_at": null,
        "projects": [
            {
                "id": "8Stbv8PhEBirHnCM",
                "name": "To-Do List",
                "description": null,
                "is_deleted": false,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-01-25T14:13:30.409Z",
                "updated_at": "2023-02-10T07:39:06.748Z",
                "deleted_at": null
            },
            {
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
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-01-25T14:13:49.838Z",
                "updated_at": "2023-02-08T13:35:33.313Z",
                "deleted_at": null
            },
            {
                "id": "Flb2WjW0zL1b94sw",
                "name": "Project 3",
                "description": null,
                "is_deleted": false,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-02-08T14:00:57.421Z",
                "updated_at": "2023-02-10T11:48:58.462Z",
                "deleted_at": null
            },
            {
                "id": "W74CpDI182VwA5ht",
                "name": "Project 4",
                "description": null,
                "is_deleted": false,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "deleted_by": null,
                "created_at": "2023-02-08T14:49:47.082Z",
                "updated_at": "2023-02-10T08:03:27.182Z",
                "deleted_at": null
            }
        ]
    }
};

const WORKSPACE_PROJECTS_RES = {
    "data": {
        "projects": [
            {
                "id": "8Stbv8PhEBirHnCM",
                "name": "To-Do List",
                "description": null,
                "workspace_id": "YHooVteRcQKskpw2",
                "is_deleted": false,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "created_at": "2023-01-25T14:13:30.409Z",
                "updated_at": "2023-02-10T07:39:06.748Z",
                "deleted_at": null
            },
            {
                "id": "IDnwIpbzMUS8APDX",
                "name": "TEST_PROJECT",
                "description": "TEST PROJECT",
                "workspace_id": "YHooVteRcQKskpw2",
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
                "created_at": "2023-01-25T14:13:49.838Z",
                "updated_at": "2023-02-08T13:35:33.313Z",
                "deleted_at": null
            },
            {
                "id": "Flb2WjW0zL1b94sw",
                "name": "Project 3",
                "description": null,
                "workspace_id": "YHooVteRcQKskpw2",
                "is_deleted": false,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "created_at": "2023-02-08T14:00:57.421Z",
                "updated_at": "2023-02-10T11:48:58.462Z",
                "deleted_at": null
            },
            {
                "id": "W74CpDI182VwA5ht",
                "name": "Project 4",
                "description": null,
                "workspace_id": "YHooVteRcQKskpw2",
                "is_deleted": false,
                "created_by": {
                    "id": "wM9PC4my8tnfJtSu",
                    "name": "cemil2",
                    "surname": "tan",
                    "email": "test@test2.com"
                },
                "created_at": "2023-02-08T14:49:47.082Z",
                "updated_at": "2023-02-10T08:03:27.182Z",
                "deleted_at": null
            }
        ],
        "count": 4
    }
};

const DELETED_WORKSPACE_RES = {
    "data": {
        "workspace_name": "API_TEST"
    }
};

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/workspace')
    .reply(200, ALL_WORKSPACE_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/workspace/ ' + ALL_WORKSPACE_RES.data.workspaces[0].id)
    .reply(200, WORKSPACE_RES)

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .delete('/workspace/' + NEW_WORKSPACE_RES.data.id)
    .reply(200, DELETED_WORKSPACE_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .post('/workspace')
    .reply(201, NEW_WORKSPACE_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/workspace/' + WORKSPACE_RES.data.id + '/project')
    .reply(200, WORKSPACE_PROJECTS_RES);

module.exports = {
    ALL_WORKSPACE_RES, WORKSPACE_RES, WORKSPACE_PROJECTS_RES, DELETED_WORKSPACE_RES, NEW_WORKSPACE_RES
};