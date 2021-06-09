module.exports = {
    success: {
        s0: {
            code: "updatesCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "updatesUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "updatesFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "updatesDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "Noupdatess",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "updatesNotFound",
            type: "error"
        }
    }
}