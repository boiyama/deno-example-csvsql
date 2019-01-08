import { args, readFile, stdout } from "deno";

(async () => {
  const data = await readFile(args[1]);
  stdout.write(data);
})();
