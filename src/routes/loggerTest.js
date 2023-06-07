import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    req.logger.debug('1 + 1 === 2 ????')
    req.logger.info('Se llamo a esta url')
    req.logger.warning('No te preocupes, es solo una advertencia!')
    req.logger.error('Hubo un error! ')
    req.logger.fatal('Se pudrio todo!')
    res.send({message: 'Logger Test'})
})

export default router
