Instalar pm2
  
    npm i pm2

Iniciar pm2

    pm2 start .\index.js

Listar aplicações no ar

    pm2 ls

 Parar aplicação

    pm2 stop index
    
    pm2 stop nomeregistrado

Para inicar

    pm2 start index

Para remover aplicação

    pm2 delete index

Para iniciar aplicação com outro nome

    pm2 start index.js --name=echo