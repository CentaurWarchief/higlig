## `<Highlight>(...)</Highlight>`

Born from a challenge against a friend. This is a simple component that take two **props** and highlights the given text. For example:
```JS
<Highlight word={'world'} wrap={word => <strong>{word}</strong>}>
  Hello, world!
</Highlight>
```

You should get:
```JS
<span>Hello, <strong>world</strong><span>!
```

It doesn't use `dangerouslySetInnerHTML` or any hidden feature/trickery. And it also takes advantage of native diffing (as it has **key** prop), so don't worry about performance.
