# Clean DDD - Forum Application

Este projeto implementa uma aplicação de fórum utilizando os conceitos de **Clean Architecture** e **Domain Driven Design (DDD)** com TypeScript.

## 🏗️ Arquitetura

O projeto segue os princípios da Clean Architecture, organizando o código em camadas bem definidas:

### 📂 Estrutura de Pastas

```
src/
├── core/                           # Núcleo da aplicação
│   ├── entities/                   # Entidades base
│   ├── errors/                     # Erros do core
│   ├── repositories/               # Contratos de repositórios
│   └── types/                      # Tipos utilitários
│
├── domain/                         # Domínio da aplicação
│   └── forum/                      # Contexto do fórum
│       ├── application/            # Camada de aplicação
│       │   ├── repositories/       # Contratos de repositórios do domínio
│       │   └── use-cases/          # Casos de uso
│       └── enterprise/             # Camada de domínio
│           └── entities/           # Entidades do domínio
│
└── test/                           # Testes e utilitários
    ├── factories/                  # Factories para testes
    └── repositories/               # Implementações in-memory para testes
```

## 🚀 Funcionalidades

### 📝 Questões (Questions)

- ✅ Criar pergunta
- ✅ Editar pergunta
- ✅ Deletar pergunta
- ✅ Buscar pergunta por slug
- ✅ Listar perguntas recentes
- ✅ Escolher melhor resposta

### 💬 Respostas (Answers)

- ✅ Responder pergunta
- ✅ Editar resposta
- ✅ Deletar resposta
- ✅ Listar respostas de uma pergunta

### 💭 Comentários

- ✅ Comentar em pergunta
- ✅ Comentar em resposta
- ✅ Deletar comentário em pergunta
- ✅ Deletar comentário em resposta
- ✅ Listar comentários de pergunta
- ✅ Listar comentários de resposta

## 🛠️ Tecnologias

- **TypeScript** - Linguagem principal
- **Vitest** - Framework de testes
- **Either Pattern** - Tratamento de erros funcionais
- **Faker.js** - Geração de dados para testes

## 🧪 Testes

O projeto possui uma ampla cobertura de testes unitários utilizando o padrão AAA (Arrange, Act, Assert).

### Executar Testes

```bash
# Instalar dependências
npm install

# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage
```

## 📋 Conceitos Aplicados

### Clean Architecture

- **Separation of Concerns**: Cada camada tem uma responsabilidade específica
- **Dependency Inversion**: Dependências apontam sempre para dentro
- **Independence**: Domínio independente de frameworks e infraestrutura

### Domain Driven Design

- **Entities**: Objetos com identidade única
- **Value Objects**: Objetos imutáveis sem identidade
- **Use Cases**: Casos de uso da aplicação
- **Repositories**: Contratos para persistência

### Patterns Utilizados

- **Either Pattern**: Tratamento de erros sem exceções
- **Factory Pattern**: Criação de entidades para testes
- **Repository Pattern**: Abstração da camada de dados
- **Entity Pattern**: Entidades com identidade única

## 🎯 Princípios SOLID

- **S**ingle Responsibility Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

## 📖 Como Usar

```bash
# Clone o repositório
git clone https://github.com/jocyanno/CLEAN_DDD.git

# Entre no diretório
cd CLEAN_DDD

# Instale as dependências
npm install

# Execute os testes
npm test
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

🚀 **Desenvolvido com foco em Clean Code, SOLID e boas práticas de desenvolvimento!**
