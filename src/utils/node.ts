
/**
 * Converts a JSON so that it is no longer cyclic. This way it can be successfully stringified.
 * @param pruneThis The object to prune.
 * @param iterations How many iterations to prune.
 * @returns 
 */
export function pruneJSON(pruneThis: any, iterations=4) {
    const prunedItems = new Set();

    const skipThesePrototypes = new Set(["toString","toLocaleString","join","reverse","sort","push","pop","shift","unshift","splice","concat","slice","lastIndexOf","indexOf","forEach","map","filter","reduce","reduceRight","some","every","find","findIndex","copyWithin","fill","entries","keys","values","includes","flatMap","flat","at","findLast","findLastIndex","toReversed","toSorted","toSpliced","with","constructor","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","ownHandleDispatch","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"]);

    function logPrototypeChain(instance: any) {
        // Start with the prototype of the instance
        let prototype = Object.getPrototypeOf(instance);

        const output = new Set();
    
        // Traverse the prototype chain
        while (prototype !== null) {
            //console.log('Prototype:', prototype);
    
            // Get all property names of the current prototype
            const propertyNames = Object.getOwnPropertyNames(prototype);
    
            // Log function names only
            for (const name of propertyNames) {
                if (skipThesePrototypes.has(name)) continue;
                let current;
                try {
                    current = prototype[name];
                }
                catch {
                    //console.log('failed', name, 'from', prototype);
                    continue;
                }
                if (typeof current === "function") {
                    output.add(name);
                }
            }

            // Move up the prototype chain
            prototype = Object.getPrototypeOf(prototype);
        }

        return output;
    }


    function pruneJSONInner(obj: any, depth=0) {

        if (depth > iterations) return;

        const output: any = {};

        for (const key of Object.keys(obj)) {

            const value = obj[key];

            if (value === null) continue;

            if (prunedItems.has(value)) {
                
                if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                    output[key] = value;
                }
                else {
                    output[key] = "<recurse>";
                }
                
            }
            else {
                prunedItems.add(value);
                if (key === "script") {
                    output[key] = "<insert CL script here>";
                }
                else if (typeof value === "object") {
                    output[key] = pruneJSONInner(value, depth+1);
                }
                else if (typeof value === "function") {
                    output[key] = "<fn>";
                }
                else if (typeof value !== "symbol") {
                    output[key] = value;
                }
            }

            
        }

        for (const functionName of logPrototypeChain(obj)) {
            output[functionName as any] = "<prototype>";
        }

        const severed = JSON.parse(JSON.stringify(output));
        return promoteToList(severed, Object.keys(severed as object));
    }

    function promoteToList(obj: any, keysOfObj: any, parent=undefined as any, parentKey=undefined as any) {
        const isList = parent !== undefined && keysOfObj.length > 0 && keysOfObj.every((x: string)=>/^\d+$/.test(x));

        const collected = [];
        for (const key of keysOfObj) {
            let value = obj[key];
            if (value === null) return obj;
            if (typeof value === "object") {
                value = promoteToList(value, Object.keys(value), obj, key);
            };
            if (isList) collected.push(value);
        }
            
        if (isList) parent[parentKey] = collected;

        return obj;
    }

    return pruneJSONInner(pruneThis);
}