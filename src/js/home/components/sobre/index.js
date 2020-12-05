import React from "react"
import HomeSection from '../common/homeSection'
import fivePerCent from '../../../../assets/home/sobre/5percent.svg'
import './style.css'
export default function Sobre(){
  const title = "O que vamos te proporcionar?"
  const subtitle = "O clube de inglês com Mathews Lins é um roteiro para quem quer alcançar a fluência e fazer parte dos benefícios que somente 5% dos brasileiros têm. O clube te dá base para aprender e praticar de forma consolidada com aulas e exercícios semanais"
  return (
    <div id="sobre">
      <HomeSection title={title} subtitle={subtitle} fr4={true}>
        <div className="app-container bd-red ">
          <div class="sobre-table bd-red">


            <div className="bd-green d-flex">
               <img className="bd-red mr-2" width="100" height="120" src={fivePerCent} alt=""/> 
                <span className="section-title-small">
                  dos brasileiros falam inglês fluentemente.
                  Quais benefícios exclusivos essas pessoas tem? 
                </span> 
            </div> 

         
            <span></span>

            <ul class="topics section-subtitle bd-blue ">
              <li> Menos concorrentes com a mesma competência a uma vaga.</li>
              <li> Crescimento profissional </li>
              <li> Elevação do nível de cultura</li>
              <li> Possibilidade de ser entendido em qualquer lugar do mundo</li>
              <li> Acesso a materiais direto da fonte</li>
              <li> Mais autoconfiança </li>
              <li> Maior desenvolvimento do cérebro  </li> 
            </ul> 

          </div>
        </div>
      </HomeSection>
    </div>
  )
}