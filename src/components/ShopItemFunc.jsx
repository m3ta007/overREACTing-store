import React from 'react'
import propTypes from 'prop-types'
import Item from '../models/Item'
import './shop-item.css'

export default function ShopItemFunc({ item }) {
  return (
    <>
      <div class="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div class="description">{item.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">
            `{item.currency}
            {item.price}.00`
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
