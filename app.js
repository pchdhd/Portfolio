const main = document.getElementById("mainContainer")

const addInfo = () =>{
    main.innerHTML = ''

    main.innerHTML = ` <section>
    <article>
        <div class="row">
            <div class=" info justify-content-center ">
                <h1>Bienvenido a mi Portfolio</h1>
                <h2 class="frase">El conocimiento es sólo una de las representaciones de la existencia. <p>
                        <span>-José Vasconcelos</span>(1882-1959) Filósofo, educador y político mexicano.
                    </p>
                </h2>
                <p class="presentacion">Me presento me llamo Marcos, soy un entusiasta de el codigo y cada
                    día busco superarme
                    más
                    en la
                    carrera con diferentes proyectos personales, nacido y actualmente viviendo en Montevideo
                    Uruguay estoy en busqueda de mi primera experiencia
                    laboral en el área de la programación. <br> Busco aprender diferentes tecnologias y aceptar nuevos desafios creando
                    paginas web con multiples aplicaciones. <br> Soy una persona positiva, responsable,
                    bueno comunicandome y trabajando en equipo siempre buscando el exito de los proyectos
                    compartidos </p>

                <div class="d-flex justify-content-center mt-xl-5 "><img src="./imagenes/educacion.png"
                        alt="" width="40px" height="40px">
                    <h2 class="mt-3">  Mis conocimientos </h2>
                </div>
                <div  class="aviso mt-2">desliza para ver los cursos</div>
                <div class="container-etiquetas">
                    
                    <div class="educacion ">


                        <div class=" etiquetas "><img id="html" src="./imagenes/HTML5.png" alt="HTML 5">
                            <h4>HTML5</h4>
                            <div class="mt-2 btn btn-outline-dark"><a target="_blank"
                                    href="https://developer.mozilla.org/en-US/docs/Web/HTML">Ver
                                    tecnología</a>
                            </div>
                        </div>
                        <div class=" etiquetas "><img id="css" src="./imagenes/CSS.png" alt="css">
                            <h4>CSS</h4>
                            <div class="mt-2 btn btn-outline-dark"><a target="_blank"
                                    href="https://developer.mozilla.org/en-US/docs/Web/CSS">Ver
                                    tecnología</a>
                            </div>
                        </div>
                        <div class=" etiquetas"><img id="js" src="./imagenes/JS.png" alt="javascript">
                            <h4>Javascript</h4>
                            <div class="mt-2 btn btn-outline-dark"><a target="_blank"
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Ver
                                    tecnología</a></div>
                        </div>
                        <div class=" etiquetas "><img id="bootstrap" src="./imagenes/Bootstrap.png" alt="">
                            <h4>Bootstrap</h4>
                            <div class="mt-2 btn btn-outline-dark"><a target="_blank"
                                    href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Ver
                                    tecnología</a></div>
                        </div>
                        <div class=" etiquetas "><img id="sass" src="./imagenes/SASS.png" alt="">
                            <h4>SASS</h4>
                            <div class="mt-2 btn btn-outline-dark"><a target="_blank"
                                    href="https://sass-lang.com/documentation/">Ver tecnología</a></div>
                        </div>
                        <div class="etiquetas"><img id="react" src="./imagenes/React.png" alt="">
                            <h4>React Js</h4>
                            <div class="mt-2 btn btn-outline-dark"><a target="_blank"
                                    href="https://react.dev/">Ver tecnología</a></div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="linea"></div>
        </div>

    </article>
    <article>
        <div class="fondo">
            <img class="logo-separador" src="./imagenes/logo.png" alt="logo coderhouse">
        </div>
        <div class="linea"></div>

        <div class="fondo2">
            <h2 class="h2-cursos">Cursos realizados</h2>
            <div class="cursos">
                <div class="cursos__etiquetas">
                    <div><img class="mt-3 me-2" src="./imagenes/logo coderhouse.png" alt="Logo Coderhouse">
                    </div>
                    <div class="box-1">
                        <h5 class="mt-3">Curso Realizado de <b>Desarrollo Web</b></h5> <span>Duración: 2
                            meses</span>
                    </div>
                    <div class="ms-sm-0 d-flex">
                        <h6 class="mt-4">Aptitudes aprendidas:</h6>
                        <p class="aptitudes">HTML, CSS, Bootstrap, SASS, Git, GitHub, SEO Basico, Diseño
                            Responsive.</p>

                    </div>
                    <div class="box-certificado">
                        <div class="ver-certificado btn btn-dark"><a target="_blank"
                                href="https://coderhouse.com.uy/pages/certificados/63a357a653e3fd000e039d95">Ver
                                certificado</a></div>
                    </div>
                </div>


                <div class="cursos__etiquetas">
                    <div><img class="mt-3 me-2" src="./imagenes/logo coderhouse.png" alt="Logo Coderhouse">
                    </div>
                    <div class="box-1">
                        <h5 class="mt-3">Curso Realizado de <b>Javascript</b></h5><span>Duración: 3
                            meses</span>
                    </div>
                    <div class="ms-sm-0 d-flex">
                        <h6 class="mt-4">Aptitudes aprendidas:</h6>
                        <p class="aptitudes">Ciclos e iteraciones,Funciones, Objetos, Arrays, Localstorage,
                            Operadores ternarios,Asincronia y promesas, consumir una api con Fetch</p>

                    </div>
                    <div class="box-certificado">
                        <div class="ver-certificado btn btn-dark"><a target="_blank"
                                href="https://coderhouse.com.uy/pages/certificados/640bdb11398c54000e4afd8d">Ver
                                certificado</a></div>
                    </div>
                </div>


                <div class="cursos__etiquetas">
                    <div><img class="mt-3 me-2" src="./imagenes/logo coderhouse.png" alt="Logo Coderhouse">
                    </div>
                    <div class="box-1">
                        <h5 class="mt-3">Curso Realizado de <b>React js</b></h5><span>Duración: 2
                            meses</span>
                    </div>
                    <div class="ms-sm-0 d-flex">
                        <h6 class="mt-4">Aptitudes aprendidas:</h6>
                        <p class="aptitudes">HTML, CSS, Bootstrap, SASS, Git, GitHub, SEO Basico, Diseño
                            Responsive.</p>

                    </div>
                    <div class="box-certificado">
                        <div class="ver-certificado btn btn-dark"><a target="_blank"
                                href="https://coderhouse.com.uy/pages/certificados/645a09b1c44eaa0002d64c06">Ver
                                certificado</a></div>

                    </div>
                </div>
            </div>
    </article>
</section> `

   
}

const addPages = () =>{
    main.innerHTML = ' '

    main.innerHTML = ` `
}
const addContact = () =>{
    main.innerHTML = ' '

    main.innerHTML = ` `
}



