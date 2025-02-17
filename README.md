**ATIVIDADE STAR-CAFÉ**

A atividade foi desenvolvida para simular o sistema de gerenciamento de uma cafeteria famosa, denominada Star-Café. Utilizando a linguagem **JavaScript** da programação Back-End, a API permite que clientes façam pedidos e que o estabelecimento consiga administrar os produtos em estoque.

**Aplicativos utilizados**:
- **Postman**
- **Visual Studio Code**

**Dependências**:
- **Cors**
- **DotEnv**
- **Express**
- **Nodemon**
- **Uuid**

**Significados dos Cabeçalhos HTTP que aparecerão durante a documentação:**

- **Content-type: application/json** - Especifica o tipo de mídia da requisição ou resposta. Neste caso, todas as rotas terão o corpo no formato JSON com o padrão de caracteres UTF-8.
  
- **User-Agent: PostmanRuntime/7.43.0** - Identifica o cliente que está fazendo a requisição. Neste cenário, o cliente é o Postman.
  
- **Accept: */*** - Indica quais tipos de mídia o cliente é capaz de entender. Na atividade, o */* significa que ele aceita qualquer tipo de mídia.
  
- **Cache-Control: no-cache** - É a instrução para mecanismos de cache. O "no-cache" traduz que o cliente quer uma cópia fresca, forçando a obtenção de uma nova resposta do servidor.
  
- **Postman-Token** - É um cabeçalho específico do Postman, gerado automaticamente por ele, usado para ajudar a identificar a requisição e evitar repetições.
  
- **Host: localhost:3000** - Especifica o host e a porta do servidor de destino da requisição. O "localhost:3000" indica que a requisição está sendo enviada para um servidor rodando localmente na porta 3000.
  
- **Accept-Encoding: gzip, deflate, br** - Demonstra quais esquemas de codificação de conteúdo o cliente suporta. Neste caso, gzip, deflate e br (Brotli) são métodos de compressão usados para reduzir o tamanho dos dados transmitidos.
  
- **Connection: keep-alive** - Especifica as opções de controle de conexão para a requisição/resposta. O "keep-alive" indica que a conexão deve ser mantida aberta para possíveis requisições subsequentes.
  
- **Content-Length** - Indica o tamanho do corpo da requisição em bytes.
  
- **X-Powered-By: Express** - Indica que o servidor que gerou a resposta está usando o framework Express para Node.js.
  
- **Access-Control-Allow-Origin:** * - Permite que qualquer origem acesse o recurso. Este cabeçalho é parte das configurações de CORS (Cross-Origin Resource Sharing) que permitem o controle de acesso de recursos na web.
  
- **ETag**: ETag (Entity Tag) é uma identificador único para uma versão específica de um recurso. Esse valor é usado para determinar se o recurso mudou entre solicitações.
  
- **Date** - Simboliza a data e a hora em que a resposta foi gerada pelo servidor.
  
- **Keep-Alive: timeout=5** - Especifica o tempo em segundos que a conexão deve ser mantida viva após a resposta inicial, no caso, 5 segundos.

