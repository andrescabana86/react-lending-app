module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  "setupFiles": ["./test/jest-setup.tsx"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  'transform': {
    '.*\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
  ],
}