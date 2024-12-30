import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import config from './config.js'
import indexRouter from "./index.routes.js"

const app = express()
const port = config.app.port

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({
    limits: {
        fileSize: 10 * 1024 * 1024
    }
}))

app.use(cors())

app.use('/api', indexRouter)

app.listen(port, () => {
    console.log(`Server Running At ${port}`)
})

