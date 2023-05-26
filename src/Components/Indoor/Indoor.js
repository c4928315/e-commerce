import React from 'react'
import'./Indoor.css'

function Indoor() {
  return (
    <div className='indoor'>
      <div className='innerIndoor'>
         <div className='indoorBanner'>
            <p>exclusive, discover great products here</p>
            <div className='outerHeader indoorH1'>
                <h1>in door, decorates</h1>
            </div>
            <button type="button" class="btn btn-warning">shop now</button>
         </div>
         <div className='indoorService'>
            <div className='service'>
                <div className='serviceIcon'>
                    <div className="serviceIconImage">
                      <img src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/services-01_af1e57ec-5b09-4577-a852-4425be169842.png?v=1613766143"/>
                    </div>
                    <h4 className='serviceH4'>get big savings</h4>
                    <p className='serviceP'>get big discounts every day !</p>
                </div>
            </div>
            <div className='service'>
                <div className='serviceIcon middle'>
                    <div className="serviceIconImage">
                      <img src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/services-02_45ff817a-f4a2-4856-bf0f-c693bf7777b0.png?v=1613766143"/>
                    </div>
                    <h4 className='serviceH4'>24*7 support line</h4>
                    <p className='serviceP'>get big discounts every day !</p>
                </div>
            </div>
            <div className='service'>
                <div className='serviceIcon'>
                    <div className="serviceIconImage">
                      <img src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/services-03_26f405e7-bd10-46d0-a0d8-31f1c810a86b.png?v=1613766143"/>
                    </div>
                    <h4 className='serviceH4'>free delivery</h4>
                    <p className='serviceP'>get big discounts every day !</p>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Indoor
