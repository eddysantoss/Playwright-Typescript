# Playwright Get Started

Projeto de automação de testes end-to-end usando [Playwright](https://playwright.dev/).

## Pré-requisitos
- Node.js 18 ou superior instalado
- Git instalado

## Instalação
```bash
npm install
npx playwright install chromium
```

## Estrutura do Projeto
```
├── pages/           # Page Objects (POM)
│   ├── login.ts
│   ├── products.ts
│   ├── checkout.ts
│   └── logout.ts
├── tests/
│   ├── example.spec.ts
│   └── demo/        # Testes automatizados do Sauce Demo
│       ├── login.spec.ts
│       ├── products.spec.ts
│       ├── checkout.spec.ts
│       └── logout.spec.ts
├── playwright.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Como rodar os testes

Executar todos os testes:
```bash
npm test
```

Executar um teste específico:
```bash
npx playwright test tests/demo/login.spec.ts --project=chromium
```

Executar com navegador visível (headed):
```bash
npm run test:headed
```

Abrir a interface interativa do Playwright:
```bash
npm run test:ui
```

Validar os tipos TypeScript:
```bash
npm run typecheck
```

## Boas práticas adotadas
- Uso de Page Object Model (POM) para separar ações e seletores
- Locators centralizados no construtor dos page objects
- Asserções principais feitas nos próprios testes
- Fixture `page` fornecida pelo Playwright e isolamento entre testes
- `baseURL` centralizada para navegação nos Page Objects
- Fluxos mínimos e claros em cada teste
- Testes independentes e de fácil manutenção

## Dicas úteis
- Para gerar um novo teste, use:
  ```bash
  npx playwright codegen https://www.saucedemo.com/
  ```
- Para abrir o relatório HTML dos testes:
  ```bash
  npm run test:report
  ```

## Referências
- [Documentação Playwright](https://playwright.dev/)
- [Guia oficial de boas práticas](https://playwright.dev/docs/test-best-practices)

---

Mantenha seus page objects enxutos e seus testes claros. Bons testes! 🚀
