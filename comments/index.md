index.html
#comments 

HTML-файл является основой для React-приложения, настраивая необходимые метаданные, подключая стили и скрипт [[main]].tsx.

```html
<!DOCTYPE html>
<html lang="en">
```
1. **DOCTYPE и язык**:
   - `<!DOCTYPE html>` 
	   - указывает, что документ является HTML5.
   - `<html lang="en">`
	   - определяет язык документа как английский, что полезно для поисковых систем и доступности.

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    crossorigin="anonymous"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Snake3D</title>
</head>
```
2. **Метаданные и подключения**:
   - `<meta charset="UTF-8" />` устанавливает кодировку символов на UTF-8, что поддерживает множество языков и символов.
   - `<link rel="icon" type="image/svg+xml" href="/vite.svg" />` устанавливает иконку сайта (favicon), которая будет отображаться на вкладке браузера.
   - `<link rel="stylesheet" ...>` подключает библиотеку Font Awesome для использования иконок в приложении.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` делает  приложение адаптивным, устанавливая ширину в соответствии с шириной устройства.
   - `<title>Snake3D</title>` задаёт название страницы, которое будет отображаться на вкладке браузера.

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```
3. **Тело документа**:
   - `<div id="root"></div>` является контейнером, в который будет рендериться React-приложение. React будет "встраиваться" в этот элемент.
   
   - `<script type="module" src="/src/main.tsx"></script>` подключает основной файл  приложения [[main]].tsx, который инициализирует и запускает приложение React. Атрибут `type="module"` позволяет использовать ES-модули.

