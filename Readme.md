# <div align="center"> `sqlparser-js` </div>

[![CI](https://github.com/ChakshuGautam/sqlparser-js/actions/workflows/CI.yml/badge.svg)](https://github.com/ChakshuGautam/sqlparser-js/actions/workflows/CI.yml)
<br>

> Node.js binding for [sqlparser-rs](https://github.com/sqlparser-rs/sqlparser-rs).

## Installation

```sh
npm i sqlparser-js
```

## Example

```javascript
import sqlParse from "sqlparser-js";

const query = "SELECT * FROM table_name";
const parsedSQL = sqlParse(query); // Stringified JSON Object of AST
```
