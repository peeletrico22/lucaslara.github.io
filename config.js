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
    preco_atual: "R$ 59,90",
    preco_antigo: "R$ 97,00",
    parcelas: "ou 3x de R$19,97 sem juros",
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
  // 3. LINKS DE PAGAMENTO / CHECKOUT
  // ============================================================
  checkout: {
    link_principal: "https://pay.kiwify.com.br/2L3JkOB",
    link_bump: "",
  },

  // ============================================================
  // 4. CONTATO E SUPORTE
  // ============================================================
  contato: {
    whatsapp_numero: "5531997038092",
    whatsapp_mensagem: "Olá! Tenho uma dúvida sobre o NutriKeto.",
    email_suporte: "suporte@nutriketo.com.br",
  },

  // ============================================================
  // 5. TEXTOS DA PÁGINA — COPY PRINCIPAL
  // ============================================================
  copy: {
    barra_topo: "🔥 Acesso imediato por R$59,90 — o contador está rodando e a condição some com ele",

    hero_badge: "✦ Sem enrolação. Método direto. Resultado desde a primeira semana.",
    hero_headline: "Você não falhou na dieta. A dieta é que nunca te deu um caminho de verdade",
    hero_headline_destaque: "não falhou",
    hero_subheadline: "O NutriKeto entrega o que faltava: um plano claro, cardápio pronto e o passo a passo para ativar a queima de gordura sem precisar reinventar tudo do zero toda segunda-feira.",
    hero_prova_social: "+4.200 mulheres já pararam de adivinhar e começaram a ver resultado",
    hero_cta: "Quero meu acesso agora",
    hero_cta_nota: "🔒 Acesso liberado imediatamente após o pagamento",

    decisao_titulo: "Tudo o que você precisa para decidir está aqui. Sem vídeo longo. Sem enrolação.",
    decisao_subtitulo: "Se você já perdeu tempo com promessa vaga, sabe o valor de algo direto ao ponto. É exatamente isso que você vai encontrar aqui.",
    decisao_intro: "Se você carrega o peso de já ter tentado — e de ter voltado ao começo mais de uma vez — o problema nunca foi falta de força de vontade. Foi a ausência de um método que realmente encaixasse na sua rotina. O NutriKeto existe para acabar com esse ciclo. Plano claro, aplicação simples, resultado desde a primeira semana.",
    decisao_bullets: [
      "Entenda exatamente o que comer para entrar em cetose — sem precisar pesquisar em dez lugares diferentes",
      "Siga um plano alimentar de 4 semanas pronto, sem improvisar no almoço nem travar no mercado",
      "Reduza a fome, o inchaço e a energia oscilando já nos primeiros dias",
      "Pare de repetir os erros que fazem a maioria abandonar antes de ver qualquer mudança",
      "Comece hoje mesmo, mesmo que você ache que sua rotina não permite"
    ],
    decisao_prova_titulo: "Por que tantas mulheres compram sem hesitar?",
    decisao_prova_texto: "Porque pela primeira vez a oferta faz sentido: você paga uma vez, recebe acesso imediato, segue um plano que foi feito para ser simples — e ainda tem 7 dias de garantia se mudar de ideia. Não existe armadilha. Existe direção.",
    decisao_cta: "Estou pronta para começar",

    problema_titulo: "Isso te soa familiar?",
    problema_items: [
      "Você já emagreceu antes — mas o peso voltou, e dessa vez parece mais teimoso",
      "Você corta tudo, sofre, resiste — e ainda assim a balança não se mexe",
      "Você não sabe ao certo o que pode ou não comer numa dieta cetogênica, e fica com medo de errar",
      "Você sente que seu metabolismo simplesmente parou de cooperar",
      "Sua rotina é corrida e você não tem tempo para ficar pesquisando receita complicada",
      "Você se olha no espelho e não reconhece quem está ali — e isso dói mais do que a dieta",
      "Você quer um caminho claro, não mais uma promessa que te pede para confiar às cegas"
    ],
    problema_conclusao: "Se você se viu em alguma dessas linhas, saiba: não é fraqueza. É o resultado de tentar seguir um caminho sem mapa. O problema nunca foi você.",

    agitacao_titulo: "Cada semana que passa sem agir não é neutra — ela te custa algo",
    agitacao_texto: "O peso continua. A roupa que você quer usar continua guardada. A energia baixa que você sente toda tarde continua te travando. E a sensação de 'vou começar na semana que vem' continua adiando uma versão sua que você já devia estar vivendo. Isso não é catastrofismo. É o ciclo que você já conhece — e que pode parar hoje.",

    solucao_badge: "✦ O método que elimina a confusão de uma vez por todas",
    solucao_titulo: "NutriKeto: o guia que coloca a dieta cetogênica ao alcance da sua rotina real",
    solucao_texto: "Não é um curso com dezenas de aulas. Não é um app que te cobra mensalidade. É um guia completo, direto e aplicável: você lê, entende, organiza sua semana e começa. Com cardápio pronto, lista de compras e orientação sobre cada etapa da adaptação — para que você não precise adivinhar mais nada.",

    passos_titulo: "Como funciona na prática",
    passos: [
      {
        numero: "01",
        icone: "📖",
        titulo: "Leia e entenda o método",
        texto: "Em poucos minutos você sabe exatamente o que fazer, o que evitar e por que isso funciona — sem precisar virar nutricionista."
      },
      {
        numero: "02",
        icone: "🛒",
        titulo: "Organize sua semana com o plano pronto",
        texto: "Cardápio de 4 semanas e lista de compras na mão. Você vai ao mercado sabendo o que levar e volta sabendo o que preparar."
      },
      {
        numero: "03",
        icone: "⚖️",
        titulo: "Aplique e acompanhe sua transformação",
        texto: "Com o caminho traçado, você para de improvisar e começa a agir com consistência. É isso que gera resultado real."
      }
    ],

    beneficios_titulo: "O que você encontra dentro do NutriKeto",
    beneficios_cta: "Quero esse acesso agora",
    beneficios: [
      {
        icone: "🔥",
        titulo: "Como entrar em cetose em até 72 horas",
        texto: "Passo a passo objetivo para ativar o modo de queima de gordura — sem suposição, sem achismo."
      },
      {
        icone: "🍽️",
        titulo: "O que comer, o que evitar e o que sabota sem você perceber",
        texto: "Lista clara de alimentos permitidos, proibidos e os erros silenciosos que travam o processo da maioria."
      },
      {
        icone: "📅",
        titulo: "Plano alimentar completo de 4 semanas",
        texto: "Cardápio diário pronto. Você para de gastar energia decidindo o que comer e começa a gastar energia sendo consistente."
      },
      {
        icone: "🥘",
        titulo: "Receitas cetogênicas que cabem na sua rotina",
        texto: "Simples, rápidas e sem ingredientes exóticos. Porque você não precisa ser chef para emagrecer."
      },
      {
        icone: "⚡",
        titulo: "Como atravessar a adaptação sem desistir",
        texto: "Estratégias práticas para reduzir os desconfortos iniciais e manter o ritmo quando a motivação oscila."
      },
      {
        icone: "🏆",
        titulo: "Como manter o resultado depois que emagrecer",
        texto: "Porque perder peso uma vez não é suficiente. Você aprende a não precisar recomeçar do zero nunca mais."
      }
    ],

    bonus_titulo: "Você ainda leva esses bônus práticos para começar com mais facilidade",
    bonus_badge: "🎁 Inclusos no seu acesso hoje",
    bonus_valor_total_de: "R$161,00",
    bonus_items: [
      {
        tag: "BÔNUS #1 — GRÁTIS",
        icone: "📋",
        titulo: "Lista de Compras Keto — Semana 1",
        texto: "Nada de travar no mercado sem saber o que pegar. Sua primeira semana começa com tudo organizado na palma da mão.",
        valor: "Valor individual: R$ 27,00 — incluso gratuitamente"
      },
      {
        tag: "BÔNUS #2 — GRÁTIS",
        icone: "🧾",
        titulo: "10 Receitas Keto Rápidas",
        texto: "Receitas simples, sem exigência de talento culinário. Para que a alimentação deixe de ser um obstáculo e vire um hábito.",
        valor: "Valor individual: R$ 37,00 — incluso gratuitamente"
      }
    ],

    depoimentos_titulo: "O que quem já começou diz sobre o NutriKeto",
    depoimentos: [
      {
        iniciais: "M.S.",
        nome: "Mariana S., 38 anos — São Paulo/SP",
        texto: "Eu tinha tentado outras coisas antes e sempre travava porque não sabia exatamente o que fazer. Com o NutriKeto eu parei de adivinhar. Tinha um plano, e eu segui.",
        resultado: "✅ Sentiu diferença nas roupas em poucas semanas",
        foto: ""
      },
      {
        iniciais: "A.L.",
        nome: "Ana Lúcia M., 44 anos — Belo Horizonte/MG",
        texto: "O que mais me surpreendeu foi a clareza. Não precisei ficar pesquisando nada fora. Tudo que eu precisava estava ali, organizado, sem enrolação.",
        resultado: "✅ Mais controle e constância na alimentação",
        foto: ""
      },
      {
        iniciais: "C.R.",
        nome: "Cíntia R., 51 anos — Rio de Janeiro/RJ",
        texto: "Achei que fosse difícil demais para a minha rotina. Mas fui lendo e percebendo que era muito mais simples do que qualquer coisa que eu tinha tentado antes. Isso me deu confiança para continuar.",
        resultado: "✅ Mais confiança para emagrecer com método",
        foto: ""
      }
    ],

    oferta_badge: "🔥 Você chegou até aqui. Isso já diz algo sobre você.",
    oferta_titulo: "Leve o NutriKeto agora e comece ainda esta semana",
    oferta_itens: [
      "Guia NutriKeto completo em PDF",
      "Plano alimentar de 4 semanas pronto para seguir",
      "Lista de compras para a semana 1",
      "Receitas cetogênicas rápidas e simples",
      "Bônus inclusos sem nenhum custo extra",
      "Acesso imediato logo após o pagamento",
      "Suporte por e-mail"
    ],
    oferta_cta: "Quero meu acesso agora",
    oferta_meta: [
      "🔒 Pagamento seguro via Kiwify",
      "💳 Cartão, Pix ou Boleto",
      "📱 Acesso no celular, tablet ou computador"
    ],

    garantia_titulo: "7 dias de garantia — sem risco, sem burocracia",
    garantia_texto: "Se você entrar, ler o material e sentir que o NutriKeto não é para você, basta mandar um e-mail dentro de 7 dias. Você recebe tudo de volta. Sem pergunta, sem processo, sem estresse. A decisão é sua — e ela não precisa ter risco nenhum.",

    faq_titulo: "Ainda tem dúvida? Veja as respostas mais comuns",
    faq_items: [
      {
        pergunta: "Preciso assistir horas de vídeo para entender o método?",
        resposta: "Não. O NutriKeto foi pensado para leitura rápida e consulta fácil — sem aula, sem módulo, sem espera. Você abre, lê e começa."
      },
      {
        pergunta: "Preciso fazer academia para ter resultado?",
        resposta: "Não. O guia é focado em alimentação. Se você quiser incluir exercício, ótimo — mas não é uma exigência para ver resultado."
      },
      {
        pergunta: "Funciona mesmo para quem já tentou outras dietas?",
        resposta: "Especialmente para quem já tentou. Porque o guia ajuda você a entender onde as tentativas anteriores travaram — e a construir um caminho diferente desta vez."
      },
      {
        pergunta: "Como recebo o acesso após a compra?",
        resposta: "Logo após a confirmação do pagamento, você recebe o acesso direto no e-mail cadastrado. É imediato."
      },
      {
        pergunta: "Posso acessar pelo celular?",
        resposta: "Sim. O material é digital e funciona no celular, tablet ou computador — onde for mais confortável para você."
      },
      {
        pergunta: "E se eu não me adaptar ao método?",
        resposta: "Você tem 7 dias para testar sem risco. Se não gostar, é só pedir reembolso. Simples assim."
      }
    ],

    final_titulo: "Você já sabe o que precisa mudar. A questão é quando.",
    final_texto: "Não falta informação solta na internet. O que falta é um caminho organizado, testado e feito para funcionar na vida real — não em condições perfeitas. Se você chegou até aqui, algo dentro de você já tomou a decisão. O NutriKeto está aqui para te dar o próximo passo concreto.",
    final_cta: "Estou pronta. Quero começar agora.",

    rodape_aviso_resultados: "Os resultados individuais podem variar de acordo com rotina, consistência e contexto pessoal.",
    rodape_aviso_medico: "Este conteúdo tem caráter informativo e não substitui acompanhamento médico ou nutricional profissional.",
    rodape_plataforma: "Produto distribuído pela plataforma Kiwify. Pagamento 100% seguro.",
    rodape_ano: "2026",
    rodape_link_privacidade: "Política de Privacidade",
    rodape_link_termos: "Termos de Uso",
    rodape_link_suporte: "Suporte",
    rodape_links: {
      politica_privacidade: "politica-privacidade.html",
      termos_uso: "termos-uso.html"
    }
  },

  // ============================================================
  // 6. COMPORTAMENTOS / FUNIL
  // ============================================================
  funil: {
    delay_botao_segundos: 7,
    contador_minutos: 47,
    exit_intent_ativo: true,
    exit_intent_titulo: "⚠️ Espera — uma coisa antes de sair",
    exit_intent_texto: "Você passou vários minutos aqui. Isso não foi por acaso. O NutriKeto ainda está disponível nesta condição — mas não por muito tempo.",
    exit_intent_cta: "Quero garantir meu acesso",
    exit_intent_recusa: "Não, vou continuar sem método por enquanto →"
  },

  // ============================================================
  // 7. PIXEL DO META ADS
  // ============================================================
  pixel: {
    ativo: false,
    id: ""
  },

  // ============================================================
  // 8. SEO / META TAGS
  // ============================================================
  seo: {
    titulo_aba: "NutriKeto — Pare de adivinhar. Comece a emagrecer com método.",
    descricao: "Guia completo da dieta cetogênica com plano alimentar de 4 semanas, lista de compras e receitas práticas. Acesso imediato. Garantia de 7 dias.",
    indexar: false
  }
};
// ============================================================
// FIM DO PAINEL DE CONTROLE
// Salve o arquivo e recarregue o navegador para ver as mudanças
// ============================================================
