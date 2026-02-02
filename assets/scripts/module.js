//default module import 
import defaultExport from './export.js';


//named module import
import { namedExport1, namedExport2 } from './export.js';

//importing all exports as an object
import * as allExports from './export.js';

//importing for side effects only
import './sideEffectModule.js';

//dynamic import
async function loadModule() {
    const module = await import('./dynamicModule.js');
    module.dynamicFunction();
}

//using the imports
loadModule();

console.log("Default Import:----", defaultExport);
console.log("Named Import 1:----", namedExport1);
namedExport2();
console.log("All Imports as Object:----", allExports);
