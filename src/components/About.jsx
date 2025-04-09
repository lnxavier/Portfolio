import React from 'react';
import separator from '../../public/assets/images/separator.png';

const About = () => {
  return (
    <div id='about' className='about'>
      <h1 className='subtitle section-title about_title'>SOBRE</h1>
      <p className='about_description'>
        Me chamo Lucas Nathaniel Xavier, tenho 22 anos e sou formado em Análise e Desenvolvimento de Sistemas.
        Atualmente possuo conhecimentos de desenvolvimento web full-stack.
      </p>
      <div className='about_separator'>
        <img src={separator} alt='' />
      </div>
      <div className='about_texts'>
        <div className='texts_content'>
          <h2 className='subtitle'>FRONT-END</h2>
          <p className='content-text'>
            O front-end é a camada de uma aplicação ou sistema responsável pela interface e interação do usuário.<br />
            Ele engloba tudo o que o usuário vê e interage, como layouts, botões, animações e formulários.<br />
            O desenvolvimento front-end envolve o uso de tecnologias como HTML, CSS, JavaScript, além de frameworks e bibliotecas como React, Angular, Vue.js, Swift, Kotlin, entre outros, dependendo da plataforma.<br />
            O objetivo do front-end é garantir uma experiência de usuário intuitiva, responsiva e agradável.
          </p>
        </div>
        <div className='texts_content'>
          <h2 className='subtitle'>BACK-END</h2>
          <p className='content-text'>
            O back-end é a camada de uma aplicação ou sistema responsável pelo processamento, armazenamento e gerenciamento de dados.<br />
            Ele lida com a lógica de negócios, comunicação com bancos de dados e a integração com outras APIs ou serviços.<br />
            O desenvolvimento back-end envolve o uso de linguagens de programação como Python, Java, Node.js, Ruby, PHP, entre outras, e frameworks como Django, Spring, Express.js, Laravel, entre outros.<br />
            O objetivo do back-end é garantir que a aplicação funcione de forma eficiente, segura e escalável, fornecendo os dados e recursos necessários para o front-end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
