const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3700", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}