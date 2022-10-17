import { LifeCycle } from '@beecode/msh-node-app'

export class DummyInitiable extends LifeCycle {
  constructor() {
    super({ name: 'Dummy Lib Setup' })
  }

  protected async _createFn(): Promise<void> {
    return Promise.resolve(undefined)
  }

  protected _destroyFn(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
