var furia = {
    foto:
      "https://s.glbimg.com/es/sde/f/organizacoes/2021/01/21/furia-e-sports-65-37418.png",
    nome: "Furia",
    jogos: 0,
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
  var pain = {
    foto:
      "https://s.glbimg.com/es/sde/f/organizacoes/2021/01/21/kabum-e-sports-65-37412.png",
    nome: "KaBuM!",
    jogos: 0,
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
  var intz = {
    foto:
      "https://s.glbimg.com/es/sde/f/organizacoes/2021/01/21/intz-e-sports-65-37415.png",
    nome: "INTZ",
    jogos: 0,
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
  var loud = {
    foto:
      "https://s.glbimg.com/es/sde/f/organizacoes/2021/01/21/loud-e-sports-65-37409.png",
    nome: "Loud",
    jogos: 0,
    vitorias: 0,
    derrotas: 0,
    pontos: 0
  };
  
  furia.pontos = calculaPontos(furia);
  pain.pontos = calculaPontos(pain);
  intz.pontos = calculaPontos(intz);
  loud.pontos = calculaPontos(loud);
  
  function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 100) / jogador.jogos;
    return pontos;
  }
  
  var jogadores = [furia, pain, intz, loud];
  
  function exibeJogadoresNaTela() {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td><img src=" + jogadores[i].foto + "></td>";
      elemento += "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].jogos + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadoresNaTela(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.jogos++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.jogos++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function zerarPontos() {
    for (i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].empates = 0;
      jogadores[i].pontos = 0;
      exibeJogadoresNaTela(jogadores);
    }
  }
  