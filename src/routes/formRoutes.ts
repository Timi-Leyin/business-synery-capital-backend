import { Router } from 'express'
import { createUser } from '../controllers/formController'

const root: Router = Router()

root.post('/form-submit', createUser)

export default root