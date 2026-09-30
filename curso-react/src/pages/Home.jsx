import { Link } from 'react-router'
import {Template} from '../components/Template';
function Home() {
  return (
    

      <Template>
        <main>



          className="max-w-lg mx-auto py-6  "
          className="text-center"
          <h1 >Protese Pay</h1>
          <h2>Sobre nós</h2>
          className="flex gap-8"



          <p> Nossa empresa é uma empresa do tipo fintech, chamada <b><i>Prótese Pay</i></b>, voltada para a
            venda de <b>próteses, moldes 3D</b> e como uma <b>auxiliadora de crédito.</b></p>
          <p>Nós disponibilizamos crédito para que o paciente tenha a possibilidade de adquirir uma prótese e
            que possa pagar parcelado.</p>


          <p>Nossa empresa também faz parceria com outras empresas que também fornecem próteses para que o
            cliente possa ter uma outra forma de adquirir o produto.</p>
          <p>Fornecemos modelos 3D para que o paciente tenha uma prótese personalizada e que facilite o uso,
            sem que cause tanto desconforto</p>







          id="prices"
          <div className="max-w-lg mx-auto py-1  ">
            <h2> Preços </h2>
            <p> Possuimos vários tipos de produtos, sendo eles peças, moldes 3D e a prótese pronta da nossa
              marca e de marca parceira.</p>
            <p>Os modelos 3D podem ter <b>preços váriados de R$2.000,00 á R$5.000,00</b>, podendo sofrer
              alterações e  variações</p>
            <p> As próteses já prontas podem ter preços váriados, podendo sofrer alterações por conta de
              parcerias. Contudo os valores podem ser a partir de <b>R$10.000,00.</b>
            </p>

          </div>




          <div className="max-w-lg mx-auto py-1  ">

            <h2>Benefícios</h2>
            <p>Nossa empresa por ser do ramo <b>fintech</b>, proporciona ao cliente créditos, para que ele
              consiga adquirir a prótese</p>
            <p>Quando o cliente adquire o nosso crédito, possibitamos <b>outras formas de pagamento</b>, para
              que ele consiga adquirir o produto e não tenha tantos desafios financeiros.
            </p>

          </div>




        </main>
      </Template>




  )
}

export default Home;
