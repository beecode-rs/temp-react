import { DummyInitiable } from './init/dummy-initiable'
import { AppFlow } from '@beecode/msh-node-app'

export class WebApp extends AppFlow {
  constructor() {
    super(new DummyInitiable())
  }
}

export const webAppFactory = (): WebApp => new WebApp()
