db.createUser(
    {
        user: "admin",
        psw: "root",
        roles: [
            {
                role: "readWrite",
                db: "mongodb"
            }
        ]
    }
)