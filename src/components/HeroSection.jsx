import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section_desktop'>
        <p className='sidebar'>Menu</p>
        <img className='hero-section_img' src="/assets/images/cartoonDev.jpeg" alt="" />
        <div className='hero-section_content'>
          <h2 className='content_title title'>Seja bem-vindo(a) ao meu portfólio de projetos!</h2>
          <p className='content_text'>
              Aqui você encontrará trabalhos que desenvolvi com o objetivo de praticar e aprimorar minhas habilidades como desenvolvedor web full-stack, já que os projetos foram criados por mim, desde a construção do front-end até o desenvolvimento do back-end e a integração com bancos de dados.<br />
              Embora esses projetos sejam fictícios, cada um representou uma oportunidade valiosa de aprendizado, permitindo-me explorar novas tecnologias, além de resolver desafios práticos e aprofundar meu conhecimento em desenvolvimento web.<br />
              Fico feliz em compartilhar meu progresso e estou sempre aberto a novos desafios para continuar evoluindo.<br />
              Sinta-se à vontade para explorar e conhecer mais sobre o que venho construindo!
          </p>
          <Link className='btn' to='about' smooth='true' duration={500} >EXPLORAR</Link>
        </div>

      </div>
        {/* Hero Mobile */}
        <div className='hero-section_mobile'>
          <p className='sidebar'>Menu</p>
          <img className='hero-section_img' src="/assets/images/cartoonDev.png" alt="" />
          <div className='hero-section_content'>
            <h2 className='content_title title'>Seja bem-vindo(a) ao meu portfólio de projetos!</h2>
            <p className='content_text'>
                Aqui você encontrará trabalhos que desenvolvi com o objetivo de praticar e aprimorar minhas habilidades como desenvolvedor web full-stack, já que os projetos foram criados por mim, desde a construção do front-end até o desenvolvimento do back-end e a integração com bancos de dados.<br />
                Embora esses projetos sejam fictícios, cada um representou uma oportunidade valiosa de aprendizado, permitindo-me explorar novas tecnologias, além de resolver desafios práticos e aprofundar meu conhecimento em desenvolvimento web.<br />
                Fico feliz em compartilhar meu progresso e estou sempre aberto a novos desafios para continuar evoluindo.<br />
                Sinta-se à vontade para explorar e conhecer mais sobre o que venho construindo!
            </p>
            <Link className='btn' to='about' smooth='true' duration={500} >EXPLORAR</Link>
          </div>
        </div> 
    </div>
  );
};

export default HeroSection;
