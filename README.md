
# Workora

A trusted freelancing website for cilents, freelancers and entrepreneurs.


## Authors

- [@Saybal Roy](https://github.com/Saybal)


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Responsive
- Comfortable for both workers and cilents
- Easy SignIn/ SignUp facility
- Edit Profile Section
- Cilents will be safe by authetication system
- Database Storage System
- Easy Add tasks Features
- Filter job by category
- Easy Biding facility
- Readable posted task history system by cilents
- Easy Update and delete tasks features.
- FAQ Section



## Documentation

[Express Install](https://expressjs.com/)
[Google SignIn](https://firebase.google.com/docs/auth/web/google-signin)
[FaceBook SignIn](https://firebase.google.com/docs/auth/web/facebook-login)
[Password Login](https://firebase.google.com/docs/auth/web/password-auth)
[Find Document in MongoDB](https://www.mongodb.com/docs/drivers/node/current/crud/query/retrieve/)
[Insert Document in MongoDB](https://www.mongodb.com/docs/drivers/node/current/crud/insert/)
[Update Document in MongoDB](https://www.mongodb.com/docs/drivers/node/current/crud/update/)
[Delete Document in MongoDB](https://www.mongodb.com/docs/drivers/node/current/crud/delete/)
[Tailwind Insatallation](https://tailwindcss.com/docs/installation/using-vite)
[Daisyui Installation](https://daisyui.com/docs/install/)
[React Router Set Up](https://reactrouter.com/start/declarative/installation)
[Firebase Set Up](https://console.firebase.google.com/)
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER`

`DB_PASSWORDY`

This environment variables will be used to database "username" and "password".
## Installation

Install my-project cilent section with npm vite

```bash
  npm create vite@latest assignment-10-cilent -- --template react
  cd my-project
  npm install
  npm run dev
```

Install my-project server section with npm vite

```bash
  npm init -y
  --> In "package.json" --> "scripts" --> write "start": "node index.js"
  --> Create a file "index.js"
  npm i express cors mongodb dotenv
  npm i nodemon
  nodemon "index.js"
```
Install tailwindcss
```bash
npm install tailwindcss @tailwindcss/vite
--> tailwind Installation doc.
```
Install DaisyUI
```bash
npm i -D daisyui@latest
--> DaisyUI Installation doc.
```
Install  react-router

```bash
npm i react-router
```
Install SweetAlert2
```bash
npm i sweetalert2

```

Install SweetAlert
```bash
npm i sweetalert

```

Install Swiper
```bash
npm i swiper

```
Install animate.css
```bash
npm i animate.css

```

![Workora](https://i.ibb.co/BKs4WFdG/logo.png)


## Deployment

To deploy the cilent section of this project run

```bash
  npm run build
  firebase deploy
```

To deploy the server section of this project run

```bash
  vercel --prod
  ```
