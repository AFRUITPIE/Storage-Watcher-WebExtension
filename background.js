// Add a listener for when the browser's local storage changes
// This fails in Orion with the exception below:
// TypeError: undefined is not an object (evaluating 'browser.storage.local.onChanged.addListener')
browser.storage.local.onChanged.addListener((changes) => {
  for (let key in changes) {
    const change = changes[key];
    console.log(`Key: "${key}"
    Old value: "${change.oldValue}"
    New value: "${change.newValue}"`);
  }
});

// Set "exampleTimestamp" in the browser local storage every 10 seconds
// In Firefox, this works with the registered listener above.
setInterval(() => {
  let timestamp = new Date().toISOString();
  browser.storage.local.set({ exampleTimestamp: timestamp });
}, 10000);
