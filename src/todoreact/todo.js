import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './style.css'
let Todo = () =>{
    let [inputdata,setInputdata]=useState("");
    const [items,setItems]=useState([]);

    let hello = (e) =>{
        setInputdata(e.target.value);

        
    }
    let shum =() =>{
        if(!inputdata){
            
            toast.error('🙏 Please fill the Input Field', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
            setItems([...items,inputdata]);
            setInputdata("");
            toast.success('👏 The data Added was successfull', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }

    }
    
    
    

    return(
        <div>
            <div className="text-center">
                <img src="todo.jfif" alt="" height={130} className="round"/>
                <h4 className='font'></h4>
            </div>
            <div className='Add-items'>
            <input type="text" className="form-control" onChange={hello} value={inputdata}
             id="exampleInputEmail1"
              placeholder='✍ Add Item'
                />
                
            

            </div>
            <button type="button" className="btn btn-primary mr"  onClick={shum} value={inputdata} >Add <i className='fa fa-plus'></i></button>
            {items.map((value)=>{
                return(
                    <div className='items'>
                <p className='left  col-white'>{value}</p>
                <div className='flo-right'>
                <i className='far fa-edit col-green mar-lft'></i>
                <i className='far fa-trash-alt col-red'></i>
                </div>
            </div>

                )
            })}
            

        </div>
    )
}
export default Todo;