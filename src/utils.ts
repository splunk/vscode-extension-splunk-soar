// @ts-nocheck
export function partition(array, isValid) {
    return array.reduce(([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    }, [[], []]);
}
  
export const addOrReplace = (arr, newObj) => [...arr.filter((o) => o.key !== newObj.key), {...newObj}];

export function removeIfExists(array, key, value) {
  const index = array.findIndex(obj => obj[key] === value);
  return index >= 0 ? [
      ...array.slice(0, index),
      ...array.slice(index + 1)
  ] : array;
}


export const zip = (a, b) => a.map((k, i) => [k, b[i]]);

export function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
