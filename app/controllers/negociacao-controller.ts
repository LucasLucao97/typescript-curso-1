import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController {
  private inputData: HTMLInputElement
  private inputQuantidade: HTMLInputElement
  private inputValor: HTMLInputElement
  private negociacoes = new Negociacoes()

  constructor () {
    this.inputData = <HTMLInputElement>document.querySelector('#data')
    this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')
    this.inputValor = <HTMLInputElement>document.querySelector('#valor')
  }

  adiciona (): void {
    const negociacao = this.criaNegociacao()
    negociacao.data.setDate(12)
    this.negociacoes.adiciona(negociacao)
    console.log(this.negociacoes.lista())
    this.limparFormulario()
  }

  criaNegociacao () {
    const exp = /-/g
    const date = new Date(this.inputData.value.replace(exp, ','))
    const quantidade = parseInt(this.inputQuantidade.value)
    const valor = parseFloat(this.inputValor.value)
    return new Negociacao (date, quantidade, valor)
  }

  limparFormulario (): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus()
  }
}