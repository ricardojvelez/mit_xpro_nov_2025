// Simulates fetching data - can succeed, fail, or throw an error
async function fetchData(scenario = "success") {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (scenario === "success") {
                // SUCCESS: Promise resolves with data
                resolve("Data fetched successfully!");
            } else if (scenario === "failure") {
                // FAILURE: Promise rejects (e.g., no data found, validation failed)
                reject("Failed to fetch data - resource not found");
            } else if (scenario === "error") {
                // ERROR: Simulates an unexpected error/exception
                reject(new Error("Network error - connection timed out"));
            }
        }, 2000); // Simulates 2 second delay
    });
}

// Main async function that handles all scenarios
async function asyncExample(scenario) {
    console.log(`Testing: ${scenario.toUpperCase()} scenario`);
    console.log("Fetching data...");

    try {
        // await pauses execution until the Promise settles (resolves or rejects)
        const result = await fetchData(scenario);
        
        // This only runs if the Promise RESOLVES (success)
        console.log("✅ Success!");
        
    } catch (error) {
        // This runs if the Promise REJECTS (failure or error)
        
        if (error instanceof Error) {
            // Caught an Error object (has stack trace, message property)
            console.log("❌ Error caught");
            // console.log("Stack trace:", error.stack); // Uncomment to see full stack
        } else {
            // Caught a rejection with a simple value (string, number, etc.)
            console.log("⚠️ Failure/Insuccess");
        }
    } finally {
        // FINALLY: This ALWAYS runs, regardless of success or failure
        console.log("🏁 Finally block executed");
    }

    console.log("End of async function\n");
}

// ============================================
// TEST ALL THREE SCENARIOS
// ============================================

// Run tests sequentially using async/await
async function runAllTests() {

    // Test 1: SUCCESS - Promise resolves
    await asyncExample("success");

    // Test 2: FAILURE/INSUCCESS - Promise rejects with a string
    await asyncExample("failure");

    // Test 3: ERROR - Promise rejects with an Error object
    await asyncExample("error");

    console.log("ALL TESTS ARE COMPLETE");
}

// Execute all tests
runAllTests();

// This runs immediately because runAllTests() is async
console.log("😎 Running BEFORE async functions complete 😎");
