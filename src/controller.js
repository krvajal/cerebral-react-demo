import { Controller} from 'cerebral';
// import the main app module and add it to the controller
import app from './app'


const controller = Controller(app);

export default controller;