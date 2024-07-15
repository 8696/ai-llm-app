import log4js from 'log4js'

const logger = log4js.getLogger()

logger.level = 'all'

const { error, info } = logger


logger.error = (...args) => {
  process.env.NODE_PM2 && console.error(...args)
  error.call(logger, ...args)
}

logger.info = (...args) => {
  process.env.NODE_PM2 && console.info(...args)
  info.call(logger, ...args)
}

export default logger
