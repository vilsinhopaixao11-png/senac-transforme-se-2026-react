import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { supabase } from '../../utils/supabase';

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({}) //objeto
    const [logged, setLogged] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

    const [spiner, setSpiner] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(
        () => {
            const logged = JSON.parse(localStorage.getItem('logged'))
            setLogged(logged)
        },
        []
    );

    useEffect(() => {
        loadUsers()
    }, []);

    //READ - LER
    async function loadUsers() {
        const { data, error } = await supabase.from('profiles').select('*')
        if (error) {
            setMsg(error.message)
            return;
        }
        setUsers(data)
    }

    async function editUser() {
        setSpiner(true)

        const { data, error } = await supabase
            .from('profiles')
            .update(user)
            .eq('id', index)


            if(error){
                setMsg(error.message)
                setSpiner(false)
                return
            }
    
            setMsg("Usuario editado")
            setSpiner(false)
            loadUsers()
        }
            

        






   async function deleteUser(index) {  
        const { data, error } = await supabase
            .from('profiles')
            .delete()
            .eq('id',index)

            if(error){
                setMsg(error.message)
                setSpiner(false)
            }
                
          
        
    }








function updateUser(user) {
    setModal(true)
    setUser(user)
    setIndex(user.id)

}

async function handleRegister() {
    setSpiner(true)
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: user.email,
        password: user.senha
    });
    if (authError) {
        //console.log(authError)
        setMsg(authError.message)
        setSpiner(false)
        return;

    }
    if (!authData) {
        setMsg("Não foi possível cadastrar , verifique a internet")
        setSpiner(false)
        return;
    }
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.senha

    });

    const { error: profileError } = await supabase
        .from('profiles')
        .insert({... user,
            user_id: loginData.user.id,
            

        });

    if (profileError) {
        //console.log(profileError)
        setMsg(profileError.message)
        setSpiner(false)
        return;

    }
    setSpiner(false)

}


return (
    <div>
        <h3 >Bem vindo , {logged?.nome}</h3>

        {modal && (
            <div
                className="fixed flex top-0 right-0 bottom-0 
                        left-0 items-center justify-center bg-black/50 z-50">

                <div className="relative max-w-md w-full p-5 bg-about rounded-lg 
                        shadow-md flex flex-col bg-white">

                    <a onClick={() => {
                        setModal(false)
                        setIsEdit(false)
                        setUser({})
                    }}
                        className="bg-prices absolute top-0 right-0 px-2 
                            rounded-full cursor-pointer"
                    >
                        X
                    </a>

                    <h2>Cadastre um novo usuário</h2>
                    <p>Preencha as informações abaixo</p>

                    {isEdit ? (
                        <form className="flex flex-col">
                            Nome:
                            <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} type="text" placeholder="Digite seu nome completo" />
                            {index == -1 && (
                                <>
                                    Email:
                                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="Digite o seu melhor email" />
                                    Senha:
                                    <input onChange={(e) => setUser({ ...user, senha: e.target.value })} type="password" placeholder="Letra maiúscula e números" />
                                </>
                            )}


                            phone:
                            <input value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} type="text" placeholder="Digite seu phone completo" />
                            Cpf:
                            <input value={user.cpf} onChange={(e) => setUser({ ...user, cpf: e.target.value })} type="text" placeholder="Digite seu cpf completo" />

                            Data de nascimento:
                            <input onChange={(e) => setUser({ ...user, nascimento: e.target.value })} type="date" />

                            {index != -1 && (<a onClick={() => setIsEdit(false)} className="mt-5 bg-primary text-black text-center rounded-md py-2 bg-red-300">Cancelar</a>)}

                            <a onClick={
                                () => {
                                    if (index == -1)
                                        handleRegister()
                                    else
                                        editUser()

                                }}
                                className="mt-5 bg-primary text-white text-center rounded-md py-2"
                            >
                                {spiner ? '...' : 'Salvar'}
                            </a>
                            {msg}


                        </form>) : //else
                        (
                            <>
                                <p>Nome: {user.nome}</p>
                                <p>Email: {user.email}</p>
                                <p>Data de nascimento: {user.nascimento}</p>
                                <p>CPF: {user.cpf}</p>
                                <p>phone:{user.phone}</p>
                                <a onClick={() => setIsEdit(true)} className="mt-5 bg-primary text-black text-center rounded-md py-2 bg-yellow-500">Editar</a>
                            </>
                        )
                    }
                </div>
            </div>
        )}

        <table>
            <thead>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Ações</th>
            </thead>
            <tbody className="text-black">
                {users.map((u) => (
                    <tr key={u.id} >
                        <td>{u.nome}</td>
                        <td>{u.cpf}</td>
                        <td>{u.phone}</td>
                        <td>
                            <a onClick={() => updateUser(u)} className="curson-pointer px-3 mx-4 hover:shadow shadow-md text-white rounl bg-green-500">V</a>
                            <a onClick={() => deleteUser(u)} className="curson-pointer px-3 mx-4 hover:shadow shadow-md text-white rounl bg-red-500">X</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


        <a onClick={() => {
            setModal(true)
            setIsEdit(true)
        }} className="rounded-full bg-primary text-black px-4 py-3 fixed bottom-0 right-0"
        > + </a>

    </div>
)
   
}
export default Painel;
