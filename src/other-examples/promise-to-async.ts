export default function bar() {
  return fetch('/foo').then((res) => res.json()).then(({ name }) => name as string);
}
