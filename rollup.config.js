import terser from '@rollup/plugin-terser';

export default {
  input: 'src/script.js', // entry point to your Javascript
  // Alpine calls blackArchive() from HTML, so Rollup cannot infer the entry
  // points from JavaScript imports. Preserve those global function declarations.
  treeshake: false,
  output: {
    file: 'dist/script.js',
    format: 'iife', // Immediately Invoked Function Expression, suitable for <script> tags
    name: 'theblackarchive'
  },
  plugins: [
    
    
    terser({ maxWorkers: 1 }) // minifies the JavaScript
  ]
};
