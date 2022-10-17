import { MshNodeEnv } from '@beecode/msh-node-env'
import { PrefixName } from '@beecode/msh-node-env/lib/naming/prefix-name'
import { cacheUtil } from '@beecode/msh-node-util/lib/cache-util'

const env = MshNodeEnv({
  namingStrategies: [new PrefixName('REACT_APP_')],
})

export const config = cacheUtil.singleton(() =>
  Object.freeze({
    logLevel: env('LOG_LEVEL').string.default('error').allowed('error', 'warn', 'info', 'debug').required as
      | 'error'
      | 'warn'
      | 'info'
      | 'debug',
  })
)
