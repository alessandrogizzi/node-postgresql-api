import { Router } from 'express'
const router = Router()

import {
	createTask,
	getTasks,
	updateTask,
	deleteTask,
	getOneTask,
	getTaskByProject
} from '../controllers/taskController'

// Routes
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.get('/', getTasks)
router.get('/:id', getOneTask)
router.get('/project/:projectid', getTaskByProject)

export default router
