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

Para subir com numero de instancia

    pm2 start index.js -i 0
    
    Significa um processo por cpu

 Para recarregar a aplicação

    pm2 reload index   
