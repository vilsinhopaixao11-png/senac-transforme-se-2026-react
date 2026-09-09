import{Link} from 'react-router'
function Home (){
 return (
    <div>

      <nav class="flex items-center py-2 px-4 shadow-lg fixed absolute top-0 bg-white w-full">

        <a class="mr-2 py-2 px-2 hover:bg-primary" href="#about">Sobre</a>
        <a class="mr-2 py-2 px-2 hover:bg-primary" href="#prices"> Preços</a>
        <a class="mr-2 py-2 px-2 hover:bg-primary" href="#features">Benefícios</a>
        <Link class="mr-5 py-2 px-4 bg-primary hover:shadow-inner text-white rounded ml-auto shadow" to="/auth">Acessar</Link>


      </nav>

      <main>



        class="max-w-lg mx-auto py-6  "
        class="text-center"
        <h1 >Protese Pay</h1>
        <h2>Sobre nós</h2>
        class="flex gap-8"



        <p> Nossa empresa é uma empresa do tipo fintech, chamada <b><i>Prótese Pay</i></b>, voltada para a
          venda de <b>próteses, moldes 3D</b> e como uma <b>auxiliadora de crédito.</b></p>
        <p>Nós disponibilizamos crédito para que o paciente tenha a possibilidade de adquirir uma prótese e
          que possa pagar parcelado.</p>


        <p>Nossa empresa também faz parceria com outras empresas que também fornecem próteses para que o
          cliente possa ter uma outra forma de adquirir o produto.</p>
        <p>Fornecemos modelos 3D para que o paciente tenha uma prótese personalizada e que facilite o uso,
          sem que cause tanto desconforto</p>







        id="prices"
        <div class="max-w-lg mx-auto py-1  ">
          <h2> Preços </h2>
          <text> Possuimos vários tipos de produtos, sendo eles peças, moldes 3D e a prótese pronta da nossa
            marca e de marca parceira.</text>
          <p>Os modelos 3D podem ter <b>preços váriados de R$2.000,00 á R$5.000,00</b>, podendo sofrer
            alterações e  variações</p>
          <p> As próteses já prontas podem ter preços váriados, podendo sofrer alterações por conta de
            parcerias. Contudo os valores podem ser a partir de <b>R$10.000,00.</b>
          </p>

        </div>




        class="max-w-lg mx-auto py-1  "

        <h2>Benefícios</h2>
        <text>Nossa empresa por ser do ramo <b>fintech</b>, proporciona ao cliente créditos, para que ele
          consiga adquirir a prótese</text>
        <p>Quando o cliente adquire o nosso crédito, possibitamos <b>outras formas de pagamento</b>, para
          que ele consiga adquirir o produto e não tenha tantos desafios financeiros.
        </p>






      </main>





      <footer>


      </footer>



    </div>
  )
}

export default Home;
