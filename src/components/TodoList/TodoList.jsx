import React, { useContext, useEffect, useState } from 'react'
import Inputs from '../Inputs/Inputs';
import "@fortawesome/fontawesome-free"
import { InputValueContext } from '../../contexts/InputValueContext/InputValueContext'
import { UpdatingContext } from '../../contexts/UpdatingContext/UpdatingContext'





export default function TodoList({ todos, handleDelateTodo, handleEditTodo }) {


    console.log(todos);
    let { updating, setUpdating } = useContext(UpdatingContext);
    let { inputValue, setInputValue } = useContext(InputValueContext);


    const [active, setActive] = useState(false);
    const handleClick = (index) => {
        setActive(prevState => !prevState);
    };

    const [toggledBoxes, setToggledBoxes] = useState({});
    const handleToggle = (index) => {
        setToggledBoxes((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };



    return (<>

        <div className=' max-lg:w-[90%] w-1/2 mx-auto shadow-lg overflow-auto'>

            <div className='w-full mt-10'>
                <div className='py-3 mt-4 bg-gray-100 px-3 rounded-t-lg flex justify-between items-center font-semibold shadow-md'>
                    <h3 className=''>Tasks</h3>
                    <h3 className=''>Actions</h3>
                </div>
                {todos.map((todo, index) => <div className={`bg-white py-3 px-3 border-b shadow-lg border-b-gray-200 flex flex-wrap justify-between items-center`} key={index}>

                    <div className='flex items-center gap-2'>
                        <div className='border w-6 h-6 rounded-full'>
                            <button className={`w-full h-full rounded-full flex justify-center items-center ${toggledBoxes[index] ? 'active' : ''}`} onClick={() => {
                                handleToggle(index);
                                handleClick(index);
                            }}>
                                <i className={`fa-solid fa-xs fa-check pt-[1px] ps-[1px]  ${toggledBoxes[index] ? 'block' : 'hidden'}`}></i>
                            </button>

                        </div>


                        <p className={`text-xl ${toggledBoxes[index]?'line-through text-gray-500 decoration-[#2eb12e]':null}`}>{todo}</p>

                    </div>

                    <div>

                        <button onClick={() => {

                            setInputValue(todo);
                            handleEditTodo(index);
                            setUpdating(true);

                        }} className='me-3'>
                            <i className="fa-regular fa-pen-to-square text-[#4C43E9]"></i>
                        </button>

                        <button onClick={() => handleDelateTodo(index)}>
                            <i className="fa-solid fa-trash-can text-[#ee415e]"></i>
                        </button>

                    </div>





                </div>)}

            </div>
        </div>


    </>

    )
}



