//export * from './product'
//export * from './auth'


import * as product from './product'
import * as auth from './auth'

export const actions = {
    product,
    auth
}
