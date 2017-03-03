export default {
  presets: [
    [
      'env',
      {
        modules: false,
        loose: true,
        useBuiltIns: true,
        targets: {
          node: false,
          browsers: [
            'last 4 versions',
            'not IE < 10'
          ]
        }
      }
    ]
  ],
  plugins: [
    'add-module-exports',
    'transform-object-rest-spread'
  ]
}
