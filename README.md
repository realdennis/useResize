# useResize

Get window size by hooks `resize` event without side-effect.

## Install

```sh
$ npm install @realdennis/use-resize
```

## How to use?

```javascript
import useResize from '@realdennis/use-reize';
const demo = ()=>{
  const size = useResize();
  return <p>{`width: ${size.width} / height: ${size:height}`}</p>
}
```

## What I Do?

Call clean-up function (to `removeEventListener`) when component has been unmounted.

## Why This has a dependency of `useEventTarget`

This is a hooks infrastructure for easily package a event hooks.

See more [useEventTarget](https://github.com/realdennis/useEventTarget/).
