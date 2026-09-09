import { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router'

function Auth() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");

    




    const nav = useNavigate();

    function handleLogin() {
        const users = JSON.parse(localStorage.getItem('users'))||[];

        let user = users.find(u => {
            return u.email == email;
        });

        if (!user) {
            setMsg("Usuário não encontrado .");
            return;
        }

        if (user.senha == pass) {
            localStorage.setItem("logged", JSON.stringify(user));
            setMsg("Login realizado com sucesso .");
            console.log("aqui esta funcionando");
            
            nav("/painel");
           
        } else {
            setMsg("Senha incorreta.");
        }

    }



    return (
        <>
            <div className="bg-gradient-to-r from-[#24132F] via-[#17234A] to-[#102A52] flex min-h-screen 
            items-center justify-center px-4 pt-20">

                <div className="w-full max-w-sm rounded-2xl bg-[#080F24] p-6 text-black shadow-2xl">

                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-white">Fale </span>
                            <span className="text-orange-500">Mais</span>
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Entre na sua conta para continuar
                        </p>
                    </div>






                    <form className="flex flex-col">
                        {msg && <p className="text-white text-center font-bold mb-2">{msg}</p>}
                        <h2 className="text-white font-semibold mb-2">Login:</h2>
                        <span className="text-white text-sm">Email:</span>
                        <input
                            id="iEmaillogin"
                            type="email"
                            placeholder="Digite o seu email cadastrado:"
                            className="p-2 rounded mb-2 bg-white text-black"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <span className="text-white text-sm">Password:</span>
                        <input
                            id="iPassLogin"
                            type="password"
                            placeholder="Digite sua senha:"
                            className="p-2 rounded mb-4 bg-white text-black"
                            onChange={(e) => setPass(e.target.value)}
                        />

                        <button
                            type="button"
                            className="bg-red-100 hover:bg-red-200 text-black rounded-full p-2 font-medium cursor-pointer transition"
                            onClick={handleLogin}
                        >
                            Entrar
                        </button>
                    </form>






                </div>



            </div>




        </>
    )

}

export default Auth;
