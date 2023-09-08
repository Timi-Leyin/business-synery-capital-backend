import { Router } from 'express'
import { createUser } from '../controllers/formController'
import multer from "multer";
const root: Router = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
root.post('/form-submit', upload.single("proofOfIdentity"), createUser)

export default root