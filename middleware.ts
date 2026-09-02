import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Definimos qué rutas están blindadas y son exclusivas para clientes VIP
const isProtectedRoute = createRouteMatcher(['/vip(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Si alguien intenta entrar a la ruta protegida, le exigimos iniciar sesión
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

// Configuración estándar para que el guardia vigile toda la página de forma eficiente
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}