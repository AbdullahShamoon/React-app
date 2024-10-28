import React from 'react'

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
      <section className='main-card--container'>
        {menuData.map((curElem) => {

          // Destructuring
          const { index, name, category, image, description } = curElem;

          return (
            <>
              <div className='card-container' key={index}>
                <div className='card'>
                  <div className='card-body'>
                    <span className='card-number card-circle subtle'>{index}</span>
                    <span className='card-author subtle'>{category}</span>
                    <h2 className='card-title'> {name} </h2>
                    <span className='card-description subtle'>
                      {description}
                    </span>
                    <div className='card-read'>Read</div>
                  </div>
                  <img src={image} alt='images' className='card-media' />
                  <span className='card-tag subtle'>Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  )
}

export default MenuCard