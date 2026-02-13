

# Trocar favicon e adicionar mascara de telefone

## 1. Trocar o favicon

- Copiar o arquivo `user-uploads://VitaSigma_favicon_48x48.png` para `public/favicon.png`
- Atualizar `index.html` para referenciar o novo arquivo:
  ```html
  <link rel="icon" type="image/png" href="/favicon.png" />
  ```

## 2. Mascara no campo telefone do chatbot

Adicionar formatacao automatica no campo de telefone do `ChatBot.tsx` no formato **(XX) XXXXX-XXXX**:

- Criar uma funcao `maskPhone` que formata o valor digitado
- Aplicar a mascara no `onChange` do input de telefone
- Definir `maxLength={15}` para limitar o campo

## Secao tecnica

**Arquivos alterados:**
- `index.html` -- atualizar referencia do favicon
- `src/components/ChatBot.tsx` -- adicionar funcao de mascara e aplicar no input de telefone

**Funcao de mascara:**
```typescript
const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};
```

Nenhuma dependencia nova sera necessaria.

