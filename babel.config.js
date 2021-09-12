module.exports = {
  plugins:[ [
      '@babel/plugin-transform-react-jsx',
      {
        importSource: 'theme-ui', // or '@theme-ui/core'
        runtime: 'automatic',
        throwIfNamespace: false,
      },
    ]
  ],
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {   
      importSource: 'theme-ui', // or '@theme-ui/core'
        runtime: 'automatic',
        throwIfNamespace: false, }],
   
    '@babel/preset-typescript',
  ],
};