import { args, copy, open, stdout } from "deno";

(async () => {
  const file = await open(args[1]);
  await copy(stdout, file);
  file.close();
})();
