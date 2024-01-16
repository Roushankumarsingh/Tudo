import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Tudoapp.css" 


export default function TudoList()
{
    let [tudos , setTudos] = useState([{task : "Sample-task" , id : uuidv4() , isDone : false}]);
    let [newTudo , setNewTudo] = useState("") ; 
    let onClickMouse = () =>
    {
        setTudos([...tudos ,{task : newTudo , id:uuidv4() ,isDone:false}]) ; 
        setNewTudo("");
    }

    let deleteNum = (id) =>
    {
       setTudos(tudos.filter((tudo) => tudo.id != id));
    }

    let updatedValue = (event) =>
    {
        // setNewTudo(event.target.value) ; 
        setNewTudo(event.target.value)  ; 
        // console.log(event.target.value) ; 
    }

    let upperCaseOne = (id) =>
    {
        setTudos(tudos.map((tudo) =>
        {
            if(tudo.id == id)
            {
                return {
                    task : tudo.task.toUpperCase() , 
                };
            }else
            {
                return {
                    ...tudo , 
                    task : tudo.task , 
                };
            };
        }));
        // console.log(newArr) ; 
    }

    let upperCaseAll = () =>
    {
        setTudos(tudos.map((tudo) =>
        {
            return {
                ...tudo , 
                task : tudo.task.toUpperCase() ,
            };
        }));
    }
    let styles = {
        textDecorationLine : "line-through" , 
    }

    let marksAllAsRead = () =>
    {
        // console.log("It is Working ") ; 
        setTudos(tudos.map((tudo) =>
        {
            return {
                ...tudo , 
                isDone : true , 
            }
        }));
    }
    let markOneAsRead = (id) =>
    {
        setTudos(tudos.map((tudo) =>
        {
            if(tudo.id == id)
            {
                return {
                    ...tudo ,
                    isDone : true , 
                }
            }else
            {
                return {
                    ...tudo ,
                }
            }
        }))
    }

    return (
        <>
        <div  className="div1"   >
            <input placeholder="Write Something here for add "  value={newTudo}    onChange={updatedValue} id="input" /><br/>
            <br/>
            <br/>
            <button  className="btn" onClick={onClickMouse}  >Click for add!!</button><br/><br/>
            <ul>
                {tudos.map((tudo) =>
                (
                    <li key={tudo.id}  > <span style = {tudo.isDone ? {textDecorationLine:"line-through"} : {}      }   className="sample"     >{tudo.task}</span> &nbsp; &nbsp;
                    <button className="btn" onClick={() =>  deleteNum(tudo.id)}  >Delete !!</button> &nbsp; &nbsp;
                    <button className="btn" onClick={() =>  upperCaseOne(tudo.id)}    >Uppercase One</button> &nbsp; &nbsp;
                    <button className="btn" onClick={() =>   markOneAsRead(tudo.id)}   >Marks as Read</button> &nbsp;<br/><br/>
                         </li>
                ))}
            </ul>
            <button className="btn" onClick={upperCaseAll}   >UPPERCASE ALL</button><br/>
            <button  className="btn"   onClick={marksAllAsRead} >Mark All as Read</button>
        </div>


        </>
    );
}