O exercício tem os seguintes endpoints (rotas):

 - **GET/menu**: Retornará o cardápio da cafeteria.

   **Cabeçalhos HTTP da requisição**:
   - **User-Agent:** PostmanRuntime/7.43.0
   - **Accept:** */*
   - **Cache-Control:** no-cache
   - **Postman-Token:** 19408de7-1bd3-49f1-b3c1-f0e6f60cb0f0
   - **Host:** localhost:3000
   - **Accept-Encoding:** gzip, deflate, br
   - **Connection:** keep-alive
  
   **Cabeçalhos HTTP da resposta**:
   - **X-Powered-By:** Express
   - **Access-Control-Allow-Origin:** *
   - **Content-Type:** application/json; charset=utf-8
   - **Content-Length:** 323
   - **ETag:** W/"143-RgFMZpO4zryJGhcGhjZS87R1l78"
   - **Date:** Sun, 16 Feb 2025 00:35:20 GMT
   - **Connection:** keep-alive
   - **Keep-Alive:** timeout=5

	**Corpo da resposta(JSON)**:

	 ![image](https://github.com/user-attachments/assets/497cd458-3c84-47c4-a649-cbaccab76f72)

 - **POST/order**: Permitirá a criação de um pedido pelo cliente.

   **Cabeçalhos HTTP da requisição**:
   - **Content-Type:** application/json
   - **User-Agent:** PostmanRuntime/7.43.0
   - **Accept:** */*
   - **Cache-Control:** no-cache
   - **Postman-Token:** e6a90406-7d43-4610-b98f-4f13bd110f6f
   - **Host:** localhost:3000
   - **Accept-Encoding:** gzip, deflate, br
   - **Connection:** keep-alive
   - **Content-Length:** 121

	**Corpo da requisição(JSON)**:

   ![image](https://github.com/user-attachments/assets/fab0725f-3d9c-4f2b-a64b-b3ace1e52177)

	**Cabeçalhos HTTP da resposta**:
	 - **X-Powered-By:** Express
   - **Access-Control-Allow-Origin:** *
   - **Content-Type:** application/json; charset=utf-8
   - **Content-Length:** 201
   - **ETag:** W/"c9-flaYg+jKQaWGUQorEJHDn5B+5rk"
   - **Date:** Sun, 16 Feb 2025 00:42:43 GMT
   - **Connection:** keep-alive
   - **Keep-Alive:** timeout=5

	**Corpo da resposta(JSON)**:

	![image](https://github.com/user-attachments/assets/39852ee9-2f9e-4fba-8241-013537fae89f)


 - **GET/order/:id**: Consultará um pedido pelo id.
   ![image](https://github.com/user-attachments/assets/dd73b242-5109-4d30-8be2-644261f87f8f)

   **Cabeçalhos HTTP da requisição**:
   - **User-Agent:** PostmanRuntime/7.43.0
   - **Accept:** */*
   - **Cache-Control:** no-cache
   - **Postman-Token:** 11683c56-4c0c-49dd-b9f5-ee596b04f837
   - **Host:** localhost:3000
   - **Accept-Encoding:** gzip, deflate, br
   - **Connection:** keep-alive

   **Cabeçalhos HTTP da resposta**:
   - **X-Powered-By:** Express
   - **Access-Control-Allow-Origin:** *
   - **Content-Type:** application/json; charset=utf-8
   - **Content-Length:** 188
   - **ETag:** W/"bc-4+ZF0KBioMxFp0oW0XPTLx96+Fk"
   - **Date:** Sun, 16 Feb 2025 00:18:43 GMT
   - **Connection:** keep-alive
   - **Keep-Alive:** timeout=5

   **Corpo da resposta(JSON)**:
   
   ![image](https://github.com/user-attachments/assets/063d337b-943c-426e-a62a-ee4a0a70b164)


 - **DELETE/order/:id**: Deletará um pedido pelo id.
   ![image](https://github.com/user-attachments/assets/483749e6-ec5d-49be-9524-e0f267179e81)

	 **Cabeçalhos HTTP da requisição**:
   - **User-Agent:** PostmanRuntime/7.43.0
   - **Accept:** */*
   - **Cache-Control:** no-cache
   - **Postman-Token:** 471752e8-4fb0-40bb-882d-fa8e3ba38a11
   - **Host:** localhost:3000
   - **Accept-Encoding:** gzip, deflate, br
   - **Connection:** keep-alive

	**Cabeçalhos HTTP da resposta**:
	 - **X-Powered-By:** Express
   - **Access-Control-Allow-Origin:** *
   - **Content-Type:** application/json; charset=utf-8
   - **Content-Length:** 59
   - **ETag:** W/"3b-gUPFD6gMj4ojFsIu1qTtAu99WwU"
   - **Date:** Sun, 16 Feb 2025 00:42:31 GMT
   - **Connection:** keep-alive
   - **Keep-Alive:** timeout=5

	**Corpo da resposta(JSON)**:

	 ![image](https://github.com/user-attachments/assets/466c3560-2b22-4a9c-873d-bb908e136f59)

