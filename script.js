const campoUfSelect = document.querySelector('#uf')
const campoCidadeSelect = document.querySelector('#cidade')
const btnSalvar = document.querySelector('#btnSalvar')

const UFsECidades = new Map()
UFsECidades.set(0, ['Selecione'])
UFsECidades.set(1, ['Picos', 'Teresina', 'Inhuma', 'Parnaíba', 'Oeiras'])
UFsECidades.set(2, ['Recife', 'Petrolina', 'Salgueiro'])
UFsECidades.set(3, ['Brasília', 'Gama', 'Taguatinga', 'Paranoá'])

campoUfSelect.addEventListener('change', () => {
  limparCidades()

  const cidades = UFsECidades.get(parseInt(campoUfSelect.value))

  for(index=0; index<cidades.length; index++){
    let Cidade = document.createElement('option')
    Cidade.value = index
    Cidade.text = cidades[index]
    campoCidadeSelect.appendChild(Cidade)
  }
})

function limparCidades() {
  campoCidadeSelect.innerHTML = '<option value="0">Selecione</option>'
}

btnSalvar.addEventListener("click", () => {
  const estadoSelecionado = campoUfSelect.options[campoUfSelect.selectedIndex].text
  const cidadeSelecionada = campoCidadeSelect.options[campoCidadeSelect.selectedIndex].text

  alert('UF: ' + estadoSelecionado + '\nCidade: ' + cidadeSelecionada + '\nSalvo com sucesso!')
})