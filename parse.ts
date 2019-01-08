import { args, run } from "deno";
import { parseCsv } from "https://denopkg.com/hashrock/deno-fnparse/parsers/csv.ts";

(async () => {
  const process = run({
    args: ["iconv", "-f", "sjis", "-t", "utf8", args[1]],
    stdout: "piped"
  });
  const csv = new TextDecoder().decode(await process.output());
  process.close();

  const rows = parseCsv(csv.trim());
  console.log(rows);
})();
