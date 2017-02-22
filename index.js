const R = require('ramda');

const unflatten = R.compose(
  R.reduce((acc, x) => {
    const keys = x[0].split('.');
    const value = x[1];
    return R.set(R.lensPath(keys), value, acc);
  }, {}),
  R.toPairs
);


const flatten = (obj) => {
  const c = R.curry((root, acc, v) => {
    return R.ifElse(
      R.is(Object),
      fn(acc, `${root}${v[0]}`),
      R.assoc(`${root}${v[0]}`, R.__, acc)
    )(v[1])
  })
  const fn = R.curry((acc, root, obj) => {
    const r = c(root !== '' ? root + '.' : '');
    return R.compose(
      R.reduce(r, acc),
      R.toPairs
    )(obj)
  })

  return fn({}, '', obj)
}

module.exports = {
  unflatten,
  flatten,
}
