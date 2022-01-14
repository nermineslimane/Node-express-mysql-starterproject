# Node-express-mysql-starterproject
NodeJS,express and mysql starter project 
Start with cloning the repo & Run ` npm i ` to download all the dependecies
After that create a .env file where you should define the status of your project 'development' or 'production' and according to that define a prot for each status
.env 

`STATUS=development
DEV_PORT=7000
PROD_PORT=8000`


Your .env file should be at the root folder of the project and should look like this :

<script src="https://gist.github.com/nermineslimane/27d7ea288c83869e25ca152e64a6af85.js"></script>

After setting this up you can run `npm start` or in dev mode usin nodemon `npm run dev` 
You'll have your project running according to your status
- Development

![image](https://user-images.githubusercontent.com/37881219/149552039-5001c3fd-98e1-45e8-a4e7-cf2148d0f00e.png)
- Production

![image](https://user-images.githubusercontent.com/37881219/149552169-7abfe426-3818-4fe4-a5b5-11ebb829820a.png)


