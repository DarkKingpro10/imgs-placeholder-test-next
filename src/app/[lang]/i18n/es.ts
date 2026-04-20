const es = {
	nav: {
		home: "Inicio",
		noPlaceholder: "Sin placeholder",
		static: "Estática",
		dynamicPlaceholder: "Dinámica",
		colorPlaceholder: "Dinámica color",
		switchTo: "English",
		skeleton: "Skeleton",
		localeSwitcherLabel: "Seleccionar idioma",
	},
	colorPlaceholder: {
		title: "Galería - Placeholder por color",
		description:
			"Cada tarjeta usa el color dominante como fondo de carga hasta que llega la imagen final.",
		explanationTitle: "Por qué ayuda un placeholder por color",
		paragraphs: [
			"Un placeholder por color es el fallback visual más ligero para una imagen. Reserva la forma de la tarjeta, pinta de inmediato el tono dominante y evita que la página se vea vacía mientras el asset sigue cargando.",
			"Da menos información que un blur placeholder, pero suele ser la mejor decisión cuando quieres un layout estable con casi ningún coste extra de payload o procesamiento.",
		],
		compareParagraph:
			"Frente a un blur placeholder, un placeholder por color es extremadamente ligero y no añade bytes inline. Da menos información sobre la imagen final, pero encaja bien cuando quieres retroalimentación visual mínima y el tratamiento de carga más liviano posible.",
		note: "Nota: esta vista intenta generar placeholders con la librería 'plaiceholder'. En nuestras pruebas la librería devolvió únicamente el color dominante en lugar de una miniatura borrosa (resultado de un solo color). La librería se considera 'feature-complete' y no recibirá nuevas actualizaciones. Por ello implementamos un helper nativo `getBlurPlaceholderImage` en el servidor en lugar de exportar `export default withPlaiceholder(config);`. Si prefieres tocar internals de Next.js, usa el paquete específico para Next.js que provee la librería. <b>Recomiendo usar el helper nativo para tener mejor control y evitar acoplar tu código a una librería sin mantenimiento.</b>",
		snippetTitle: "Ejemplo de implementación en servidor",
	},
	home: {
		eyebrow: "Demo de imágenes internacionalizada",
		title: "Imágenes responsivas, placeholders y experiencia de carga",
		description:
			"Empieza aquí si quieres una guía práctica de imágenes responsivas. El artículo se enfoca en las características de Image en Next.js, como fill y sizes, y luego muestra cómo aplicar las mismas reglas de tamaño con HTML y CSS en cualquier stack.",
		primaryCta: "Leer la guía",
		secondaryCta: "Ir a las demos",
		featureTitle: "Qué cubre este post",
		features: [
			"El aspect ratio primero, siempre",
			"Cómo sizes cambia la entrega de imágenes en Next.js",
			"Qué hacer cuando no usas Next.js",
		],
		metaTitle: "Guía de imágenes responsivas | Estrategias de placeholder",
		metaDescription:
			"Guía práctica para imágenes responsivas, sizes en Next.js y estrategias de placeholder que mejoran la percepción de carga sin romper la estabilidad del layout.",
		introTitle: "Reserva espacio antes de que llegue la imagen",
		introParagraphs: [
			"Un flujo de imágenes responsivas empieza reservando espacio. Si el navegador conoce el aspect ratio desde el principio, puede pintar tarjetas, hero sections y galerías estables sin saltos de layout cuando el asset termina de cargar.",
			"Los placeholders importan porque cierran la brecha entre el layout ya renderizado y los píxeles finales. No hacen que el archivo llegue antes, pero sí hacen que la interfaz se sienta intencional mientras descarga la imagen real.",
		],
		nextJsTitle: "Next.js: usa fill, sizes y ratios explícitos",
		nextJsParagraph:
			"Con Next.js, el patrón más fiable es envolver la imagen en un contenedor con aspect ratio definido, usar fill cuando la imagen deba cubrir el cuadro y describir el comportamiento en viewport con sizes para que el navegador elija el recurso correcto.",
		nextJsTips: [
			"Usa aspect ratio en el contenedor para que el navegador reserve el espacio correcto antes de que termine la carga.",
			"Añade sizes siempre que el ancho renderizado cambie por breakpoint; ayuda al navegador a elegir la candidata adecuada en vez de descargar una demasiado grande.",
			"Usa blur placeholder o placeholder por color cuando el peso visual de la imagen importa y quieres una transición de carga más suave.",
		],
		nextJsCodeTitle: "Ejemplo en Next.js",
		nativeTitle: "Sin Next.js: aplica las mismas reglas",
		nativeParagraph:
			"Las mismas ideas valen fuera de Next.js. Reserva dimensiones con width y height o con CSS aspect-ratio, usa srcset y sizes para selección responsive y mantén loading lazy para contenido debajo del pliegue.",
		nativeTips: [
			"Define width y height o aspect-ratio para que el navegador calcule el layout antes de cargar la imagen.",
			"Usa srcset junto con sizes para entrega responsive; sin eso, pantallas pequeñas suelen descargar archivos demasiado grandes.",
			"Prefiere loading=\"lazy\" y decoding=\"async\" para imágenes no críticas, pero deja las de above-the-fold directas y predecibles.",
		],
		nativeCodeTitle: "Ejemplo con HTML puro",
		placeholderTitle: "Dónde entra el placeholder",
		placeholderParagraphs: [
			"Un placeholder debe apoyar el layout, no reemplazarlo. Las mejores versiones respetan el mismo ratio que el asset final y mantienen al usuario orientado mientras llega la imagen real.",
			"Si combinas placeholders con reglas sólidas de tamaño, obtienes una interfaz estable, mejor percepción de carga y menos salto visual cuando aparece el contenido.",
		],
		checklistTitle: "Checklist práctico",
		checklistItems: [
			"Reserva espacio con aspect ratio, width/height o ambos.",
			"Usa sizes en Next.js cuando la imagen no tenga un ancho fijo en píxeles.",
			"Elige placeholders que acompañen la densidad visual de la página.",
			"Mide CLS y LCP en lugar de adivinar.",
		],
		closingTitle: "Primero el layout, luego la entrega",
		closingParagraph:
			"Ese orden es lo que hace que las páginas con muchas imágenes se sientan rápidas. Primero reservas espacio, luego eliges el origen responsive correcto y después decides si un blur, color o skeleton aporta valor.",
		plaiceholderTitle: "Por qué usamos Plaiceholder",
		plaiceholderParagraph:
			"Plaiceholder sirve también fuera de Next.js. En este proyecto elegí una implementación nativa en servidor en lugar de la integración específica para Next porque ese paquete modifica el config interno de Next.js y la librería ya está en estado feature-complete, así que preferí más control sobre la configuración. Aquí están los docs si quieres comparar enfoques.",
		plaiceholderLinkLabel: "Leer la documentación de Plaiceholder",
		plaiceholderLinkHref: "https://plaiceholder.co/docs",
		recommendationTitle: "Cómo probar las demos",
		recommendationMobile:
			"En mobile, usa el botón de recargar en cada demo para limpiar la cache de imágenes antes de comparar estados.",
		recommendationDesktop:
			"En computadora, usa el mismo paso. Si la transición sigue yendo muy rápido, baja la velocidad de red en DevTools con un perfil como Slow 3G.",
		recommendationReason:
			"Agregamos un delay artificial pequeño a las imágenes por defecto para que los placeholders, blur states y transiciones de carga sean visibles durante la demo. Sin ese delay, en conexiones rápidas el efecto casi no se nota.",
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
		explanationTitle:
			"Explicación de la galería de imágenes con un SVG estático.",
		introTitle: "Por qué funciona este fallback",
		introParagraphs: [
			"Un placeholder SVG estático es un buen punto medio cuando quieres un estado de carga visible sin traer un recurso extra. Mantiene la tarjeta estable, da algo que leer a la vista y evita la sensación vacía de un espacio sin imagen.",
			"No es consciente del contenido, así que conviene mantenerlo simple. La fuerza de este enfoque está en la previsibilidad: payload pequeño, pintura inmediata y casi nada de piezas móviles.",
		],
		exampleTitle: "Ejemplo práctico en Next.js",
		exampleNote:
			"Usa el mismo aspect ratio que la imagen final, conserva sizes precisos y alimenta blurDataURL con un SVG compacto o data URL generada.",
		implementationTitle: "Helper real usado en este proyecto",
		implementationNote:
			"Esta es la función exacta que construye el SVG incrustado. El ejemplo de arriba muestra cómo se consume en Image, mientras este bloque muestra el helper del servidor.",
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
	skeleton: {
		title: "Galería - Carga con skeleton",
		description:
			"Cada imagen muestra un skeleton hasta que termina de cargar, ofreciendo un diseño consistente y retroalimentación visual durante la carga.",
		linkLabel: "Ver explicación",
		reloadLabel: "Recargar página",
		metaTitle: "Galería con carga Skeleton | Análisis UX",
		metaDescription:
			"Explora la carga mediante skeletons para imágenes y los trade-offs frente a otras técnicas de placeholder.",
		introTitle: "Por qué los skeletons siguen siendo útiles",
		introParagraphs: [
			"Los skeletons funcionan bien cuando importa más reservar el marco del contenido que mostrar una previsualización concreta. Mantienen la estructura visible, reducen la sensación de vacío y encajan bien en lotes de imágenes.",
			"Esta página mantiene la implementación pequeña a propósito: el estado visual depende del navegador, así la lógica queda simple y predecible.",
		],
		exampleTitle: "Ejemplo de implementación",
		exampleNote:
			"La mecánica real es data-loaded más callbacks de Image. onLoadingComplete cambia el contenedor a data-loaded=\"true\" y onError hace lo mismo para que el skeleton no se quede colgado.",
		exampleCode: `<div data-loaded=\"false\" className=\"group relative aspect-square overflow-hidden rounded-xl\">\n  <div className=\"absolute inset-0 bg-gray-300 transition-opacity group-data-[loaded=true]:opacity-0\" />\n  <Image\n    fill\n    src={\`/api/slow-image?seed=${12}\`}\n    alt=\"Random image 12\"\n    className=\"object-cover opacity-0 transition-opacity group-data-[loaded=true]:opacity-100\"\n    onLoadingComplete={(img) => {\n      img.closest(\"div\")?.setAttribute(\"data-loaded\", \"true\");\n    }}\n    onError={(img) => {\n      img.currentTarget.closest(\"div\")?.setAttribute(\"data-loaded\", \"true\");\n    }}\n  />\n</div>`,
		overviewTitle: "¿Qué es este enfoque?",
		overviewParagraphs: [
			"Esta técnica usa el componente Image de Next.js combinado con atributos DOM (data-*) para controlar el estado de carga.",
			"En lugar de usar estado de React, la imagen actualiza su contenedor padre una vez que ha terminado de cargar, permitiendo que el CSS maneje la transición.",
		],
		howItWorksTitle: "Cómo funciona",
		howItWorksList: [
			"Se renderiza una capa skeleton sobre la imagen.",
			"El contenedor empieza con data-loaded=\"false\".",
			"Cuando la imagen termina de cargar, el atributo se actualiza.",
			"Transiciones CSS desvanecen el skeleton y revelan la imagen.",
		],
		visualHint: "Evita re-renderizados de React y delega el estado visual al navegador, siendo eficiente para cuadrículas grandes.",
		prosTitle: "Ventajas",
		prosList: [
			"Sin estado React → menos re-renderizados",
			"Ideal para cuadrículas grandes",
			"Carga suave",
			"Simple y reutilizable",
		],
		tradeoffsTitle: "Consideraciones",
		tradeoffsList: [
			"Sin vista previa de la imagen (solo skeleton)",
			"Requiere ligera manipulación del DOM",
			"Menos rico visualmente que blur placeholders",
		],
		seoTitle: "Impacto en SEO",
		seoParagraphs: [
			"Este enfoque no afecta negativamente al SEO. La imagen real sigue presente en el DOM y los motores pueden rastrearla si se proporcionan atributos alt adecuados.",
			"Como el skeleton es solo una capa visual, no interfiere con el indexado. Además, usar Next.js aporta entrega de imágenes optimizada, lo que puede mejorar métricas como LCP.",
		],
		comparisonTitle: "Cuándo usarlo",
		comparisonParagraphs: [
			"Perfecto para contenido dinámico como galerías, feeds o paneles donde las imágenes se cargan frecuentemente y el rendimiento importa.",
			"Si necesitas previsualizaciones más precisas, considera blur placeholders o herramientas como Plaiceholder. Para simplicidad y escalabilidad, el enfoque skeleton suele ser la mejor opción.",
		],
	},
	dynamicPlaceholder: {
		title: "Galería de imágenes - Placeholder dinámico",
		description:
			"Cada tarjeta usa un blur placeholder generado desde la imagen real con plaiceholder.",
		linkLabel: "Ver explicación",
		reloadLabel: "Recargar página",
		explanationTitle:
			"Explicación de la galería de imágenes con un blur placeholder dinámico.",
		heroTitle: "Por qué el blur se siente más cercano al resultado final",
		heroParagraph:
			"Esta demo usa un placeholder derivado de la imagen real, así que el estado de carga se conecta mejor con el contenido final y no se ve genérico. El base64 que sale del servidor va directo a blurDataURL.",
		listTitle: "Qué demuestra esta configuración",
		listItems: [
			"blurDataURL derivado de la imagen real",
			"Conjunto determinista de imágenes para comparar",
			"Delay solo para hacer visible la transición durante la demo",
		],
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
			intro:
				"Para revisar el comportamiento visual recomendamos usar el throttling de red en DevTools (por ejemplo 'Slow 3G') o activar un retraso manual en el navegador: así el blur y la transición resultan apreciables.",
			trickSummary:
				"En esta demo se sirven las primeras 6 imágenes sin latencia artificial y las siguientes con un pequeño retraso controlado para que el placeholder borroso se haga visible; sin este retraso la transición suele ser imperceptible en conexiones rápidas.",
			howItWorks:
				"El placeholder borroso se renderiza primero (normalmente una mini-imagen base64, 'blurDataURL') mientras la imagen a resolución completa se descarga en segundo plano. Cuando el recurso final termina de cargar, se sustituye el placeholder mediante una transición suave (opacidad/scale) para evitar cambios bruscos.",
			// Notas sobre plaiceholder y decisión de implementación
			libraryNote:
				"Nota: esta demo referencia la librería 'plaiceholder' para la generación de placeholders en servidor. En algunos casos devuelve solo el color dominante en vez de una miniatura borrosa, resultando en un placeholder de un solo color.",
			implementationNote:
				"Decisión: dado que 'plaiceholder' está en estado feature-complete y es poco probable que reciba actualizaciones, implementamos `getBlurPlaceholderImage` de forma nativa en el servidor (ejemplo incluido) en lugar de exportar `export default withPlaiceholder(config);`. Si prefieres no tocar internals de Next.js, usa el paquete específico para Next.js que ofrece la librería.",
			bufferExplanation:
				"El Buffer contiene el binario de la miniatura en el servidor. Convertir ese Buffer a base64 e incrustarlo como data URL permite que el navegador pinte el placeholder al instante sin peticiones adicionales.",
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
			costsImpact:
				"El placeholder en sí añade un pequeño overhead en bytes. El verdadero factor de coste es cómo se generan las miniaturas: pre-generadas o en build tienen coste recurrente bajo; generación on-demand eleva CPU/latencia. Use cache/CDN o precompute para controlar costes.",
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
			recommendation:
				"Recomendado para experiencias centradas en imágenes cuando se combina con cache/CDN y miniaturas pre-generadas. Evitar delays artificiales en producción; úsalos solo para demos o QA.",
			conclusion:
				"Los blur placeholders son recomendables cuando la calidad visual importa. Prefiere una librería que automatice blurDataURL y combina su uso con cache o CDN para minimizar coste en tiempo de ejecución.",
		},
	},
} as const;

export default es;
