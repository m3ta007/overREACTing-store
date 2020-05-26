import React from 'react'
import propTypes from 'prop-types'
import Item from '../models/Item'
import './shop-item.css'

export default function ShopItemFunc({ item }) {
  return (
    <>
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {item.currency}
            {item.price}.00
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

ShopItemFunc.propTypes = {
  item: propTypes.instanceOf(Item),
}
