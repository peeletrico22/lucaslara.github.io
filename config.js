// ============================================================
//  ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
// ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
// ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
// ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
//
// NUTRIKETO — PAINEL DE CONTROLE CENTRAL
// ============================================================
// Edite SOMENTE este arquivo para atualizar a página.
// Após editar, salve o arquivo e recarregue o navegador.
// NÃO é necessário tocar em index.html, style.css ou script.js
// ============================================================

window.CONFIG = {

  // ============================================================
  // 1. INFORMAÇÕES DO PRODUTO
  // ============================================================
  produto: {
    nome: "NutriKeto",
    slogan: "Guia Completo da Dieta Cetogênica para Emagrecimento Rápido",
    preco_atual: "R$ 39,90",
    preco_antigo: "R$ 97,00",
    parcelas: "ou 3x de R$13,30 sem juros",
  },

  // ============================================================
  // 2. IMAGENS
  // ============================================================
  imagens: {
    capa_3d: "Capa 3D.png",
    capa_2d: "Capa 2D.png",
    favicon: "Capa 2D.png",
    og_image: "Capa 2D.png",
  },

  // ============================================================
  // 3. VÍDEO DE VENDAS
  // ============================================================
  video: {
    ativo: true,
    youtube_id: "8UHEuNlSylw",
    // ⚠️ Cole SOMENTE o ID do YouTube aqui (o trecho após "?v=")
    // Exemplo: se a URL é youtube.com/watch?v=13SFe0UQiQE → cole apenas: 13SFe0UQiQE
  },

  // ============================================================
  // 4. LINKS DE PAGAMENTO / CHECKOUT
  // ============================================================
  checkout: {
    link_principal: "#",
    // SUBSTITUIR PELO LINK DA KIWIFY — ex: "https://pay.kiwify.com.br/XXXXXXX"
    link_bump: "",
  },

  // ============================================================
  // 5. CONTATO E SUPORTE
  // ============================================================
  contato: {
    whatsapp_numero: "5531999999999",
    whatsapp_mensagem: "Olá! Tenho uma dúvida sobre o NutriKeto.",
    email_suporte: "suporte@nutriketo.com.br",
  },

  // ============================================================
  // 6. TEXTOS DA PÁGINA — COPY PRINCIPAL
  // ============================================================
  copy: {

    // ----------------------------------------------------------
    // BARRA DO TOPO — Urgência imediata, antes de qualquer leitura
    // Técnica: escassez + especificidade de preço + ação futura
    // ----------------------------------------------------------
    barra_topo: "🔥 ÚLTIMAS HORAS: Acesso ao NutriKeto por R$39,90 — O preço volta para R$97 hoje à meia-noite",

    // ----------------------------------------------------------
    // HERO — A seção mais importante da página
    // Técnica: Headline em 2 partes (dor + curiosidade), subheadline
    // com promessa específica, prova social com número concreto
    // ----------------------------------------------------------
    hero_badge: "✦ Método Utilizado por +4.200 Mulheres Brasileiras",

    // Headline usa o padrão "você já fez X, mas Y continua acontecendo?"
    // — fórmula de identificação imediata com a dor
    hero_headline: "Por Que Você Não Consegue Emagrecer — Mesmo Fazendo Tudo Certo?",
    hero_headline_destaque: "Emagrecer",

    // Subheadline: promessa específica + eliminação das objeções principais
    // (fome, academia, sofrimento) + janela de tempo concreta
    hero_subheadline: "A resposta está no seu metabolismo, não na sua força de vontade. Mulheres de 25 a 60 anos estão usando a dieta cetogênica para perder de 4 a 12 kg no primeiro mês — comendo bem, sem academia e sem contar caloria.",

    hero_prova_social: "+4.200 mulheres já ativaram a queima de gordura com o NutriKeto",

    // CTA com verbo de ação + benefício emocional
    hero_cta: "QUERO ATIVAR MEU MODO QUEIMA DE GORDURA →",
    hero_cta_nota: "🔒 Pagamento seguro via Kiwify · Acesso imediato em qualquer dispositivo",

    // ----------------------------------------------------------
    // VÍDEO
    // ----------------------------------------------------------
    video_titulo: "Assista antes de continuar: a explicação de 3 minutos que vai mudar tudo",
    video_placeholder_titulo: "Adicione aqui seu vídeo de vendas principal.",
    video_placeholder_nota: "Dica: páginas com vídeo acima da dobra convertem até 80% mais. Ideal entre 3 e 7 minutos.",

    // ----------------------------------------------------------
    // PROBLEMA — Técnica PAS (dor + agitação + solução)
    // Cada item usa linguagem de autoidentificação ("eu sou ela")
    // ----------------------------------------------------------
    problema_titulo: "Leia Cada Item Abaixo Com Atenção. Quantos Descrevem Você?",
    problema_items: [
      "Já perdeu peso várias vezes — mas ele sempre volta, e com mais gordura do que antes",
      "Sente fome constante que sabota qualquer dieta antes do fim da semana",
      "Já cortou carboidrato, mas ficou sem energia, irritada e desistiu em dias",
      "Se olha no espelho e não reconhece mais o próprio corpo",
      "Come pouco, mas a balança não se move — parece que seu metabolismo travou de vez",
      "Não tem tempo nem disposição para receitas complicadas ou ingredientes caros",
      "Passou dos 35, 40 ou 50 anos e sente que seu corpo mudou e não obedece mais",
      "Já gastou dinheiro com dietas, shakes e programas que prometem muito e entregam nada",
    ],

    // Parágrafo de transição: quebra a culpa, direciona a causa raiz
    // Técnica: reframe (o problema não é você, é o método)
    problema_conclusao: "Se você marcou 2 ou mais itens — preste atenção porque o que vou te dizer agora é importante: a culpa não é sua. Você está usando a estratégia errada para o seu tipo de corpo e fase da vida.",

    // ----------------------------------------------------------
    // AGITAÇÃO — Amplifica as consequências de não agir
    // Técnica: future pacing negativo (o que acontece se continuar assim)
    // ----------------------------------------------------------
    agitacao_titulo: "O Que Acontece Se Você Continuar Tentando do Mesmo Jeito…",
    agitacao_texto: "Cada novo ano começa com uma nova promessa. Cada nova dieta traz uma nova frustração. Enquanto isso, o metabolismo fica mais lento, a gordura abdominal se instala, a energia some — e a roupa que você ama continua guardada no fundo do armário. Não é exagero: mulheres que ignoram o sinal de alerta do metabolismo têm até 3x mais dificuldade para emagrecer com o passar dos anos. O corpo não para de mudar. A questão é: você vai esperar mais um ano?",

    // ----------------------------------------------------------
    // SOLUÇÃO — Apresenta o produto como a única saída lógica
    // Técnica: mecanismo único + especificidade científica simplificada
    // ----------------------------------------------------------
    solucao_badge: "✦ A Virada Que Você Estava Esperando",
    solucao_titulo: "Seu Corpo Sabe Queimar Gordura. Ele Só Precisa da Chave Certa Para Isso.",
    solucao_texto: "A dieta cetogênica não é uma dieta de fome. É uma reprogramação metabólica: você remove o combustível errado (carboidratos em excesso) e o corpo passa a usar a gordura acumulada como energia — 24 horas por dia, mesmo enquanto você dorme. O NutriKeto foi criado para guiar mulheres de 25 a 60 anos por esse processo de forma simples, segura e sem abrir mão do prazer de comer bem.",

    // ----------------------------------------------------------
    // COMO FUNCIONA — 3 passos
    // Técnica: simplicidade radical — quanto mais simples parece, mais comprável
    // ----------------------------------------------------------
    passos_titulo: "Simples Assim. Três Passos Para Começar Hoje.",
    passos: [
      {
        numero: "01",
        icone: "📖",
        titulo: "Leia o Guia (em 1 tarde)",
        texto: "O PDF chega no seu e-mail em segundos após o pagamento. Linguagem simples, sem termos médicos. Qualquer mulher entende e consegue aplicar.",
      },
      {
        numero: "02",
        icone: "🛒",
        titulo: "Uma Ida ao Mercado",
        texto: "Use a lista de compras inclusa. Tudo que você precisa está no mercado do seu bairro. Sem produtos exóticos, sem suplementos caros.",
      },
      {
        numero: "03",
        icone: "⚖️",
        titulo: "Sinta a Diferença na 1ª Semana",
        texto: "A maioria das mulheres relata menos inchaço, mais energia e roupas mais folgadas já nos primeiros 7 dias. A balança vem logo depois.",
      },
    ],

    // ----------------------------------------------------------
    // BENEFÍCIOS — Foco em transformação, não em características
    // Técnica: cada benefício responde "o que isso muda na minha vida?"
    // ----------------------------------------------------------
    beneficios_titulo: "O Que Está Esperando Por Você Dentro do NutriKeto",
    beneficios_cta: "QUERO ESSES RESULTADOS AGORA →",
    beneficios: [
      {
        icone: "🔥",
        titulo: "Cetose em Até 72 Horas",
        texto: "O passo a passo exato para ativar o estado de queima de gordura no seu corpo — sem erro, sem sofrimento e mais rápido do que você imagina.",
      },
      {
        icone: "🍽️",
        titulo: "A Lista Completa do Que Comer",
        texto: "Alimentos liberados, proibidos e os 'falsos amigos' que parecem saudáveis mas travam a cetose. Sem adivinhação, sem erro.",
      },
      {
        icone: "📅",
        titulo: "4 Semanas de Cardápio Pronto",
        texto: "Café da manhã, almoço, jantar e lanches. Você nunca vai ter que pensar 'o que vou comer hoje' — está tudo planejado e explicado.",
      },
      {
        icone: "🥘",
        titulo: "Receitas Que Você Vai Querer Repetir",
        texto: "Pratos gostosos, rápidos e cetogênicos. Feitos com ingredientes do mercado, sem precisar cozinhar horas ou lavar toneladas de panela.",
      },
      {
        icone: "⚡",
        titulo: "Como Acabar com o Cansaço dos Primeiros Dias",
        texto: "O famoso 'keto flu' afasta muitas mulheres nos primeiros dias. O NutriKeto ensina como evitá-lo — ou superar em menos de 48 horas.",
      },
      {
        icone: "🏆",
        titulo: "O Método Para Não Engordar de Volta",
        texto: "A fase de manutenção que 99% dos guias ignoram. É ela que determina se o resultado fica ou vai embora em 30 dias.",
      },
    ],

    // ----------------------------------------------------------
    // BÔNUS — Aumenta o valor percebido sem aumentar o preço
    // Técnica: ancoragem de valor (mostrar preço separado de cada bônus)
    // ----------------------------------------------------------
    bonus_titulo: "Além do Guia, Você Recebe Estes Bônus Sem Custo Extra",
    bonus_badge: "🎁 Bônus Exclusivos Inclusos Hoje",
    bonus_valor_total_de: "R$161,00",
    bonus_items: [
      {
        tag: "BÔNUS #1 — GRÁTIS",
        icone: "📋",
        titulo: "Lista de Compras da 1ª Semana Keto",
        texto: "Uma lista detalhada, já separada por seção do mercado (laticínios, carnes, hortifrúti…), para você chegar ao mercado e sair em 20 minutos com tudo certo.",
        valor: "Valor individual: R$ 27,00 — incluso gratuitamente",
      },
      {
        tag: "BÔNUS #2 — GRÁTIS",
        icone: "🧾",
        titulo: "10 Receitas Keto em Até 20 Minutos",
        texto: "As receitas mais pedidas pelas alunas: práticas, saborosas e 100% cetogênicas. Do café da manhã ao jantar — com tempo de preparo real de 20 minutos ou menos.",
        valor: "Valor individual: R$ 37,00 — incluso gratuitamente",
      },
    ],

    // ----------------------------------------------------------
    // DEPOIMENTOS — Prova social com especificidade
    // Técnica: resultado concreto + identificação (idade + cidade)
    // SUBSTITUA pelos depoimentos reais dos seus clientes
    // ----------------------------------------------------------
    depoimentos_titulo: "Resultados Reais de Mulheres Reais",
    depoimentos: [
      {
        iniciais: "M.S.",
        nome: "Mariana S., 38 anos — São Paulo/SP",
        texto: "Tentei low carb, jejum intermitente, shake de proteína… tudo. Sempre ficava com fome e desistia. O NutriKeto foi diferente porque me explicou o porquê de cada coisa. Quando você entende, fica muito mais fácil manter. Em 3 semanas minhas calças já estavam folgadas.",
        resultado: "✅ 7kg a menos em 3 semanas",
        foto: "",
        // Para adicionar foto: coloque o caminho da imagem aqui (ex: "fotos/mariana.jpg")
      },
      {
        iniciais: "A.L.",
        nome: "Ana Lúcia M., 44 anos — Belo Horizonte/MG",
        texto: "Depois dos 40 parecia que meu corpo tinha dado uma pausa. Fazia tudo certo e não saía do lugar. O guia me mostrou que o problema era o carboidrato escondido que eu nem percebia que comia. Resultado: 11kg em 6 semanas e minha médica ficou surpresa com meus exames.",
        resultado: "✅ 11kg a menos em 6 semanas",
        foto: "",
      },
      {
        iniciais: "C.R.",
        nome: "Cíntia R., 51 anos — Rio de Janeiro/RJ",
        texto: "Com 51 anos eu achei que tinha perdido a batalha. Menopausa, metabolismo lento, tudo contra mim. O NutriKeto me provou que eu estava errada. Emagreci 9kg, voltei a usar roupas que estavam guardadas há 4 anos e minha energia melhorou muito.",
        resultado: "✅ 9kg a menos em 5 semanas",
        foto: "",
      },
    ],

    // ----------------------------------------------------------
    // OFERTA / PREÇO — Seção de conversão direta
    // Técnica: ancoragem (preço antigo vs atual) + lista de valor incluído
    // ----------------------------------------------------------
    oferta_badge: "🔥 Oferta Especial — Válida Por Tempo Limitado",
    oferta_titulo: "Tudo Isso Por Menos do Que Você Gasta em Uma Refeição de Delivery",
    oferta_itens: [
      "Guia NutriKeto completo em PDF — leitura em celular, tablet ou computador",
      "Plano alimentar de 4 semanas com cardápio diário completo",
      "Lista de compras organizada para a 1ª semana",
      "10 Receitas cetogênicas rápidas (bônus #1)",
      "Lista mestre de alimentos liberados e proibidos (bônus #2)",
      "Acesso imediato logo após o pagamento — sem esperar e-mail",
      "Suporte por e-mail para dúvidas",
    ],
    oferta_cta: "QUERO MEU ACESSO IMEDIATO — R$39,90",
    oferta_meta: [
      "🔒 Pagamento 100% seguro via Kiwify",
      "💳 Cartão, Pix ou Boleto",
      "📱 Acesso imediato — leia agora no celular",
    ],

    // ----------------------------------------------------------
    // GARANTIA — Elimina o risco percebido, última barreira antes da compra
    // Técnica: inversão de risco total (o risco fica com o vendedor)
    // ----------------------------------------------------------
    garantia_titulo: "Garantia Total de 7 Dias — Sem Burocracia, Sem Pergunta",
    garantia_texto: "Você não precisa decidir agora se o NutriKeto vai funcionar para você. Teste por 7 dias. Se por qualquer motivo — mesmo sem motivo nenhum — você não quiser continuar, basta mandar um e-mail e devolvemos cada centavo. Sem formulário. Sem pergunta. Sem demora. Você não tem absolutamente nada a perder. O único risco aqui é nosso.",

    // ----------------------------------------------------------
    // FAQ — Antecipa objeções e as resolve antes da decisão final
    // Técnica: escrever a pergunta como o cliente pensaria, não como empresa
    // ----------------------------------------------------------
    faq_titulo: "Suas Dúvidas, Respondidas com Honestidade",
    faq_items: [
      {
        pergunta: "Funciona mesmo para quem já tentou tudo e não conseguiu emagrecer?",
        resposta: "Sim — e é exatamente para esse perfil que o NutriKeto foi criado. A maioria das mulheres que não consegue emagrecer está usando a abordagem errada para o seu metabolismo. A dieta cetogênica age de forma diferente: em vez de reduzir calorias (que diminui o metabolismo), ela muda a fonte de energia do corpo. O resultado é uma queima de gordura mais eficiente sem a sensação de fome constante.",
      },
      {
        pergunta: "Preciso de academia ou exercícios para ter resultado?",
        resposta: "Não. O NutriKeto é 100% focado na alimentação. Exercício físico é bem-vindo e potencializa os resultados, mas não é obrigatório. Muitas das nossas alunas tiveram ótimos resultados sem nenhuma atividade física, especialmente no início.",
      },
      {
        pergunta: "Funciona para mulheres acima de 45 ou 50 anos?",
        resposta: "Muito bem, na verdade. A dieta cetogênica é especialmente eficaz para mulheres nessa fase porque ajuda a equilibrar a insulina e reduzir a inflamação — dois dos principais responsáveis pelo ganho de peso durante e após a menopausa. Temos alunas com 55, 60 anos que tiveram resultados melhores do que esperavam.",
      },
      {
        pergunta: "É difícil seguir a dieta cetogênica no dia a dia?",
        resposta: "A maior dificuldade costuma ser a primeira semana — e o NutriKeto foi criado justamente para tornar essa transição o mais suave possível. A partir da segunda semana, a fome diminui naturalmente, a energia aumenta e a dieta começa a fazer parte da rotina sem esforço.",
      },
      {
        pergunta: "Como vou receber o ebook após o pagamento?",
        resposta: "Imediatamente após a confirmação do pagamento, você receberá um e-mail da Kiwify com o link de acesso ao PDF. Pagamentos por Pix costumam ser liberados em menos de 5 minutos. Se não encontrar o e-mail, verifique a caixa de spam.",
      },
      {
        pergunta: "E se eu não gostar? Perco meu dinheiro?",
        resposta: "Não. Você tem 7 dias de garantia total e incondicional. Se não ficar satisfeita — por qualquer motivo — basta enviar um e-mail pedindo o reembolso. Devolveremos 100% do valor sem perguntas. Simples assim.",
      },
    ],

    // ----------------------------------------------------------
    // CTA FINAL — Último empurrão antes da decisão
    // Técnica: urgência + custo da inação + promessa de transformação
    // ----------------------------------------------------------
    final_titulo: "Cada Dia Que Você Espera É Mais Um Dia Longe Do Corpo Que Você Quer",
    final_texto: "Você já sabe o que acontece quando não faz nada — porque já viveu isso antes. Agora você tem na frente uma ferramenta que já ajudou mais de 4.200 mulheres. O preço especial é de R$39,90. A garantia é de 7 dias. O risco é zero. O que falta?",
    final_cta: "SIM, QUERO EMAGRECER COM O NUTRIKETO AGORA",

    // ----------------------------------------------------------
    // EXIT INTENT — Popup para quem tenta sair da página
    // Técnica: reancoragem de preço + urgência real
    // ----------------------------------------------------------

    // ----------------------------------------------------------
    // RODAPÉ
    // ----------------------------------------------------------
    rodape_aviso_resultados: "Os resultados individuais podem variar. Os depoimentos apresentados são experiências reais de clientes, mas não representam resultados típicos garantidos.",
    rodape_aviso_medico: "Este conteúdo tem finalidade informativa e educativa e não substitui acompanhamento médico ou nutricional profissional. Consulte um profissional de saúde antes de iniciar qualquer mudança alimentar.",
    rodape_plataforma: "Produto distribuído pela plataforma Kiwify. Pagamento 100% seguro.",
    rodape_ano: "2026",
    rodape_link_privacidade: "Política de Privacidade",
    rodape_link_termos: "Termos de Uso",
    rodape_link_suporte: "Suporte",
    rodape_links: {
      politica_privacidade: "politica-privacidade.html",
      termos_uso: "termos-uso.html",
    },
  },

  // ============================================================
  // 7. COMPORTAMENTOS / FUNIL
  // ============================================================
  funil: {
    delay_botao_segundos: 7,
    contador_minutos: 20,
    exit_intent_ativo: true,
    exit_intent_titulo: "⚠️ Espera — Antes de Ir Embora…",
    exit_intent_texto: "Você está saindo sem garantir seu acesso por R$39,90. Quando voltar, não garantimos que o preço ainda estará disponível.",
    exit_intent_cta: "QUERO GARANTIR MEU ACESSO AGORA →",
    exit_intent_recusa: "Não, prefiro continuar do jeito que está →",
  },

  // ============================================================
  // 8. PIXEL DO META ADS
  // ============================================================
  pixel: {
    ativo: false,
    id: "PIXEL_ID_AQUI",
    // Como obter: business.facebook.com > Gerenciador de Eventos > Pixels
  },

  // ============================================================
  // 9. SEO / META TAGS
  // ============================================================
  seo: {
    titulo_aba: "NutriKeto — Por Que Você Não Consegue Emagrecer Mesmo Fazendo Tudo Certo?",
    descricao: "Mulheres de 25 a 60 anos estão perdendo de 4 a 12 kg no primeiro mês com a dieta cetogênica — sem fome, sem academia, sem sofrimento. Descubra o método completo.",
    indexar: false,
  },

};
// ============================================================
// FIM DO PAINEL DE CONTROLE
// Salve o arquivo e recarregue o navegador para ver as mudanças
// ============================================================