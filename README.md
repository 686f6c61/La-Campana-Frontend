
# How to run the project?
If it is the first time doing it, you need to install the dependecies running:
- **`npm install`**

After all dependencies are installed you can run your project:

- **`npm run dev`**: 


# Git Workflow - Simplificado con Development

Este repositorio utiliza un flujo de trabajo simplificado basado en Git para gestionar el desarrollo de nuevas funcionalidades y mantener la estabilidad del código en producción. 

## Estructura de Ramas

- **`main`**:  
  Contiene el código estable listo para producción. Solo se realiza merge desde `development` cuando se lanzan nuevas versiones.
  
- **`development`**:  
  Es la rama principal para integrar nuevas funcionalidades. Los desarrolladores trabajan en ramas de características basadas en esta rama.
  
- **`feature/<nombre>`**:  
  Ramas temporales para desarrollar nuevas funcionalidades. Se crean a partir de `development` y se integran nuevamente mediante Pull Requests.

- **`hotfix/<nombre>`**:  
  Ramas temporales para corregir errores críticos en producción. Se crean a partir de `main` y se integran tanto en `main` como en `development`.

---

## Flujo de Trabajo

### 1. Clonar el repositorio
```bash
git clone <repo-url>
cd <repo-name>
```

### 2. Crear una rama de funcionalidad
1. Asegúrate de estar en `development`:
   ```bash
   git checkout development
   git pull origin development
   ```
2. Crea una nueva rama para la funcionalidad:
   ```bash
   git checkout -b feature/<nombre>
   ```

### 3. Realizar cambios
1. Añade los archivos modificados:
   ```bash
   git add .
   ```
2. Realiza commits con mensajes descriptivos:
   ```bash
   git commit -m "Descripción del cambio realizado"
   ```

### 4. Subir la rama y abrir un Pull Request
1. Sube tu rama al repositorio remoto:
   ```bash
   git push origin feature/<nombre>
   ```
2. Abre un **Pull Request (PR)** desde `feature/<nombre>` hacia `development`.

### 5. Merge a `development`
- Una vez aprobado el PR, realiza el merge en `development`.
- Asegúrate de probar los cambios integrados.

Hacer el merge via consola:

1- Cambia a la rama `development`
```
git checkout development
```
2- Mergear los cambios a `development`

```
git merge feature/XXXXXXXX
```

3- Subir los cambios a `development`

```
git push origin development
```
### 6. Lanzar cambios a producción
Cuando todo esté listo y probado en `development`:
1. Cambia a la rama `main`:
   ```bash
   git checkout main
   ```
2. Haz merge de `development` a `main`:
   ```bash
   git merge development
   git push origin main
   ```

### 7. Manejar correcciones críticas
Si surge un error en producción:
1. Crea una rama `hotfix` basada en `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/<nombre>
   ```
2. Realiza los cambios necesarios, súbelos y haz merge en `main` y `development`.

---

## Ejemplo de Estructura de Ramas

```text
main           <- Código listo para producción.
  ├── development <- Integración de nuevas funcionalidades.
       ├── feature/login-page <- Funcionalidades nuevas.
       ├── feature/add-search
  ├── hotfix/fix-critical-bug <- Corrección de errores críticos.
```

---

## Buenas Prácticas
1. Mantén los mensajes de commit descriptivos y claros.
2. Trabaja en ramas independientes para cada funcionalidad.
3. Siempre abre un Pull Request para integrar cambios a `development` o `main`.
4. Realiza revisiones de código antes de hacer merge.

---

## Recursos útiles
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Git Branching y Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Tutorial de Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
