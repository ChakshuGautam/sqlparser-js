use serde_json;
use sqlparser::dialect::GenericDialect;
use sqlparser::parser::Parser;

#[deny(clippy::all)]
#[macro_use]
extern crate napi_derive;

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[napi]
pub fn sql_parse(query: String) -> String {
  let dialect = GenericDialect {};
  let ast = Parser::parse_sql(&dialect, &query).unwrap();
  let json_str = serde_json::to_string(&ast).unwrap();
  json_str
}
