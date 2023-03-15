https://github.com/XimenaVelascoro/Portafolio/issues/2#issue-1625736550


# :notebook_with_decorative_cover: CONSTRUCCIÓN DE MI PORTAFOLIO WEB CON REACT JS  :sparkles:


###  Este portafolio esta basado en una guía de paso a paso para construir y desplegar un React JS Portfolio Website que logré mediante el siguiente videotutorial
:point_right: `https://www.youtube.com/watch?v=G-Cr00UYokU&t=10355s` :point_left: Para más información sigue el link.


## :round_pushpin: Requisitos Previos
    Conocimiento básico
    - HTML, CSS, JavaScript y React y NodeJS
    
## :dizzy: Tecnologias Utilizadas
    - React JS
    - CSS
    - JavaScript
    - NodeJS
    
## :electric_plug: Instalación
    -  npx create-react-app
    - Extensión dentro de VSC ES7 React/Redux/React-Native snippets
    -  borrar carpetas prestablecidas (dentro de src y public) para crear todo desde cero
    -  swiper
    -  react-icons
    -  emailjs-com
    -  react-dom
   

### 	:classical_building: `Estructura del Proyecto`
`public/`  : Contiene los archivos públicos de la aplicación en este caso sera in archivo html
       
       - index.html :point_right: el cual va a tiener un div que contiene un Id root. Todo en la aplicación procesará bien mediante ese "root" .
       
`src/` : Contiene los archivos del proyecto


`assets/` : Contiene las fotos, archivos y fondos que voy a usar en el proyecto. si se van a usar varias fotos y archivos se recomienda separar por sub carpetas con su nombre para tener mas orden.
     
     
  `components/` : Para hacer todo mas sencillo y practico todo ira en componentes que son las carpetas de cada seccion del portafolio, :point_right: cada carpeta contiene 2 archivos; un JSX donde ira la estructura de esa sección y un CSS para darle estilo y forma según la media querie, todo ordenado en su propia sección. En cada archivo JSX se importa su propio archivo CSS, se importa React y se crea un rafce donde se va a crear la estructura de la sección y asi irian las carpetas:
        
    - About = About.jsx/ y about.css/  
    - Contact = Contact.jsx/  y contact.css/
    - Experience = Experience.jsx/ y experience.css/
    - Footer = Footer.jsx/ y footer.css/
    - Header = Header.jsx/ y header.css/
    - Nav = Nav.jsx/ y nav.css/ 
    - Portafolio = Portafolio.jsx/ y portafolio.css/
    - Services = Services.jsx/ y services.css/
    - Testimonials =  Testimonials.jsx/ y testimonials.css/
    
    
    

    
   `App.js` :  Este será el componente principal de la aplicación, aqui voy a importar cada archivo jsx de cada  carpeta :point_up_2: de cada sección de mi portafolio mostrado anteriormente y luego dentro de una variable los colocaré en el orden en el que quiero que se vean en el portafolio.
   
   
   IMAGEN
   
   `index.css`: Aqui irán los estilos generales que tendrá mi portafolio, ademas de las rutas con  mi paleta de colores y tamaños de componentes  los cuales luego ire llamando por medio de variables dependiendo de lo que necesite como los tamaños cuando vaya cambiando las media queries parte por parte. 
                     
   `index.js`: Archivo principal de JavaScript que inicializa la aplicación, aqui voy a importar tanto app.js, index.css como también react-dom y se renderiza el componente de mi aplicación.


### :dart: CONCLUSIONES  	:tada:

La forma en que esta construido este portafolio es fácil y dinámico para poder hacer cambios sin dañar toda su estructura, ademas que si quiero cambiar la paleta de colores lo podré hacer desde el archivo proncipal CSS sin tener que ir y modificar seccion por sección, espero te haya servido esta explicación breve sobre como realice el proyecto de mi portafolio personal. :raised_hand_with_fingers_splayed: Saludos, si lograste crear este proyecto dejamelo saber, mi contacto esta en el despliegue o si tienes dudas puedes igual escribirme. 
