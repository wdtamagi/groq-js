import * as NodeTypes from '../nodeTypes'
import {Scope} from './scope'
import {Value} from '../values'

export type Executor<N = NodeTypes.ExprNode> = (node: N, scope: Scope) => Value | PromiseLike<Value>

export interface EvaluateOptions {
  // The value that will be available as `@` in GROQ.
  root?: any

  // The value that will be available as `*` in GROQ.
  dataset?: any

  // Parameters availble in the GROQ query (using `$param` syntax).
  params?: Record<string, unknown>

  // The timestamp returned from now()
  timestamp?: Date

  // The value returned from before() in Delta-mode
  before?: any

  // The value returned from after() in Delta-mode
  after?: any
}
