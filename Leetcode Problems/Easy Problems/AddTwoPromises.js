/*
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Return the new promise as the sum of the values after retrieving the values with await.
    return (await promise1) + (await promise2);
};
