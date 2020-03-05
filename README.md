# urlifylb
node package to turn an object into a query string

npm install --save urlifylb

```javascript
import {generateQuery} from "urlifylb";

let query = generateQuery({
  param1 : 1,
  param2 : "hello",
  param3 : "world"
})

let text = query.text; //param1=1&param2=hello&param3=world
let original = query.original; //{param1 : 1, param2 : "hello", param3 : world}
let paramCount = query.paramCount; // 3
```
