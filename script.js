function setText(id, value) {
  var el = document.getElementById(id);
  if (el) el.textContent = value || "";
}

function setHTML(id, value) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = value || "";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createParagraphs(text) {
  return String(text || "")
    .split(/(?<=\.)\s+/)
    .filter(Boolean)
    .map(function(part) {
      return "<p>" + escapeHtml(part.trim()) + "</p>";
    })
    .join("");
}

function highlightWord(text, word) {
  if (!text || !word) return escapeHtml(text || "");
  var safeText = escapeHtml(text);
  var escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safeText.replace(new RegExp(escaped, "i"), '<span class="brand-keto">$&</span>');
}

function inferPriceValue(priceString) {
  var normalized = String(priceString || "").replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", ".");
  var parsed = parseFloat(normalized);
  return isNaN(parsed) ? 0 : parsed;
}

function injetarPixel(id) {
  if (!id || id === "PIXEL_ID_AQUI" || document.getElementById("meta-pixel-script")) return;

  var script = document.createElement("script");
  script.id = "meta-pixel-script";
  script.text =
    "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?" +
    "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;" +
    "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;" +
    "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}" +
    "(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');" +
    "fbq('init', '" + id + "'); fbq('track', 'PageView');";
  document.head.appendChild(script);
}

function trackPixel(eventName, params) {
  if (window.fbq && window.CONFIG && window.CONFIG.pixel && window.CONFIG.pixel.ativo) {
    window.fbq("track", eventName, params || {});
  }
}

