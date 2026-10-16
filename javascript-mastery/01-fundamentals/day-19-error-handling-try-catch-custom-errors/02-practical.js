// 02-practical.js
// Utility for parsing configuration strings with robust error handling

// Custom error for configuration issues
class ConfigParseError extends Error {
  constructor(message, configKey = null) {
    super(message);
    this.name = "ConfigParseError";
    this.configKey = configKey;
  }
}

/**
 * Parses a simple configuration string.
 * Expected format: "KEY1=VALUE1;KEY2=VALUE2"
 */
function parseConfigString(configString) {
  if (typeof configString !== 'string') {
    throw new ConfigParseError("Config input must be a string.");
  }
  if (configString.trim() === '') {
    throw new ConfigParseError("Config string cannot be empty.");
  }

  const config = {};
  const pairs = configString.split(';');

  for (const pair of pairs) {
    const trimmedPair = pair.trim();
    if (trimmedPair === '') continue; // Allow empty pairs from trailing semicolons

    const parts = trimmedPair.split('=');
    if (parts.length !== 2) {
      throw new ConfigParseError(`Malformed config pair: '${trimmedPair}'. Expected 'KEY=VALUE'.`);
    }

    const key = parts[0].trim();
    const value = parts[1].trim();

    if (key === '') {
      throw new ConfigParseError("Config key cannot be empty.", key);
    }
    if (value === '') {
      throw new ConfigParseError(`Value for key '${key}' cannot be empty.`, key);
    }

    config[key] = value;
  }
  return config;
}

/**
 * Processes a list of config strings, handling errors gracefully.
 */
function processConfigList(configStrings) {
  const results = [];
  for (const str of configStrings) {
    try {
      const parsedConfig = parseConfigString(str);
      results.push({ status: "success", config: parsedConfig });
    } catch (error) {
      if (error instanceof ConfigParseError) {
        results.push({
          status: "error",
          message: error.message,
          configKey: error.configKey,
          rawString: str
        });
      } else {
        // Catch any other unexpected errors
        results.push({
          status: "error",
          message: `An unexpected error occurred: ${error.message}`,
          rawString: str
        });
      }
    }
  }
  return results;
}

// --- Usage Examples ---
const sampleConfigs = [
  "HOST=localhost;PORT=8080;DEBUG=true",
  "DB_URL=mongodb://user:pass@host:27017/mydb",
  "INVALID_FORMAT",
  "API_KEY=abc123def;", // Trailing semicolon
  "EMPTY_VALUE=",
  "KEY_ONLY=",
  "SOME_KEY=SOME_VALUE;ANOTHER_KEY=", // Error in second key
  123, // Invalid input type
  "" // Empty string
];

console.log("Processing configuration list:");
const processedResults = processConfigList(sampleConfigs);

processedResults.forEach((result, index) => {
  console.log(`\n--- Config ${index + 1} (${result.rawString || "N/A"}) ---`);
  if (result.status === "success") {
    console.log("  Successfully parsed:", result.config);
  } else {
    console.error("  Error:", result.message);
    if (result.configKey) {
      console.error("  Related key:", result.configKey);
    }
  }
});

module.exports = { parseConfigString, ConfigParseError, processConfigList }; // For testing