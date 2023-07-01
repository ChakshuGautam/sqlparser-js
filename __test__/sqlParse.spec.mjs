import test from "ava";

import { sqlParse } from "../index.js";

test("sum from native", (t) => {
  const expected = `[{"Query":{"with":null,"body":{"Select":{"distinct":null,"top":null,"projection":[{"Wildcard":{"opt_exclude":null,"opt_except":null,"opt_rename":null,"opt_replace":null}}],"into":null,"from":[{"relation":{"Table":{"name":[{"value":"samagra","quote_style":null}],"alias":null,"args":null,"with_hints":[]}},"joins":[]}],"lateral_views":[],"selection":null,"group_by":[],"cluster_by":[],"distribute_by":[],"sort_by":[],"having":null,"named_window":[],"qualify":null}},"order_by":[],"limit":null,"offset":null,"fetch":null,"locks":[]}}]`;
  t.is(sqlParse("SELECT * FROM samagra"), expected);
});
