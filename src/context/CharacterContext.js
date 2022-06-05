import React, { createContext, useContext, useReducer } from 'react'
import { CharacterReducer } from '../reducer/CharacterReducer'

export const CharacterContext = createContext({
  character: {
    id: '98cd9ada-2280-4983-b66b-ebdfafc2597c',
    name: 'Valeros',
    description:
      'Valeros é um talentoso lutador de duas armas, facilmente encontrando lugar em qualquer grupo pela tenacidade e absoluto destemor alguns diriam negligência com o qual se lança para o combate. Apesar de sua reputação de bruto e de recorrente desrespeito pelas leis, Valeros aprendeu alguma coisa aqui e ali em suas viagens, inclusive a ler (coisa que seus respeitáveis pais nunca souberam). Devoto de Cayden Cailean a única divindade que compreende o papel central da liberdade na vida do homem comum Valeros vive sua vida na boa, levando esse espírito para todos os aspectos dela, inclusive relacionamentos e riqueza. Embora seja afeito a armas de qualidade e aos confortos mundanos, o único item de que nunca se separa é a caneca (porque nunca se sabe quando alguém vai lhe oferecer uma bebida). O recorrente comportamento apático e insensível, esconde um coração nobre e uma lealdade ímpar àqueles poucos que conseguem o feito de cativá-lo.',
    image:
      'https://www.rolando20.com.br/wp-content/uploads/2020/01/Valeros-1024x683.jpg',
    background:
      'Valeros nasceu numa pacata fazenda em Andoran, onde cresceu ouvindo as historias de soldados que por ali passavam, sonhando com dias de aventura e exploração. Esse desejo por desbravar o desconhecido sempre crescera em seu coração, mas também crescia a necessidade de ajudar seus já idosos pais nas tarefas da fazenda e pouco a pouco as assombrosas e crescentes demandas da vida rural iam destruindo qualquer possibilidade de viagens para conhecer o mundo lá fora. Um mês antes que um casamento arranjado com a filha de um fazendeiro vizinho pudesse prende-lo para sempre naquele lugar (mas não antes dele provar algumas das benesses da vida casada), Valeros finalmente se viu diante do fim da vida de aventuras que tanto sonhara. Tomado subitamente pelo desespero de uma vida entre gado e espigas de milho, Valeros arrumou uma muda de roupas, malocou alguma comida da cozinha e um velho cabo de machado para se proteger de rufiões e fugiu na calada da noite, a primeira de muitas fugas.',
    class: 'Guerreiro',
    phrase:
      'Não há nada melhor do que uma noite de bebedeira intensa e uma companhia cheirosa',
  },
  isActive: false,
})

const RpgContext = ({ children }) => {
  const initialCharacter = useContext(CharacterContext)
  const [currentCharacter, characterDispatch] = useReducer(
    CharacterReducer,
    initialCharacter
  )

  return (
    <CharacterContext.Provider
      value={{
        currentCharacter: currentCharacter,
        characterDispatch: characterDispatch,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export default RpgContext
