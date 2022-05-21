import React,{useState} from 'react';

const MultipleInputs = () => {

    const [userRegistration,setUserRegistration] = useState({
        username:'',
        email:'',
        phone:'',
        password:''
    });

    const [records,setRecords] = useState([]);

    const handleInput = (e) =>{
           const name = e.target.name;
           const value =  e.target.value;
           setUserRegistration({...userRegistration,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newRecord = {...userRegistration,id:new Date().getTime.toString()};
        setRecords([...records,newRecord]);
        console.log(records);
        setUserRegistration({username:'',email:'',phone:'',password:''})
    }


    return ( 
        <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" value={userRegistration.username} onChange={handleInput} autoComplete='off' name="username" id="username"/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" value={userRegistration.email} onChange={handleInput} autoComplete='off' name="email" id="email"/>
            </div>

            <div>
                <label htmlFor="phone">phone</label>
                <input type="text" value={userRegistration.phone} onChange={handleInput} autoComplete='off' name="phone" id="phone"/>
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input type="text" value={userRegistration.password} onChange={handleInput} autoComplete='off' name="password" id="password"/>
            </div>

            <button type="submit">Registration</button>

        </form>
        <table>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Password</th>
            {
                records.map((record)=>{
                    return (
                   <tr key={record.id}>
                       
                      <td>{record.username}</td>
                      <td>{record.email}</td>
                      <td>{record.phone}</td>
                      <td>{record.password}</td>
                   
                   </tr>
                          

                    )
                })
            }
        </table>
        </>
     );
}
 
export default MultipleInputs;

// hello sdso sokpoww
//dsda
//dgd