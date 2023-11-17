import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('server is running on 5000')
  next()
})

export default app
