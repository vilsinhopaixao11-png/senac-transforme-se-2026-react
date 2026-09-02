import { Link } from "react-router";
function Auth() {
    return (
        <>


            <nav class="flex items-center py-2 px-4 shadow-lg fixed absolute top-0 bg-white w-full">


                <a class="mr-2 py-2 px-2 hover:bg-primary" href="#about">Sobre</a>
                <a class="mr-2 py-2 px-2 hover:bg-primary" href="#prices"> Preços</a>
                <a class="mr-2 py-2 px-2 hover:bg-primary" href="#features">Benefícios</a>
                <Link class="mr-5 py-2 px-4 bg-primary hover:shadow-inner text-white rounded ml-auto shadow left-0"
                    to="Home">Menu</Link>

            </nav>

            <div class="h-full flex">

            <div class="max-w-lg mx-auto pb- py-5 flex gap-8">  

                

                    <form class="flex flex-col">
                        <h2>Login:</h2>
                        Email: <input id="iEmaillogin" type="email"
                            placeholder="Digite o seu  email cadastrado: " />
                            Password: <input id="iPassLogin" type="password" placeholder="Digite sua senha:" />
                        

                        <a class="mr-2 py-2 px-2 bg-btcolor hover:shadow-md text-white rounded-md ml-auto shadow left-0 border-bt"
                            href="painel.html">Entrar</a>



                    </form>






                </div>

            </div>





        </>
    )
}

export default Auth;
