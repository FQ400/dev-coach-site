---
title: "Async/Await and Array.forEach"
date: 2020-07-01
lastmod: 2020-07-01
draft: false
tags: ["snippets", "javascript", "async", "await"]
---

Assuming we have two async calls to a database that return a promise.
`asyncDbCall1` takes longer then `asyncDbCall2`.

```javascript
const asyncDbCall1 = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, 200);
  })
};

const asyncDbCall2 = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(2) }, 100);
  })
};
```

Calling them in sequence using `Array.forEach`:

```javascript
[asyncDbCall1, asyncDbCall2].forEach(async (promise) => {
  const data = await promise();
  console.log(data);
});
console.log("DONE");

// Resulting output
// DONE
// 2
// 1
```

I want to finish the calls in sequence.

Using a `for` loop:

```javascript
const promiseArray = [asyncDbCall1, asyncDbCall2];

(async function() {
  for(let i=0; i<promiseArray.length; i++) {
    const data = await promiseArray[i].call();
    console.log(data);
  }
  console.log("DONE");
})();

// Resulting output:
// 1
// 2
// DONE
```

There is more ... 🤓 
