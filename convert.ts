#!/usr/bin/env deno --allow-run

import { args, run, stdout } from "deno";
import { parseCsv } from "https://denopkg.com/hashrock/deno-fnparse/parsers/csv.ts";

(async () => {
  const process = run({
    args: ["iconv", "-f", "sjis", "-t", "utf8", args[1]],
    stdout: "piped"
  });
  const csv = new TextDecoder().decode(await process.output());
  process.close();

  const rows = parseCsv(csv) as string[][];

  const table = args[1].slice(0, -4);
  const encoder = new TextEncoder();
  rows.forEach(row => {
    stdout.write(
      encoder.encode(`INSERT INTO ${table} VALUES ('${row.join("', '")}');\n`)
    );
  });
})();
