const municipiosEl = document.getElementById('municipios');
const estadosEl = document.getElementById('estados');

async function getCitiesByStateId(stateId) {
  const resp = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
  const json = await resp.json();
  json.sort((a, b) => a.nome.localeCompare(b.nome));
  return json;
}

function criarOption(id, nome, sigla) {
  const optEl = document.createElement('option');
  optEl.setAttribute('value', id);
  const texto = sigla ? `${nome} (${sigla})` : nome;
  const textoEl = document.createTextNode(texto);
  optEl.appendChild(textoEl);
  return optEl;
}

function criarEInstalarOption(parent, id, nome, sigla) {
  const optEl = criarOption(id, nome, sigla);
  parent.appendChild(optEl);
}

async function selecionaEstado({ target: { value } }) {
  // console.log(JSON.stringify(target));
  if (value.length > 0) {
    const cidadesJson = await getCitiesByStateId(value);
    cidadesJson.forEach(({ id, nome }) => criarEInstalarOption(municipiosEl, id, nome));
  }
}

estadosEl.addEventListener('click', selecionaEstado);

async function getEstados() {
  const resp = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const json = await resp.json();
  json.sort((a, b) => a.nome.localeCompare(b.nome));
  return json;
}

async function executar() {
  try {
    const estadosJson = await getEstados();
    estadosJson.forEach(({ id, nome, sigla }) => criarEInstalarOption(estadosEl, id, nome, sigla));
  } catch (err) {
    console.log(`Erro!! ${err}`);
  }
}

executar();
