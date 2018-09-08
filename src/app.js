import {Module} from 'cerebral';
import * as sequences from './sequences';

// this is the main module of the app
// other modules can be added to it
// in the module key,
// we can also add signals
const appModule = Module({
    state: {
        name: "Miguel"
    },
    signals: {
        setName: sequences.setName
    }
})

export default appModule;