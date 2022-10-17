import { LogLevelType } from '@beecode/msh-node-log'
import { ConsoleLogger } from '@beecode/msh-node-log/lib/console-logger'
import { cacheUtil } from '@beecode/msh-node-util/lib/cache-util'
import { config } from 'src/util/config'

export const logger = cacheUtil.singleton(() => {
  return new ConsoleLogger({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    logLevel: LogLevelType[config().logLevel.toUpperCase()] ?? LogLevelType.DEBUG,
  })
})
