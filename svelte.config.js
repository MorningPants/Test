// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),

// 		// Override http methods in the Todo forms
// 		methodOverride: {
// 			allowed: ['PATCH', 'DELETE']
// 		}
// 	}
// };

// export default config;



// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://github.com/sveltejs/svelte-preprocess
 // for more information about preprocessors
//  preprocess: preprocess(),

 kit: {
 // hydrate the <div id="svelte"> element in src/app.html
//   target: '#svelte',
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: null
  })
 }
};

export default config;