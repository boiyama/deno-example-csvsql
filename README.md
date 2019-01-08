# An example generating SQL from CSV in Deno

## Try

```sh
$ cat <<EOF > items.csv
1,foo
2,bar
EOF
$ deno --allow-run https://denopkg.com/boiyaa/deno-example-csvsql/convert.ts items.csv
INSERT INTO items VALUES ('1', 'foo');
INSERT INTO items VALUES ('2', 'bar');
```
