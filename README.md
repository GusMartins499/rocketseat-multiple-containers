# Objetivos do desafio
- [X] Criação do Dockerfile: Desenvolva um arquivo Dockerfile para uma aplicação de sua escolha, utilizando uma imagem base adequada.
- [ ] Definição do Docker Compose: Configure dois serviços no Docker Compose: o serviço da aplicação e um banco de dados (MySQL, PostgreSQL, MongoDB, etc.).
- [ ] Configuração de Volumes: Garanta a persistência dos dados do banco de dados configurando volumes apropriados.
- [ ] Criação de Rede Customizada: Crie uma rede customizada para permitir a comunicação isolada entre os containers.
- [ ] Utilização de Variáveis de Ambiente: Utilize variáveis de ambiente para configurar diferentes aspectos da aplicação, como URLs do banco de dados, chaves de acesso e outras configurações sensíveis.
- [ ] Documentação: Documente o processo de configuração em um arquivo README.md, incluindo comandos para executar os containers, configurar as variáveis de ambiente e testar a conexão entre eles.
 

## Criação do Dockerfile
Commit: [Dockerfile](https://github.com/GusMartins499/rocketseat-multiple-containers/commit/b70155ab3a09fb1a5e4739a786fd51f834049d02)

```bash
$ docker build -t api-template-nestjs:v1 .
```
```bash
$ docker run --name template-nestjs -p 3000:3000 -d api-template-nestjs:v1
```