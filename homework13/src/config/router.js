export const ROUTER = {
  routes: {
      MAIN: '/',
      NEWS: (id) => id ? `/news/${id}` : `/news`,
      NONE: '*'
  }
}