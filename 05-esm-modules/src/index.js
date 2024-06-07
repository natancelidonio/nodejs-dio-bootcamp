import * as database from "./utils/database.js";
import {getDataFromAPI} from "./utils/api.js"
 
getDataFromAPI();
database.disconnectDatabase();
 