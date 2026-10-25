const IMG = {
  stranger: "assets/stranger.webp",
  cadastro: "assets/cadastro.webp",
  fanta1: "assets/fanta1.webp",
  fanta2: "assets/fanta2.webp",
  fanta3: "assets/fanta3.webp",
  coffee: "assets/coffee.png",
  flappy: "assets/flappy.webp",
  spider1: "assets/spider1.webp",
  spider2: "assets/spider2.webp",
};
const GH = "https://github.com/Joseluizp";
const P = [
  {
    n: "Spider-Man: Um Novo Dia",
    k: "Landing page animada · a partir de um layout no Figma",
    ar: "834/413",
    im: [
      ["spider1", "Tela inicial"],
      ["spider2", "Segunda tela"],
    ],
    d: "Transformei um layout do Figma em uma página completa. O layout de referência tinha botões sem função, então os substituí por Trailer (abre um modal com player) e Elenco (rolagem animada até a seção).",
    f: [
      "Sequência de frames sincronizada com o scroll",
      "Scroll suave com pin de seções (ScrollSmoother + ScrollTrigger)",
      "Troca de textos letra a letra com SplitText",
      "Máscara de revelação e player de vídeo customizado",
      "Seção de elenco com crossfade e barra de progresso",
    ],
    s: ["HTML", "CSS", "JavaScript", "GSAP", "Figma"],
    r: "https://github.com/Joseluizp/Spider-Man",
  },
  {
    n: "Stranger Things: The Experience",
    k: "Landing page imersiva",
    ar: "835/408",
    im: [["stranger", "Hero Mundo Invertido"]],
    d: "Experiência visual inspirada na série, com as cidades Hawkins, Mundo Invertido e Sydney e uma proposta de consulta de ingressos. A estética vem da tipografia, da paleta e de animações guiadas pelo scroll.",
    f: [
      "Preloader com logotipo SVG animado por stroke-dashoffset",
      "Scroll suavizado e parallax declarativo",
      "Revelação de caracteres com SplitText",
      "Rodapé com efeito de sobreposição",
      "Imagens responsivas com picture e srcset",
    ],
    s: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "ScrollSmoother",
      "SplitText",
    ],
    r: "https://github.com/Joseluizp/Stranger-Things-Experience",
  },
  {
    n: "Fanta",
    k: "Landing page · HTML, CSS e JavaScript",
    ar: "795/366",
    im: [
      ["fanta1", "Primeira tela"],
      ["fanta2", "Segunda tela"],
      ["fanta3", "Terceira tela"],
    ],
    d: "Landing page inspirada na marca, criada para praticar HTML, CSS e JavaScript, com efeitos visuais e animações interativas acionadas durante o scroll.",
    f: [
      "Três telas com composição forte de elementos",
      "Animações acionadas pelo scroll",
      "Seção de produtos com cards",
    ],
    s: ["HTML", "CSS", "JavaScript"],
    r: "https://github.com/joseluizp/Projeto-Fanta",
  },
  {
    n: "Cadastro de Produtos",
    k: "Aplicação React · CRUD com API",
    ar: "827/388",
    im: [["cadastro", "Tela de cadastro e listagem"]],
    d: "Aplicação para praticar componentização, estado e CRUD, simulando um sistema simples de estoque. Depende de uma API local em execução.",
    f: [
      "Cadastro, edição e remoção de produtos",
      "Listagem dinâmica com atualização da interface",
      "Consumo de API com operações CRUD",
    ],
    s: ["React", "useState", "useEffect", "Axios", "Bootstrap", "Font Awesome"],
    r: "https://github.com/joseluizp/cadastro-produtos-react",
    b: "",
  },
  {
    n: "Flappy Bird em Java",
    k: "Jogo 2D · Java Swing",
    ar: "837/448",
    im: [["flappy", "Código e jogo em execução"]],
    d: "Jogo inspirado no clássico, feito para praticar lógica de jogos 2D, eventos, física simples e renderização gráfica.",
    f: [
      "Controle pela tecla Space, gravidade e geração de canos",
      "Pontuação e colisão por bounding box (AABB)",
      "Loop de 60 FPS com Timer e reinício após Game Over",
      "Renderização manual com paintComponent",
    ],
    s: ["Java", "Swing", "AWT", "Timer", "POO"],
    r: "https://github.com/Joseluizp/Flappy-Bird",
  },
  {
    n: "Dev Coffe",
    k: "Site de cafeteria fictícia",
    ar: "836/414",
    im: [["coffee", "Tela inicial"]],
    d: "Site com tema escuro para uma cafeteria fictícia, com seções de apresentação, sobre, menu, avaliações e endereço.",
    f: [
      "Navegação entre seções",
      "Efeitos de hover e interação com o cursor",
      "Layout responsivo",
    ],
    s: ["HTML", "CSS", "JavaScript"],
    r: "https://github.com/joseluizp/Dev-Coffe",
    b: "",
  },
];
const L = document.getElementById("lista");
P.forEach((p, i) => {
  const a = document.createElement("article");
  a.className = "proj rv";
  const first = p.im[0];
  a.innerHTML = `<div class="pm"><img src="${IMG[first[0]]}" alt="${p.n}: ${first[1]}" style="--ar:${p.ar}" ${i ? 'loading="lazy"' : ""}>${p.im.length > 1 ? `<div class="th" role="group" aria-label="Telas de ${p.n}">${p.im.map((m, j) => `<button aria-pressed="${!j}" aria-label="${m[1]}"><img src="${IMG[m[0]]}" alt="" style="--ar:${p.ar}"></button>`).join("")}</div>` : ""}</div>
<div class="pi"><p class="kind">${p.k}</p><h3>${p.n}</h3><p>${p.d}</p><ul>${p.f.map((x) => `<li>${x}</li>`).join("")}</ul><ul class="chips" aria-label="Tecnologias">${p.s.map((x) => `<li>${x}</li>`).join("")}</ul>
<a class="btn" href="${p.r || GH}" target="_blank" rel="noopener">${p.r ? "Ver no GitHub" : "Meu GitHub"}</a>${p.b ? `<p class="note">${p.b}</p>` : ""}</div>`;
  L.appendChild(a);
  const main = a.querySelector(".pm>img");
  a.querySelectorAll(".th button").forEach(
    (bt, j) =>
      (bt.onclick = () => {
        main.src = IMG[p.im[j][0]];
        main.alt = p.n + ": " + p.im[j][1];
        a.querySelectorAll(".th button").forEach((x) =>
          x.setAttribute("aria-pressed", x === bt),
        );
      }),
  );
});
// reveal
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".rv").forEach((e) => io.observe(e));
// menu
const nav = document.getElementById("nav"),
  mb = document.getElementById("menu");
