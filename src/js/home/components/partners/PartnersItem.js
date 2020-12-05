import React from 'react'
export default function PartnerItem( props ) {
  const { item } = props
  
  return (
    <div className="partner-item">
      <img src={item.image} alt="parceiro Mathewslins.com"></img> 
      <span className="part-name">{item.name}</span>
      <span  className="part-description">{item.description}</span>
    </div>
  )
}