function aplicarConfig() {
  var C = window.CONFIG;
  if (!C) return;

  document.title = C.seo.titulo_aba;
  setText("page-title", C.seo.titulo_aba);
  document.getElementById("meta-description").setAttribute("content", C.seo.descricao);
  document.getElementById("meta-robots").setAttribute("content", C.seo.indexar ? "index, follow" : "noindex, nofollow");
  document.getElementById("og-title").setAttribute("content", C.produto.nome + " — " + C.produto.slogan);
  document.getElementById("og-description").setAttribute("content", C.seo.descricao);
  document.getElementById("og-image").setAttribute("content", C.imagens.og_image);

  if (C.imagens.favicon) {
    var favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = C.imagens.favicon;
    document.head.appendChild(favicon);
  }

  setText("barra-topo-texto", C.copy.barra_topo);

  setText("hero-badge", C.copy.hero_badge);
  setHTML("hero-headline", highlightWord(C.copy.hero_headline, C.copy.hero_headline_destaque));
  setText("hero-subheadline", C.copy.hero_subheadline);
  setText("hero-prova-social", C.copy.hero_prova_social);
  setText("hero-cta-text", C.copy.hero_cta);
  setText("hero-cta-nota", C.copy.hero_cta_nota);

  var img3d = document.getElementById("img-capa-3d");
  var img2d = document.getElementById("img-capa-2d");
  img3d.src = C.imagens.capa_3d;
  img3d.alt = C.produto.nome + " — " + C.produto.slogan;
  img3d.loading = "eager";
  img3d.decoding = "async";
  img2d.src = C.imagens.capa_2d;
  img2d.alt = C.produto.nome + " Ebook";
  img2d.loading = "lazy";
  img2d.decoding = "async";

  setText("video-titulo", C.copy.video_titulo);
  var videoContainer = document.getElementById("video-container");
  if (C.video.ativo && C.video.youtube_id) {
    videoContainer.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(C.video.youtube_id) +
      '" title="Vídeo de vendas do NutriKeto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  } else {
    videoContainer.innerHTML =
      '<div class="video-placeholder">' +
      '<div><div class="play">▶</div><p>' + escapeHtml(C.copy.video_placeholder_titulo) + '</p><small>' + escapeHtml(C.copy.video_placeholder_nota) + '</small></div>' +
      "</div>";
  }

  setText("problema-titulo", C.copy.problema_titulo);
  document.getElementById("problema-lista").innerHTML = C.copy.problema_items.map(function(item) {
    return "<li>" + escapeHtml(item) + "</li>";
  }).join("");
  setText("problema-conclusao", C.copy.problema_conclusao);

  setText("agitacao-titulo", C.copy.agitacao_titulo);
  setHTML("agitacao-texto", createParagraphs(C.copy.agitacao_texto));

  setText("solucao-badge", C.copy.solucao_badge);
  setText("solucao-titulo", C.copy.solucao_titulo);
  setText("solucao-texto", C.copy.solucao_texto);

  setText("passos-titulo", C.copy.passos_titulo);
  document.getElementById("passos-grid").innerHTML = C.copy.passos.map(function(passo) {
    return [
      '<article class="step-card reveal">',
      '<div class="step-number">' + escapeHtml(passo.numero) + "</div>",
      '<div class="step-icon">' + escapeHtml(passo.icone) + "</div>",
      "<h3>" + escapeHtml(passo.titulo) + "</h3>",
      "<p>" + escapeHtml(passo.texto) + "</p>",
      "</article>"
    ].join("");
  }).join("");

  setText("beneficios-titulo", C.copy.beneficios_titulo);
  document.getElementById("beneficios-grid").innerHTML = C.copy.beneficios.map(function(item) {
    return [
      '<article class="benefit-card reveal">',
      '<div class="benefit-icon">' + escapeHtml(item.icone) + "</div>",
      "<h3>" + escapeHtml(item.titulo) + "</h3>",
      "<p>" + escapeHtml(item.texto) + "</p>",
      "</article>"
    ].join("");
  }).join("");
  setText("beneficios-cta-text", C.copy.beneficios_cta);

  setText("bonus-badge", C.copy.bonus_badge);
  setText("bonus-titulo", C.copy.bonus_titulo);
  document.getElementById("bonus-grid").innerHTML = C.copy.bonus_items.map(function(item) {
    return [
      '<article class="bonus-card reveal">',
      '<div class="bonus-tag">' + escapeHtml(item.tag) + "</div>",
      '<div class="bonus-icon">' + escapeHtml(item.icone) + "</div>",
      "<h3>" + escapeHtml(item.titulo) + "</h3>",
      "<p>" + escapeHtml(item.texto) + "</p>",
      '<div class="bonus-value">' + escapeHtml(item.valor) + "</div>",
      "</article>"
    ].join("");
  }).join("");
  document.getElementById("bonus-valor-total").innerHTML =
    'Valor total: <span class="old">' + escapeHtml(C.copy.bonus_valor_total_de) + '</span> → <span class="new">' + escapeHtml(C.produto.preco_atual) + "</span>";

  setText("depoimentos-titulo", C.copy.depoimentos_titulo);
  document.getElementById("depoimentos-grid").innerHTML = C.copy.depoimentos.map(function(dep) {
    var avatar = dep.foto
      ? '<div class="testimonial-avatar"><img src="' + escapeHtml(dep.foto) + '" alt="' + escapeHtml(dep.nome) + '"></div>'
      : '<div class="testimonial-avatar">' + escapeHtml(dep.iniciais) + "</div>";
    return [
      '<article class="testimonial-card reveal">',
      '<div class="testimonial-header">',
      avatar,
      '<div><div class="testimonial-name">' + escapeHtml(dep.nome) + '</div><div class="testimonial-stars">★★★★★</div></div>',
      "</div>",
      "<p>" + escapeHtml(dep.texto) + "</p>",
      '<span class="result-badge">' + escapeHtml(dep.resultado) + "</span>",
      "</article>"
    ].join("");
  }).join("");

  setText("oferta-badge", C.copy.oferta_badge);
  setText("oferta-titulo", C.copy.oferta_titulo);
  setText("preco-atual", C.produto.preco_atual);
  setText("preco-antigo", C.produto.preco_antigo);
  setText("parcelas", C.produto.parcelas);

  var precoAntigo = document.getElementById("preco-antigo");
  var parcelas = document.getElementById("parcelas");
  precoAntigo.style.display = C.produto.preco_antigo ? "" : "none";
  parcelas.style.display = C.produto.parcelas ? "" : "none";

  document.getElementById("oferta-lista").innerHTML = C.copy.oferta_itens.map(function(item) {
    return "<li>" + escapeHtml(item) + "</li>";
  }).join("");

  setText("oferta-cta-text", C.copy.oferta_cta + " — " + C.produto.preco_atual);
  document.getElementById("oferta-meta").innerHTML = C.copy.oferta_meta.map(function(item) {
    return "<span>" + escapeHtml(item) + "</span>";
  }).join("");

  setText("garantia-titulo", C.copy.garantia_titulo);
  setText("garantia-texto", C.copy.garantia_texto);

  setText("faq-titulo", C.copy.faq_titulo);
  document.getElementById("faq-lista").innerHTML = C.copy.faq_items.map(function(item) {
    return [
      '<div class="faq-item">',
      '<button class="faq-question" type="button">',
      "<span>" + escapeHtml(item.pergunta) + "</span>",
      '<span class="faq-icon">+</span>',
      "</button>",
      '<div class="faq-answer"><div class="faq-answer-inner"><p>' + escapeHtml(item.resposta) + "</p></div></div>",
      "</div>"
    ].join("");
  }).join("");

  setText("final-titulo", C.copy.final_titulo);
  setText("final-texto", C.copy.final_texto);
  setText("final-cta-text", C.copy.final_cta + " — " + C.produto.preco_atual);

  document.querySelectorAll("[data-checkout]").forEach(function(el) {
    el.setAttribute("href", C.checkout.link_principal);
  });

  var whatsappUrl = "https://wa.me/" + C.contato.whatsapp_numero + "?text=" + encodeURIComponent(C.contato.whatsapp_mensagem);
  document.getElementById("whatsapp-float").href = whatsappUrl;

  setText("rodape-copy", "© " + C.copy.rodape_ano + " " + C.produto.nome + " — Todos os direitos reservados");
  document.getElementById("link-privacidade").href = C.copy.rodape_links.politica_privacidade;
  document.getElementById("link-termos").href = C.copy.rodape_links.termos_uso;
  document.getElementById("link-suporte").href = "mailto:" + C.contato.email_suporte;
  document.getElementById("link-privacidade").textContent = C.copy.rodape_link_privacidade;
  document.getElementById("link-termos").textContent = C.copy.rodape_link_termos;
  document.getElementById("link-suporte").textContent = C.copy.rodape_link_suporte;
  setText("rodape-plataforma", C.copy.rodape_plataforma);
  setText("rodape-aviso-resultados", C.copy.rodape_aviso_resultados);
  setText("rodape-aviso-medico", C.copy.rodape_aviso_medico);

  setText("exit-titulo", C.funil.exit_intent_titulo);
  setText("exit-texto", C.funil.exit_intent_texto);
  setText("exit-cta-text", C.funil.exit_intent_cta);
  setText("exit-recusa", C.funil.exit_intent_recusa);

  if (C.pixel.ativo) {
    injetarPixel(C.pixel.id);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  aplicarConfig();

  var C = window.CONFIG;
  var ctaButtons = document.querySelectorAll(".cta-button");
  var exitOverlay = document.getElementById("exit-overlay");
  var exitClose = document.getElementById("exit-close");
  var exitRecusa = document.getElementById("exit-recusa");
  var exitShown = sessionStorage.getItem("nk_exit_shown") === "1";
  var priceValue = inferPriceValue(C.produto.preco_atual);

  ctaButtons.forEach(function(btn) {
    btn.classList.add("cta-locked");
  });

  setTimeout(function() {
    ctaButtons.forEach(function(btn) {
      btn.classList.remove("cta-locked");
      btn.classList.add("pulse-ready");
      var loading = btn.querySelector(".cta-loading");
      var text = btn.querySelector(".cta-text");
      if (loading) loading.hidden = true;
      if (text) text.hidden = false;
    });
  }, C.funil.delay_botao_segundos * 1000);

  (function startCountdown(minutes) {
    var KEY = "nk_countdown_end";
    var endTime = parseInt(sessionStorage.getItem(KEY) || "0", 10);
    if (!endTime || endTime < Date.now()) {
      endTime = Date.now() + minutes * 60 * 1000;
      sessionStorage.setItem(KEY, String(endTime));
    }

    var timers = document.querySelectorAll(".countdown-timer");

    function updateTimer() {
      var remaining = endTime - Date.now();
      if (remaining <= 0) {
        timers.forEach(function(timer) {
          timer.textContent = "00:00";
        });
        return;
      }
      var mins = Math.floor((remaining / 1000 / 60) % 60).toString().padStart(2, "0");
      var secs = Math.floor((remaining / 1000) % 60).toString().padStart(2, "0");
      timers.forEach(function(timer) {
        timer.textContent = mins + ":" + secs;
      });
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  })(C.funil.contador_minutos);

  document.getElementById("faq-lista").addEventListener("click", function(event) {
    var button = event.target.closest(".faq-question");
    if (!button) return;

    var item = button.parentElement;
    var answer = item.querySelector(".faq-answer");
    var isOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(function(faqItem) {
      faqItem.classList.remove("active");
      faqItem.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });

  document.querySelectorAll("[data-checkout]").forEach(function(link) {
    link.addEventListener("click", function(event) {
      var href = link.getAttribute("href");
      trackPixel("InitiateCheckout", {
        content_name: C.produto.nome,
        value: priceValue,
        currency: "BRL"
      });

      if (href === "#") {
        event.preventDefault();
        var target = document.querySelector(".section-oferta");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  var revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(function(el) {
    revealObserver.observe(el);
  });

  if (C.funil.exit_intent_ativo) {
    function showExit() {
      if (exitShown) return;
      exitShown = true;
      sessionStorage.setItem("nk_exit_shown", "1");
      exitOverlay.classList.add("active");
      exitOverlay.setAttribute("aria-hidden", "false");
    }

    document.addEventListener("mouseleave", function(e) {
      if (e.clientY <= 0) {
        showExit();
      }
    });

    var lastScrollY = window.scrollY;
    window.addEventListener("scroll", function() {
      var currentY = window.scrollY;
      if (lastScrollY - currentY > 60 && currentY < 200) {
        showExit();
      }
      lastScrollY = currentY;
    });

    exitClose.addEventListener("click", function() {
      exitOverlay.classList.remove("active");
      exitOverlay.setAttribute("aria-hidden", "true");
    });

    exitOverlay.addEventListener("click", function(e) {
      if (e.target === exitOverlay) {
        exitOverlay.classList.remove("active");
        exitOverlay.setAttribute("aria-hidden", "true");
      }
    });

    exitRecusa.addEventListener("click", function() {
      exitOverlay.classList.remove("active");
      exitOverlay.setAttribute("aria-hidden", "true");
    });
  }

  if (C.pixel.ativo) {
    trackPixel("ViewContent", {
      content_name: C.produto.nome,
      value: priceValue,
      currency: "BRL"
    });

    var offerCard = document.querySelector(".offer-card");
    if (offerCard) {
      var viewedOffer = false;
      var offerObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !viewedOffer) {
            viewedOffer = true;
            trackPixel("AddToCart", {
              content_name: C.produto.nome,
              value: priceValue,
              currency: "BRL"
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      offerObserver.observe(offerCard);
    }
  }
});

// Verificação de configuração (aparece apenas no console do navegador, não na página)
(function verificarConfig() {
  const avisos = [];
  if (!window.CONFIG) { console.error("[NutriKeto] config.js não carregado!"); return; }
  const C = window.CONFIG;
  if (C.checkout.link_principal === "#") avisos.push('⚠️  checkout.link_principal ainda é "#" — substitua pelo link da Kiwify');
  if (C.pixel.ativo && C.pixel.id === "PIXEL_ID_AQUI") avisos.push("⚠️  pixel.id não configurado — cole o ID do Pixel do Meta");
  if (!C.video.ativo) avisos.push("ℹ️  video.ativo está false — adicione o youtube_id e mude para true quando tiver o vídeo");
  if (C.contato.whatsapp_numero === "5531999999999") avisos.push("⚠️  contato.whatsapp_numero é o número padrão — substitua pelo seu número real");
  if (C.contato.email_suporte === "suporte@nutriketo.com.br") avisos.push("⚠️  contato.email_suporte é o padrão — substitua pelo seu e-mail real");
  if (avisos.length > 0) {
    console.group("%c[NutriKeto] Itens pendentes no config.js", "color:#f2b632; font-weight:bold;");
    avisos.forEach(a => console.warn(a));
    console.groupEnd();
  } else {
    console.log("%c[NutriKeto] ✅ Configuração completa!", "color:#5de08a; font-weight:bold;");
  }
})();
