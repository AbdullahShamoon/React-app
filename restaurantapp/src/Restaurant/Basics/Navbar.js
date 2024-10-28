import React from 'react'

function Navbar({ filterItem, uniqueList }) {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          {
            uniqueList.map((curElem)=> {
              return (
                <button
                  className='btn-group__item'
                  onClick={() => filterItem(curElem)}>
                  {curElem}
                </button>
              )
            })
          }
    
        </div>
        {/* <div className='btn-group'>
          <button
            className='btn-group__item'
            onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div> */}

      </nav>
    </>
  )
}

export default Navbar