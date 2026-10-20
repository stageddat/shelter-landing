import sanitizeHtml from 'sanitize-html';

// algunos mensajes traen html (links, <br />) y vienen de weblate y dejamos pasar solo lo basico
export function safeHtml(html: string): string {
	return sanitizeHtml(html, {
		allowedTags: ['a', 'br', 'strong', 'em'],
		// target y rel solo los pone transformTags (el filtro de atributos va despues)
		allowedAttributes: { a: ['href', 'target', 'rel'] },
		allowedSchemes: ['https', 'mailto'],
		transformTags: {
			// links externos en otra pestaña; los de la traduccion se ignoran
			a: (tagName, { href }) => {
				const attribs: sanitizeHtml.Attributes = href ? { href } : {};
				if (href?.startsWith('https://')) {
					attribs.target = '_blank';
					attribs.rel = 'noopener noreferrer';
				}
				return { tagName, attribs };
			}
		}
	});
}
