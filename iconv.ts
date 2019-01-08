import { args, run, stdout } from "deno";

(async () => {
  const process = run({
    args: ["iconv", "-f", "sjis", "-t", "utf8", args[1]],
    stdout: "piped"
  });
  stdout.write(await process.output());
  process.close();
})();
