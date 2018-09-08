// when a signal is triggered,
// a sequence or sequences of bussines logic is run.
// A sequence is then a:
// composition or one or more actions which run state changes,
// side effects and other logic into one coherent flow

import { set } from 'cerebral/operators'
import { state } from 'cerebral/tags'
import * as actions from './actions';

export const initializeSequence = [
    actions.getUser,
    actions.setUser
]

export const setName = [
    actions.setName
]
