import test from "ava";

import { Parser } from "../index.js";

test("Parse an SQL Query", (t) => {
  const parser = new Parser();
  const expected = `[{"Query":{"with":null,"body":{"Select":{"distinct":null,"top":null,"projection":[{"Wildcard":{"opt_exclude":null,"opt_except":null,"opt_rename":null,"opt_replace":null}}],"into":null,"from":[{"relation":{"Table":{"name":[{"value":"samagra","quote_style":null}],"alias":null,"args":null,"with_hints":[]}},"joins":[]}],"lateral_views":[],"selection":null,"group_by":[],"cluster_by":[],"distribute_by":[],"sort_by":[],"having":null,"named_window":[],"qualify":null}},"order_by":[],"limit":null,"offset":null,"fetch":null,"locks":[]}}]`;
  t.is(parser.parseSql("SELECT * FROM samagra"), expected);
});
