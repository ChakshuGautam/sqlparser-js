Thanks for taking time to contribute to our project.

## Pull requests

We follow the [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow): all code contributions are submitted via a pull request towards the `main` branch.

Opening a Pull Request means you want that code to be merged. If you want to only discuss it, send a link to your branch along with your questions through whichever communication channel you prefer.

## Tech Architecture

There is already a project called [sqlparser-rs](https://github.com/sqlparser-rs/sqlparser-rs). If you come from a javascript (node) background and want to leverage those rust based service inside your project then we just do that for you. 

We are creating node bindings for the sqlparser-rs. [Napi.rs](https://napi.rs/) is a framework which allows us to build pre-compiled Node.js addons in rust. So we bind the available functions in original rust project and bring it inside of your node applications.

## Installation

1. Fork this repository
2. Clone the fork.  `git clone https://github.com/Your-User-Name/sqlparser-js.git`.
3. cd `sqlparser-js`.
4. Install node modules `yarn install`.
5. Build the rust binary `yarn build`.
6. Run the unit tests to verify correctness `yarn test`.

## Steps to contribute with a parser feature function

1. Inside of the file `src/lib.rs` define a new function with an `#[napi]` attribute.

For Example
```rust
#[napi]
fn sum(a:i32, b:i32) -> i32 {
    a+b
}
```

2. Compile your changes and update bindings using `yarn build`. This should add the javascript equivalent export for your rust function in `index.js`.

3. Write tests to verify your function in javascript. To write a test for the new function do the following
    - Create new file as `funcName.spec.mjs` inside `/__test__` directory.
    - For example in the case where you just wrote the sum example write test as below

```rust
import test from "ava";

import { sum } from "../index.js";

test("Sum of two numbers", (t) => {
  t.is(sum(2,4), 6);
});
```

4. Check if the all existing tests passes by running `yarn test`.

5. Raise the Pull request and we will review it.
