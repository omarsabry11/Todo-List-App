import { Formik, useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import TodoList from '../TodoList/TodoList';
import Home from '../Home/Home';
import { InputValueContext } from '../../contexts/InputValueContext/InputValueContext'
import { UpdatingContext } from '../../contexts/UpdatingContext/UpdatingContext'




export default function Inputs({ handleAddTodo, handleUpdateTodo, clearTodos, todos }) {


    let { inputValue, setInputValue } = useContext(InputValueContext)
    let { updating, setUpdating } = useContext(UpdatingContext)



    return (<>

        <div className=''>


            <div className='pt-10 flex justify-center flex-wrap gap-5'>
                <input placeholder='Enter a Todo...' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='py-3 px-2 w-[30rem] rounded-lg focus:outline-none border border-[#cccccc]' name="todo" id="" />

                {!updating ? <button onClick={() => {
                    handleAddTodo(inputValue);
                    setInputValue('');
              



                }} className='text-white font-semibold duration-[0.3s] bg-[#4a90e2] hover:bg-[#2a72c5] px-4 rounded-lg'>Add</button> :
                    <button onClick={() => {
                        handleUpdateTodo(inputValue);
                        setInputValue('');
                        setUpdating(false);
                    


                    }} className='text-white font-semibold duration-[0.3s] bg-[#6C63FF] hover:bg-[#493ffd] px-4 rounded-lg'>Update</button>}

                <button onClick={() =>{
                    clearTodos();
                

            

                } } className='bg-[#ff5c5c] duration-[0.3s] hover:bg-[#ee4646] text-white px-4 rounded-lg font-semibold'>Clear</button>


            </div>


        </div>



    </>

    )
}