mb.onclick = () => {
  const o = nav.classList.toggle("open");
  mb.setAttribute("aria-expanded", o);
};
nav.onclick = (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    mb.setAttribute("aria-expanded", false);
  }
};
// currículo (versão local: link direto para o PDF)
document.querySelectorAll("[data-cv]").forEach((b) => {
  b.hidden = false;
  b.onclick = () => {
    const a = document.createElement("a");
    a.href = "assets/curriculo.pdf";
    a.download = "Curriculo_Jose_Luiz_Junior.pdf";
    a.click();
  };
});
// partículas
(() => {
  const c = document.getElementById("cv"),
    x = c.getContext("2d"),
    RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const cols = [
    "#8052ff",
    "#ffb829",
    "#15846e",
    "#3b82f6",
    "#d946ef",
    "#a78bfa",
    "#2dd4bf",
  ];
  let W,
    H,
    pts = [],
    mx = -1e3,
    my = -1e3,
    run = false,
    raf;
  function seed() {
    const n = innerWidth < 700 ? 95 : 150;
    pts = [];
    const inB = (u, v) => {
      const l = ((u + 0.27) / 0.3) ** 2 + ((v + 0.02) / 0.42) ** 2 < 1,
        r = ((u - 0.27) / 0.3) ** 2 + ((v + 0.02) / 0.42) ** 2 < 1,
        t = (u / 0.5) ** 2 + ((v + 0.3) / 0.2) ** 2 < 1,
        cb = ((u - 0.1) / 0.14) ** 2 + ((v - 0.42) / 0.1) ** 2 < 1;
      return l || r || t || cb;
    };
    while (pts.length < n) {
      const u = Math.random() * 1.2 - 0.6,
        v = Math.random() * 1.1 - 0.55;
      if (inB(u, v))
        pts.push({
          u,
          v,
          z: 0.35 + Math.random() * 0.65,
          c: cols[(Math.random() * cols.length) | 0],
          s: 6 + Math.random() * 10,
          a: Math.random() * 6.28,
          p: Math.random() * 6.28,
          q: 0.3 + Math.random() * 0.6,
          w: (Math.random() - 0.5) * 0.6,
        });
    }
  }
  function size() {
    const r = c.getBoundingClientRect(),
      d = Math.min(devicePixelRatio || 1, 2);
    W = r.width;
    H = r.height;
    c.width = W * d;
    c.height = H * d;
    x.setTransform(d, 0, 0, d, 0, 0);
    seed();
    draw(0);
  }
  function draw(t) {
    x.clearRect(0, 0, W, H);
    const k = Math.min(W, H),
      P = pts.map((o) => {
        const m = (t / 1000) * o.q;
        return {
          x: W / 2 + (o.u * 1.45 + Math.sin(m + o.p) * 0.012) * k,
          y: H / 2 + (o.v * 1.45 + Math.cos(m * 0.8 + o.p) * 0.012) * k,
          o,
        };
      });
    if (!RM) {
      P.forEach((p) => {
        const dx = p.x - mx,
          dy = p.y - my,
          d = Math.hypot(dx, dy);
        if (d < 90) {
          const f = ((90 - d) / 90) * 14;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
      });
    }
    x.lineWidth = 0.6;
    for (let i = 0; i < P.length; i++)
      for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y),
          m = k * 0.085;
        if (d < m) {
          x.globalAlpha = (1 - d / m) * 0.22;
          x.strokeStyle = "#9a9a9a";
          x.beginPath();
          x.moveTo(P[i].x, P[i].y);
          x.lineTo(P[j].x, P[j].y);
          x.stroke();
        }
      }
    P.forEach((p) => {
      const o = p.o,
        s = o.s * o.z * (k / 520),
        a = o.a + (RM ? 0 : (t / 1000) * o.w);
      x.globalAlpha = 0.35 + o.z * 0.6;
      x.strokeStyle = o.c;
      x.lineWidth = 1.1;
      x.beginPath();
      for (let i = 0; i < 3; i++) {
        const g = a + i * 2.094;
        x[i ? "lineTo" : "moveTo"](
          p.x + Math.cos(g) * s,
          p.y + Math.sin(g) * s,
        );
      }
      x.closePath();
      x.stroke();
    });
    x.globalAlpha = 1;
  }
  function loop(t) {
    if (!run) return;
    draw(t);
    raf = requestAnimationFrame(loop);
  }
  function go(v) {
    if (RM) return;
    if (v && !run) {
      run = true;
      raf = requestAnimationFrame(loop);
    } else if (!v) {
      run = false;
      cancelAnimationFrame(raf);
    }
  }
  size();
  addEventListener("resize", size);
  if (!RM) {
    c.parentElement.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    });
    c.parentElement.addEventListener("pointerleave", () => {
      mx = my = -1e3;
    });
    new IntersectionObserver((e) =>
      go(e[0].isIntersecting && !document.hidden),
    ).observe(c);
    document.addEventListener("visibilitychange", () => go(!document.hidden));
  }
})();
// ícones de tecnologia flutuando junto à animação de partículas
(() => {
  const stage = document.querySelector(".stage");
  if (!stage) return;
  const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
  // [arquivo ou URL, esquerda%, topo%, tamanho px, profundidade (parallax), duração s, atraso s, deslocamento x, deslocamento y, classe opcional]
  // "inv" = inverte a cor (ícone preto); "wide" = quadro mais largo (imagem retangular)
  // arquivos "assets/..." são ícones próprios; os demais vêm do Devicon (CDN)
  const T = [
    // anel externo
    [
      "javascript/javascript-original.svg",
      42.7,
      8.6,
      60,
      24,
      7,
      0,
      "10px",
      "-14px",
    ],
    ["react/react-original.svg", 71.0, 13.6, 56, 24, 8, -2, "-12px", "12px"],
    ["html5/html5-original.svg", 89.5, 35.6, 50, 24, 6.5, -1, "-8px", "-14px"],
    [
      "nextjs/nextjs-original.svg",
      89.5,
      64.4,
      46,
      24,
      7.5,
      -3,
      "12px",
      "10px",
      "inv",
    ],
    [
      "assets/api-rest.svg",
      71.0,
      86.4,
      50,
      24,
      8.5,
      -4,
      "-10px",
      "-12px",
      "wide",
    ],
    [
      "assets/nosql.svg",
      42.7,
      91.4,
      52,
      24,
      6.8,
      -2.5,
      "10px",
      "-10px",
      "wide",
    ],
    [
      "bootstrap/bootstrap-original.svg",
      17.8,
      77.0,
      44,
      24,
      7.2,
      -5,
      "-8px",
      "10px",
    ],
    ["css3/css3-original.svg", 8.0, 50.0, 50, 24, 7.8, -1.5, "12px", "-12px"],
    ["git/git-original.svg", 17.8, 23.0, 40, 24, 6.6, -3.5, "10px", "-14px"],
    // anel do meio
    ["java/java-original.svg", 50.0, 25.0, 52, 16, 8.2, -4.5, "-12px", "12px"],
    [
      "typescript/typescript-original.svg",
      71.7,
      37.5,
      42,
      16,
      7.1,
      -6,
      "-8px",
      "-14px",
    ],
    ["mysql/mysql-original.svg", 71.7, 62.5, 50, 16, 7.6, -0.5, "12px", "10px"],
    ["python/python-original.svg", 50.0, 75.0, 46, 16, 7, 0, "-10px", "-12px"],
    ["nodejs/nodejs-original.svg", 28.3, 62.5, 48, 16, 8, -2, "10px", "-10px"],
    [
      "github/github-original.svg",
      28.3,
      37.5,
      46,
      16,
      6.5,
      -1,
      "-8px",
      "10px",
      "inv",
    ],
    // anel interno
    ["csharp/csharp-original.svg", 50.0, 59.0, 40, 8, 7.5, -3, "12px", "-12px"],
    ["assets/ia.svg", 57.8, 45.5, 38, 8, 6.8, -2.5, "-12px", "12px"],
  ];
  const fl = document.createElement("div");
  fl.className = "fl";
  fl.setAttribute("aria-hidden", "true");
  T.forEach(([f, l, t, s, z, d, dl, dx, dy, cls]) => {
    const ic = document.createElement("div");
    ic.className = "ic" + (cls ? " " + cls : "");
    ic.style.cssText = `left:${l}%;top:${t}%;--s:${s}px;--z:${z};--t:${d}s;--dl:${dl}s;--dx:${dx};--dy:${dy}`;
    const sp = document.createElement("span");
    const im = new Image();
    im.alt = "";
    im.decoding = "async";
    im.src = /^(https?:|assets\/)/.test(f) ? f : D + f;
    im.onerror = () => ic.remove();
    sp.appendChild(im);
    ic.appendChild(sp);
    fl.appendChild(ic);
  });
  stage.appendChild(fl);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  // leve parallax acompanhando o cursor
  stage.addEventListener("pointermove", (e) => {
    const r = stage.getBoundingClientRect();
    fl.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5) * 2);
    fl.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5) * 2);
  });
  stage.addEventListener("pointerleave", () => {
    fl.style.setProperty("--mx", 0);
    fl.style.setProperty("--my", 0);
  });
  // pausa a flutuação quando a área sai da tela
  new IntersectionObserver((e) =>
    fl.classList.toggle("off", !e[0].isIntersecting),
  ).observe(stage);
})();
