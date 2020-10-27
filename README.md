[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# E-commece Realtime

Esse projeto é uma API RESTfull de E-commerce com fluxo de dados em tempo real, usando Websocket, AdonisJs, NodeJs e MySQL.

##  Usar a aplicação na sua máquina

## Configuração do ambiente de desenvolvimento

1- Instalação do Docker e Docker-compose

**Atualize seus pacotes**

        sudo apt update

**Permita que o apt utilize pacoites via HTTPS:**

       sudo apt install apt-transport-https ca-certificates curl   software-properties-common

**Adicione a chave GPG**

        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

**Adicione o repositório Docker**

        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

**Atualize seus pacotes novamente**

      sudo apt update

**Certifique-se de que você irá instalar a partir do repositório do Docker**

      apt-cache policy docker-ce

**Instale o Docker**

      sudo apt install docker-ce

**Verificação final**

      sudo systemctl status docker

**Configuração do docker: adicionar seu usuário ao grupo docker**

        sudo usermod -aG docker ${USER}

        su - ${USER}

        id -nG

        sudo usermod -aG docker nome-do-usuário

**Instalando o docker-compose**

      sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

**Definir as permissões**

       sudo chmod +x /usr/local/bin/docker-compose

**Verfique as versões**

       docker -v && docker-compose -v

2- Faça o clone do projeto

       git clone https://github.com/edsondearaujo/e-commerce.API.git

## Comandos

1- Construir o container

     -
    
2- Subir o container

      -

3- Derrubar o container

      -

4- Limpar o volumes do docker-compose

       -

## Contribuir com o projeto

- Após fazer o clone do repositório.
- Rode a aplicação com o comando _adonis serve --dev_ .
- Crie uma branch e implemente sua melhoria nessa nova branch.
- Crie um Pull request, assim que seu pull request for revisado e aceito, delete sua branch.




### Referências

-