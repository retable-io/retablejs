const nock = require('nock');
const projectMocks = require('./project');

const TEST_API_HOST = 'https://f6e01297-6f38-45b2-a9f6-9df7a3e2abfd.mock.pstmn.io';

const NEW_TABLE_RES = {
    "data": {
        "columns": [
            {
                "column_id": "2dvak51E2voL6kma",
                "title": "Name",
                "type": "text"
            }
        ],
        "id": "d72yri3D53RFXxbg",
        "title": "Retable 4",
        "description": null,
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": null,
        "deleted_by": null,
        "created_at": "2023-02-10T14:48:56.692Z",
        "updated_at": "2023-02-10T14:48:56.692Z",
        "deleted_at": null
    }
};

const TABLE_RES = {
    "data": {
        "columns": [
            {
                "column_id": "2dvak51E2voL6kma",
                "title": "Name",
                "type": "text"
            }
        ],
        "id": "d72yri3D53RFXxbg",
        "title": "Retable 4",
        "description": null,
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": null,
        "deleted_by": null,
        "created_at": "2023-02-10T14:48:56.692Z",
        "updated_at": "2023-02-10T14:48:56.735Z",
        "deleted_at": null
    }
};

const NEW_COLUMN_RES = {
    "data": {
        "columns": [
            {
                "column_id": "2dvak51E2voL6kma",
                "title": "Name",
                "type": "text"
            }
        ],
        "id": "d72yri3D53RFXxbg",
        "title": "Retable 4",
        "description": null,
        "created_by": {
            "id": "yGFlbGi3SshixvnJ",
            "name": "cemil",
            "surname": "tan",
            "email": "test@test.com"
        },
        "updated_by": null,
        "deleted_by": null,
        "created_at": "2023-02-10T14:48:56.692Z",
        "updated_at": "2023-02-10T14:48:56.692Z",
        "deleted_at": null
    }
};

const GET_ROWS_RES = {
    "data": {
        "rows": [
            {
                "row_id": 1,
                "created_at": "2023-02-10 17:48:56",
                "updated_at": null,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "columns": [
                    {
                        "column_id": "2dvak51E2voL6kma",
                        "title": "Name",
                        "cell_value": ""
                    }
                ]
            }
        ]
    }
};

const INSERT_ROWS_RES = {
    "data": {
        "rows": [
            {
                "row_id": 1,
                "created_at": "2023-02-10 17:48:56",
                "updated_at": null,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "columns": [
                    {
                        "column_id": "2dvak51E2voL6kma",
                        "title": "Name",
                        "cell_value": ""
                    }
                ]
            },
            {
                "row_id": 2,
                "created_at": "2023-02-10 17:49:48",
                "updated_at": null,
                "created_by": {
                    "id": "yGFlbGi3SshixvnJ",
                    "name": "cemil",
                    "surname": "tan",
                    "email": "test@test.com"
                },
                "updated_by": null,
                "columns": [
                    {
                        "column_id": "2dvak51E2voL6kma",
                        "title": "Name",
                        "cell_value": "TEST 323112"
                    }
                ]
            }
        ]
    }
};

const DELETE_ROWS_RES = {
    "data": {
        "deleted_row_count": 1
    }
};

const UPDATE_ROWS_RES = {
    "data": [
        2
    ]
};

const ADD_COLUMN_RES = {
    "data": {
        "columns": [
            {
                "column_id": "2dvak51E2voL6kma",
                "title": "Name",
                "type": "text",
                "created_at": "2023-02-10 17:50:40.587000"
            },
            {
                "column_id": "ygBcjrXRj6AtCD9j",
                "title": "text 3",
                "type": "text",
                "created_at": "2023-02-10 17:50:40.588000"
            }
        ]
    }
};

const DELETE_COLUMN_RES = {
    "data": {
        "columns": [
            {
                "column_id": "2dvak51E2voL6kma",
                "title": "Name",
                "type": "text",
                "created_at": "2023-02-10 17:50:40.587000"
            }
        ]
    }
};

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .post('/project/' + projectMocks.PROJECT_RES.data.id + '/retable')
    .reply(201, NEW_TABLE_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/retable/ ' + NEW_TABLE_RES.data.id)
    .reply(200, TABLE_RES)

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .post('/retable/ ' + NEW_TABLE_RES.data.id + '/column')
    .reply(201, NEW_COLUMN_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .get('/retable/ ' + NEW_TABLE_RES.data.id + '/data')
    .reply(200, GET_ROWS_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .post('/retable/ ' + NEW_TABLE_RES.data.id + '/data')
    .reply(200, INSERT_ROWS_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .delete('/retable/ ' + NEW_TABLE_RES.data.id + '/data')
    .reply(200, DELETE_ROWS_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .put('/retable/ ' + NEW_TABLE_RES.data.id + '/data')
    .reply(200, UPDATE_ROWS_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .post('/retable/ ' + NEW_TABLE_RES.data.id + '/column')
    .reply(200, ADD_COLUMN_RES);

nock(TEST_API_HOST)
    .matchHeader('Authorization', /apiKey.*/)
    .delete('/retable/ ' + NEW_TABLE_RES.data.id + '/column')
    .reply(200, DELETE_COLUMN_RES);


module.exports = {
    NEW_TABLE_RES, TABLE_RES, NEW_COLUMN_RES, GET_ROWS_RES, INSERT_ROWS_RES, DELETE_ROWS_RES, UPDATE_ROWS_RES, ADD_COLUMN_RES, DELETE_COLUMN_RES
};
