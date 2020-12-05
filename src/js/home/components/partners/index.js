import "./style.css"
import React from "react"
import HomeSection from '../../components/common/homeSection'
import PartnerItem from './PartnersItem'
import partner1 from '../../../../assets/home/partners/partner1.webp'
import partner2 from '../../../../assets/home/partners/partner2.webp'
import partner3 from '../../../../assets/home/partners/partner3.webp'

export default function Depoimentos(){
  const title = "Quem faz o Clube acontecer?"
  const subtitle = "Essas são as pessoas que fazem o Clube de Inglês ser cada vez melhor. Nós continuamos procurando as melhores formas de te desenvolver."
  const partners = [
    {name:"Mathews Lins",description:"Founder", image:partner2},

    {name:"Thaís Rodrigues",description:"Copywriter", image:partner3},

    {name:"Lucas Fonseca",description:"Development and Tech", image:partner1}, 
  ]
  return (
    <div id="partners">
      <HomeSection title={title} subtitle={subtitle}>

        <div className="app-container">

          <div className="partners-pool bd-red">
            {partners.map((p,i)=>(
              <PartnerItem item={p} key={i}></PartnerItem> 
            ))}
          
          </div> 
        </div>

      </HomeSection>
    </div>
  )
}