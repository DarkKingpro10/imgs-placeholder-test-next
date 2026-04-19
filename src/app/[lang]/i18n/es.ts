const es = {
	nav: {
		home: "Inicio",
		noPlaceholder: "Sin placeholder",
		static: "Estática",
		dynamicPlaceholder: "Dinámica",
		switchTo: "English",
	},
	home: {
		eyebrow: "Demo de imágenes internacionalizada",
		title: "Compara estrategias de carga de imágenes en inglés o en español.",
		description:
			"Esta galería muestra la diferencia entre cargar imágenes sin placeholder y usar un placeholder SVG estático. Cambia de idioma desde la navegación superior y las rutas seguirán localizadas.",
		primaryCta: "Abrir galería sin placeholder",
		secondaryCta: "Abrir galería con placeholder estático",
		featureTitle: "Qué se traduce",
		features: [
			"Etiquetas de navegación",
			"Títulos y textos explicativos",
			"Texto del botón de recargar",
		],
	},
	noPlaceholder: {
		title: "Galería de imágenes - Sin placeholder",
		description:
			"La cuadrícula permanece vacía mientras carga cada imagen, así que la página se percibe incompleta aunque el diseño ya esté montado.",
		linkLabel: "Ver explicación",
		reloadLabel: "Recargar página",
		explanationTitle: "Explicación de la galería de imágenes sin placeholders.",
		paragraphs: [
			"Cuando no se usa un placeholder, el área de la imagen permanece visualmente vacía mientras el recurso está cargando. Esto da la impresión de que la página tiene poco o ningún contenido, aunque el diseño ya se haya renderizado.",
			"Como no hay retroalimentación visual durante la carga, los usuarios pueden interpretar la interfaz como incompleta o lenta. El contenido aparece de golpe cuando termina de cargar cada imagen, y eso puede sentirse brusco y afectar negativamente la experiencia general.",
			"Los placeholders ayudan a cerrar esa brecha porque reservan espacio visual y ofrecen una vista previa o estado de carga, haciendo que la interfaz se sienta más rápida y más reactiva aunque el tiempo real de carga no cambie.",
		],
		metaTitle: "Galería de imágenes sin placeholder | Análisis UX",
		metaDescription:
			"Mira cómo un estado de carga vacío afecta la percepción de velocidad y por qué los placeholders mejoran la experiencia.",
	},
	static: {
		title: "Galería de imágenes - SVG estático",
		description:
			"Un SVG incrustado y sencillo da a cada imagen un estado de carga visible sin añadir una petición extra.",
		linkLabel: "Ver explicación",
		reloadLabel: "Recargar página",
		explanationTitle: "Explicación de la galería de imágenes con un SVG estático.",
		paragraphs: [
			"Frente a no tener placeholder, un placeholder estático supone una mejora clara. Como se pre-genera y se incrusta como un SVG pequeño codificado en base64, no introduce peticiones adicionales.",
			"Eso hace que aparezca al instante y proporcione retroalimentación visual inmediata sin añadir sobrecarga en tiempo de ejecución. Desde el punto de vista del rendimiento y el SEO, es una solución muy eficiente: mejora la velocidad percibida sin cambiar prácticamente el coste real de carga.",
			"Aun así, los placeholders estáticos siguen siendo un compromiso. Como no reflejan el contenido real de la imagen, pueden sentirse genéricos y desconectados de lo que va a cargarse. Técnicas más avanzadas, como blur placeholders generados a partir de la propia imagen o la extracción del color dominante, ofrecen una experiencia más coherente y precisa.",
			"En la práctica, los placeholders estáticos funcionan muy bien como una mejora de bajo coste: son claramente mejores que no usar nada, sobre todo cuando se priorizan la simplicidad, el rendimiento y el SEO.",
		],
		metaTitle: "Galería de imágenes con placeholder estático | Análisis UX",
		metaDescription:
			"Compara un placeholder SVG estático con un estado de carga vacío y comprueba por qué ayuda la retroalimentación visual.",
	},
	dynamicPlaceholder: {
		title: "Galería de imágenes - Placeholder dinámico",
		description:
			"Cada tarjeta usa un blur placeholder generado desde la imagen real con plaiceholder.",
		linkLabel: "Ver explicación",
		reloadLabel: "Recargar página",
		explanationTitle:
			"Explicación de la galería de imágenes con un blur placeholder dinámico.",
		paragraphs: [
			"Esta demo usa un placeholder generado a partir de la propia imagen en vez de un SVG genérico. La vista borrosa se deriva del recurso real, así que el estado de carga se siente mucho más cercano al contenido final.",
			"Para simular una lista real de API, la página itera sobre un conjunto estable de ids de imagen y cada tarjeta obtiene su imagen correspondiente desde picsum.photos. Así la galería se comporta como un dataset predecible, pero los placeholders se calculan dinámicamente.",
			"Este enfoque es útil cuando quieres la calidad percibida de un blur placeholder sin tener que crear imágenes estáticas a mano. Es más costoso que un SVG simple, pero normalmente ofrece una mejor coincidencia visual.",
		],
		metaTitle: "Galería de imágenes con placeholder dinámico | Análisis UX",
		metaDescription:
			"Mira cómo plaiceholder crea blur placeholders desde la imagen real y compara la experiencia de carga.",
			// Contenido extendido localizado usado en la explicación detallada de la página
			detailed: {
				intro: "Para revisar el comportamiento visual recomendamos usar el throttling de red en DevTools (por ejemplo 'Slow 3G') o activar un retraso manual en el navegador: así el blur y la transición resultan apreciables.",
				trickSummary: "En esta demo se sirven las primeras 6 imágenes sin latencia artificial y las siguientes con un pequeño retraso controlado para que el placeholder borroso se haga visible; sin este retraso la transición suele ser imperceptible en conexiones rápidas.",
				howItWorks: "El placeholder borroso se renderiza primero (normalmente una mini-imagen base64, 'blurDataURL') mientras la imagen a resolución completa se descarga en segundo plano. Cuando el recurso final termina de cargar, se sustituye el placeholder mediante una transición suave (opacidad/scale) para evitar cambios bruscos.",
				bufferExplanation: "El Buffer contiene el binario de la miniatura en el servidor. Convertir ese Buffer a base64 e incrustarlo como data URL permite que el navegador pinte el placeholder al instante sin peticiones adicionales.",
				evaluationTitle: "¿Usar una librería de placeholders?",
				advantages: [
					"Mejora la percepción de carga mostrando contenido visual inmediato.",
					"Reduce el layout shift si los placeholders respetan dimensiones.",
					"Automatiza la generación de miniaturas y blurDataURL, reduciendo trabajo manual.",
					"Ofrece mejor UX en páginas centradas en imágenes (galerías, productos, hero images).",
				],
				disadvantages: [
					"Aumenta la complejidad del pipeline de imágenes (generación de thumbs, cache, almacenamiento).",
					"Pequeño coste adicional en bytes por el blurDataURL inline, normalmente despreciable frente a la imagen final.",
					"Si las miniaturas se generan on-demand sin cache, el coste en CPU y E/S puede incrementarse.",
					"Requiere buena estrategia de cache o integración con CDN para evitar picos en el backend.",
				],
				costsImpact: "El placeholder en sí añade un pequeño overhead en bytes. El verdadero factor de coste es cómo se generan las miniaturas: pre-generadas o en build tienen coste recurrente bajo; generación on-demand eleva CPU/latencia. Use cache/CDN o precompute para controlar costes.",
				bestPractices: [
					"Pre-generar miniaturas en tiempo de subida o build y servirlas desde un CDN.",
					"Establecer cabeceras de cache agresivas para thumbnails y assets transformados.",
					"Evitar generación on-demand en endpoints de alta concurrencia sin un sistema de workers o cola.",
					"Medir LCP/CLS y comprobar que los placeholders realmente mejoran la experiencia percibida.",
				],
				whenToUse: [
					"Páginas centradas en imágenes donde lo visual impulsa la interacción (galerías, listados de productos, hero images).",
					"Cuando la estabilidad del layout (bajo CLS) y la percepción de rendimiento son prioritarias.",
				],
				whenNotToUse: [
					"Imágenes puramente decorativas con impacto UX despreciable.",
					"Entornos con infra muy limitada y sin CDN donde generar miniaturas sería costoso.",
				],
				recommendation: "Recomendado para experiencias centradas en imágenes cuando se combina con cache/CDN y miniaturas pre-generadas. Evitar delays artificiales en producción; úsalos solo para demos o QA.",
				conclusion: "Los blur placeholders son recomendables cuando la calidad visual importa. Prefiere una librería que automatice blurDataURL y combina su uso con cache o CDN para minimizar coste en tiempo de ejecución.",
			},
	},
} as const;

export default es;