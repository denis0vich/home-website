// Cross-platform script to build with lenient settings
process.env.IGNORE_ESLINT = 'true'
process.env.IGNORE_TYPESCRIPT = 'true'

const { execSync } = require('child_process')

console.log('🔨 Building with lenient settings (ignoring ESLint and TypeScript errors)...')
console.log('⚠️  Warning: This may hide real issues in your code!\n')

try {
  execSync('next build', { stdio: 'inherit' })
  console.log('\n✅ Build completed successfully!')
} catch (error) {
  console.error('\n❌ Build failed!')
  process.exit(1)
}

