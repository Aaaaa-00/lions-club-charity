// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // Global CSS
  css: ['./assets/styles.css'],
  
  // Enable pages directory explicitly with srcDir
  srcDir: '.',
  pages: true,
  
  // Enable SSR for proper page detection
  ssr: true,
  
  // Keep auto-imports enabled but controlled
  imports: {
    autoImport: true
  },
  
  // Enable components with proper scanning
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  
  // Experimental features for better path handling
  experimental: {
    payloadExtraction: false,
    writeEarlyHints: false
  },
  
  // Nitro configuration
  nitro: {
    preset: 'node-server'
  },
  
  // Vite configuration to handle spaces in paths
  vite: {
    clearScreen: false,
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    },
    server: {
      fs: {
        strict: false,
        allow: ['..', '../..', '/']
      },
      hmr: {
        overlay: false
      }
    },
    optimizeDeps: {
      exclude: [],
      include: [],
      force: true
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        external: []
      }
    }
  },
  
  // App configuration
  app: {
    head: {
      title: 'Sweet Scoops for a Cause - Lions Club Charity Event',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Lions Club charity ice cream event to raise funds for community service projects.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: '/styles.css' }
      ]
    }
  }
})
