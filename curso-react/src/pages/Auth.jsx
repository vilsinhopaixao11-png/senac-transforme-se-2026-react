import { useState } from 'react';
import { Link } from "react-router";
function Auth() {
    const [batatinha, setBatatinha] = useState(0);

    function sub(){
    setBatatinha(batatinha - 1)
    }

    return (
        <>


            <nav class="flex items-center py-2 px-4 shadow-lg fixed absolute top-0 bg-white w-full">


                <a className="mr-2 py-2 px-2 hover:bg-primary" href="#about">Sobre</a>
                <a className="mr-2 py-2 px-2 hover:bg-primary" href="#prices"> Preços</a>
                <a className="mr-2 py-2 px-2 hover:bg-primary" href="#features">Benefícios</a>
                <Link className="mr-5 py-2 px-4 bg-primary hover:shadow-inner text-white rounded ml-auto shadow left-0"
                    to="Home">Menu</Link>



            </nav>

            <div className="bg-gradient-to-r from-[#24132F] via-[#17234A] to-[#102A52] flex min-h-screen 
            items-center justify-center px-4 pt-20">

                <div className="w-full max-w-sm rounded-2xl bg-[#080F24] p-6 text-white shadow-2xl">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-white">Fale </span>
                            <span className="text-orange-500">Mais</span>
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Entre na sua conta para continuar
                        </p>
                    </div>

                   




                    <form class="flex flex-col">

                        <h2>Login:</h2>
                        Email: <input id="iEmaillogin" type="email"
                            placeholder="Digite o seu  email cadastrado: " />
                        Password: <input id="iPassLogin" type="password" placeholder="Digite sua senha:" />


                        <Link class="mr-2 py-2 px-2 bg-btcolor hover:shadow-md text-white rounded-md ml-auto shadow left-0 border-bt"
                            href="painel.html">Entrar</Link>

                        <div className="bg-red-100 rounded-full p-2"onClick={sub}>-</div>
                        {batatinha}
                        <div className="bg-green-100 rounded-full p-2"onClick={() => setBatatinha(batatinha + 1)}>+</div>


                    </form>






                </div>



                </div>




            </>
            )
}

            export default Auth;
