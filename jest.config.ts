import type { Config } from 'jest'
import nextJest from 'next/jest.js' // nextJest is a "function factory" - it creates other functions

/**This pattern is called currying - breaking a function that takes multiple arguments into a chain of functions that each take one argument. It allows Next.js to:
 *First: Set up Next.js-specific stuff (load your next.config.js, etc.) 
 *Second: Take your custom Jest config and merge it with the Next.js defaults **/

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})  // returns a config creator function

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  /**When you set up path aliases in Next.js (like @/components/Button instead of ../../../components/Button), Next.js automatically understands these paths because it reads your tsconfig.json. However, Jest runs completely separately and has no idea what @/ means. */
  moduleNameMapper: {
    // Map @/* to <rootDir>/* (everything in project root)
    '^@/(.*)$': '<rootDir>/app/$1'
  }

  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)