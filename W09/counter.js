
function createCounter() {
  let count = 0;

  // Return an object with three functions
  return {
    // Add 1 to count
    increment: function() {
      count = count + 1;
      return count;
    },

    // Subtract 1 from count
    decrement: function() {
      count = count - 1;
      return count;
    },

    // Get the current count
    getCount: function() {
      return count;
    }
  };
}

module.exports = createCounter;