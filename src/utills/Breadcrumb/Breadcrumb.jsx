import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronsRight } from 'lucide-react'


const Breadcrumb = ({id, name, link, form = false}) => {
  return (
    <nav 
        aria-label = 'Breadcrumb'
        className = {`flex $ {form && 'mt-[5px]'}`}
    >
        <ul>
            <li>
                <Home color="#bf6022" absoluteStrokeWidth />
            </li>

            <li>
                <ChevronsRight color="#bf6022" absoluteStrokeWidth />
            </li>

            <li>
                <Link
                    to = {link}
                    className='block hover:text-gray-700 text-md font-semibold transition-all duration-500 hover:underline underline-offset-4'
                    {name}
                >
                </Link>
            </li>

            { form && <ChevronsRight size = '20?' /> }
            { form ? id? 'Update' : 'Create' : ''}

        </ul>

    </nav>

    
  )
}

export default Breadcrumb