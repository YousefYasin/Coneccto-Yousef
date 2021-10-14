import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getTest} from '../../data/actions/test'
const Iinial = () => {
    const dispatch = useDispatch()

    const test = useSelector(({test}) => test.test)  
    useEffect(() => {
     dispatch(getTest())
    }, []) 
    return (
        <div className='container m-5'>
            
            <h1 className='mb-5'>INITIAL</h1> 
            <ul className='list-group'>
                {test.map((ele,index)=>(
                    <li className='list-group-item' key={index+'eletest'}>{ele}</li>
                ))}
            </ul>
        </div>
    )
}

export default Iinial
