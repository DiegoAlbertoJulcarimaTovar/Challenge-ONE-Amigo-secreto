# Sorteo de Amigo Secreto

Este proyecto es una implementación sencilla en JavaScript, HTML y CSS para realizar un **sorteo de amigos**. El usuario puede agregar nombres a una lista y posteriormente seleccionar uno de ellos de forma aleatoria.

## Características

* **Agregar amigos**: Permite registrar nombres siempre que no estén repetidos y que el campo no esté vacío.
* **Mostrar lista de amigos**: Despliega en pantalla la lista actualizada de participantes.
* **Sorteo aleatorio**: Selecciona un amigo al azar de la lista disponible.
* **Validaciones**:

  * No se permite agregar nombres vacíos.
  * No se permiten nombres duplicados.
  * El sorteo no se ejecuta si no hay suficientes participantes.

## Archivos principales

* `index.html` → Estructura HTML del proyecto.
* `style.css` → Estilos visuales.
* `script.js` → Lógica del sorteo y manejo de la lista.

## Ejecución

1. Abrir `index.html` en un navegador web.
2. Escribir un nombre en el campo de texto y presionar **Agregar Amigo**.
3. Una vez añadidos varios amigos, presionar **Sortear Amigo** para obtener un ganador.

## Ejemplo de uso

```
Entrada:
- Juan
- María
- Pedro

Salida:
El amigo sorteado es: María
```
