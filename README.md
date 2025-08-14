# Objetivos do desafio
- [X] Criação do Dockerfile: Desenvolva um arquivo Dockerfile para uma aplicação de sua escolha, utilizando uma imagem base adequada.
- [X] Definição do Docker Compose: Configure dois serviços no Docker Compose: o serviço da aplicação e um banco de dados (MySQL, PostgreSQL, MongoDB, etc.).
- [X] Configuração de Volumes: Garanta a persistência dos dados do banco de dados configurando volumes apropriados.
- [X] Criação de Rede Customizada: Crie uma rede customizada para permitir a comunicação isolada entre os containers.
- [X] Utilização de Variáveis de Ambiente: Utilize variáveis de ambiente para configurar diferentes aspectos da aplicação, como URLs do banco de dados, chaves de acesso e outras configurações sensíveis.
- [X] Documentação: Documente o processo de configuração em um arquivo README.md, incluindo comandos para executar os containers, configurar as variáveis de ambiente e testar a conexão entre eles.
 
 # Setup do projeto
 Crie um arquivo .env com as seguintes variáveis
  - MYSQL_ROOT_PASSWORD
  - MYSQL_DATABASE
  - MYSQL_USER
  - MYSQL_PASSWORD

## Criação do Dockerfile
Commit: [Dockerfile](https://github.com/GusMartins499/rocketseat-multiple-containers/commit/b70155ab3a09fb1a5e4739a786fd51f834049d02)

```bash
$ docker build -t api-template-nestjs:v1 .
```
```bash
$ docker run --name template-nestjs -p 3000:3000 -d api-template-nestjs:v1
```

## Definição do docker-compose
Commit: [docker-compose.yml](https://github.com/GusMartins499/rocketseat-multiple-containers/commit/59de2dfa7946f5f4835587bcf88fcfef5079e88b)

## Criação de Rede Customizada
Commit: [docker-compose.yml](https://github.com/GusMartins499/rocketseat-multiple-containers/commit/bae8e622d7940ba51274b57f87f3a6e4e3501dcc)

```bash
$ docker network create api-network
```

```bash
$ docker run -d --network api-network -p 3306:3306 -e MYSQL_ROOT_PASSWORD= -e MYSQL_DATABASE= -e MYSQL_USER= -e MYSQL_PASSWORD= --name mysql mysql:8
```

```bash
$ docker run --network api-network -p 3000:3000 -d api-template-nestjs:v2
```

## Configuração de Volumes
Commit: [docker-compose.yml](https://github.com/GusMartins499/rocketseat-multiple-containers/commit/2e2c98d7b0ca3ae750c8479d0416ef9b6468a655)

```bash
$ docker volume create db-volume
```

```bash
$ docker run -v db-volume:/usr/src/app --network api-network -p 3000:3000 -d api-template-nestjs:v6
```