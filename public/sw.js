// La app antes vivía en shelter.cat y registraba un service worker aquí, que sigue
// sirviendo desde caché /app, /login, /signup y /restore a quien ya la había abierto.
// La app se ha mudado a app.shelter.cat: este sw.js sustituye al viejo, borra sus
// cachés, se da de baja y recarga las pestañas, que ya llegan a las redirecciones.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(keys.map((key) => caches.delete(key)));
			await self.registration.unregister();
			const clients = await self.clients.matchAll({ type: 'window' });
			for (const client of clients) client.navigate(client.url);
		})()
	);
});
