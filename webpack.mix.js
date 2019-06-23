const mix = require('laravel-mix')

require('laravel-mix-purgecss')

mix.postCss('resources/css/app.css', 'public/build/css', [
  require('tailwindcss')()
])

mix.purgeCss({
  folders: ['public/views']
})
