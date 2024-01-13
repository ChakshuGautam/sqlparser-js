use serde_json;
use sqlparser::dialect::GenericDialect;
use sqlparser::parser::Parser;

#[deny(clippy::all)]
#[macro_use]
extern crate napi_derive;

#[napi]
pub fn sql_parse(query: String) -> String {
  let dialect = GenericDialect {};
  let ast = Parser::parse_sql(&dialect, &query).unwrap();
  let json_str = serde_json::to_string(&ast).unwrap();
  json_str
}

#[napi(js_name = "Parser")]
pub struct ParserWrapper {}

#[napi]
impl ParserWrapper {
  #[napi(constructor)]
  pub fn new() -> Self {
    Self {}
  }

  #[napi]
  pub fn parse_sql(&self, query: String) -> String {
    let dialect = GenericDialect{};
    let ast = Parser::parse_sql(&dialect, &query).unwrap();
    let json_str = serde_json::to_string(&ast).unwrap();
    json_str
  }
}