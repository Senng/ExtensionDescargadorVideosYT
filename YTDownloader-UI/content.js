// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
}

// Función para mostrar una notificación temporal
function showNotification(message) {
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.position = 'fixed'
    notification.style.top = '8px'
    notification.style.right = '200px'
    notification.style.padding = '10px'
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    notification.style.color = 'white'
    notification.style.borderRadius = '5px'
    notification.style.zIndex = '9999'
    notification.style.fontSize = '16px'
    notification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
    notification.style.wordWrap = 'break-word'
    document.body.appendChild(notification)
    document.body.appendChild(notification)

    setTimeout(() => {
        document.body.removeChild(notification)
    }, 2000) // milisegundos
}

// Copia la URL del video o lista de reproducción al portapapeles
copyToClipboard(window.location.href)

// Muestra la notificación confirmando que la URL ha sido copiada
showNotification("URL copiada ✅")