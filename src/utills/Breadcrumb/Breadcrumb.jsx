// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, ChevronsRight } from 'lucide-react'


// eslint-disable-next-line react/prop-types
const Breadcrumb = ({id, name, link, form = false}) => {
    // console.log ({id, name, link, form})
  return (

    <nav aria-label = 'Breadcrumb'>
        
        <ul>
            <li>
                <Home color="#bf6022" absoluteStrokeWidth />
            </li>

            <li>
                <ChevronsRight color="#bf6022" absoluteStrokeWidth />
            </li>

            <li>
                <NavLink to = {link} >
                    
                    {name}

                </NavLink>
            </li>

            { form && <ChevronsRight size = '20' /> }
            { form ? id ? 'Update' : 'Create' : ''}

        </ul>

    </nav>

  

    
  )
}

export default Breadcrumb