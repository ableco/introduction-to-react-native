# Introducción a React Native
Parte de la filosofía de [Able](http://able.co) nos dice que nunca debemos dejar de aprender, así que decidimos ahondar en el mundo de React Native y los resultados fueron muy prometedores.
[Aquí](https://docs.google.com/presentation/d/1nNAv3F9WiSXO9vwszArmsrVBzlUEe3JIFe_3sqjbOtY/edit?usp=sharing) tienes la presentación, en donde encontrarás una guía de como inicializar todo esto.

## ¿Por qué React Native?
No somos iOS developers, pero con conocimientos básicos de *Swift y Objective C* (casi nulos) y sintiéndonos cómodos sobre tecnologías como Ruby y Javascript; decidímos aprovechar nuestra experiencia con Reactjs y notamos esto:

### Learn once, write anywhere
Si estás en una conversación civilizada con un Android o iOS Developer y de un momento a otro le hablas de phonegap o ionic, dejará de ser un conversación civilizada.

Con React Native escribes código para Android y iOS, pero no todo el código es compartido, lo cual significa que puedes crear bloques de código dedicados solo a una plataforma y usando los componentes nativos de esta, sí! Nativos!.

![](http://code.hireart.com/images/20160224/platform-code-b8f9d64a.png)

### Flexbox
Sí! React Native implementó flexbox, para poder trabajar los layouts de un modo mucho más simple e intuitivo.

[Aquí](https://facebook.github.io/react-native/docs/flexbox.html) más detalles, y si no estás familiarizado con flexbox, dale click [aquí](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Javascript
Y lo más hermoso de todo esto, es que puedes generar la lógica de tu aplicación usando Javascript. Y si eso no fuese suficiente, también puedes usar ES6.

## Kick off this
En este repositorio encontraremos las siguientes ramas:

- reactjs-lima-components
- reactjs-lima-components-list-view
- reactjs-lima-styles
- reactjs-lima-navigator
- reactjs-lima-detail
- reactjs-lima-loading
- reactjs-lima-packages

En cada commit podrás ver la evolución del código y su fácil implementación.

## From scrath
### Las dependencias
Esto es lo que necesitas para comenzar con un proyecto.
- Node >= v4
- npm >= v2.14
- react-native >= 0.18.1
- watchman 4.1.0
- Xcode >= 7.0

Usaremos brew para facilitarnos la vida
```
brew install node
brew install watchman
npm install -g react-native-cli
```
Y luego iniciaremos nuestro proyecto
```
react-native init mySweetProject --verbose
```
**btw: si clonas este repositorio, en lugar de la línea de arriba deberás de ejecutar en el directorio clonado**
```
npm install
```
Deberías de obtener una pantalla de confirmación, luego vas al directorio y verás la siguiente estructura:

![](http://imgur.com/tAYKPz2.jpg)

ahora ejecuta:
```
open ios/mySweetProject.xcodeproj
```
corres el simulador y listo

![](http://i.imgur.com/dOKBJeG.jpg)

**también puedes ver la documentación oficial [aquí](https://facebook.github.io/react-native/docs/getting-started.html#content)**

### Componentes (reactjs-lima-components / reactjs-lima-components-list-view)
Para comenzar, veremos los componentes más básicos, en el camino iremos conociendo más y más componentes.

Una analogía simple podría ser la siguiente:

HTML | React Native
- | -
div | View
img | Image
span, p | Text
ul/ol, li | ListView, child items

Algo de código

```
<View style={styles.container}>
  <Image style={styles.image}
    source={{uri: 'http://frostney.github.io/talks/react-native/slides/images/react-logo.png'}}
    />
  <Text style={styles.welcome}>
    Welcome to ReactJS Lima
  </Text>
  <Text style={styles.yell}>
    This is Able!!!
  </Text>
  <Image
    source={require('./images/300.jpg')}
  />
</View>
```

> Nota: Para poder usar los componentes de React Native debemos de importarlos
> ```
> import React, {
>   Image,
>   Text,
>   View,
> } from 'react-native';
> ```

> Nota: El source de Image puede ser una imagen local o externa, como en el ejemplo de arriba. Más detalles, [aquí](https://facebook.github.io/react-native/docs/images.html#content)

> Nota: Podemos agregar estilos a partir de la propiedad style, declarando un constructor(create), en este caso, styles. Más detalles, [aquí](https://facebook.github.io/react-native/docs/style.html#content)

Puedes ver el código [aquí](https://github.com/paulrrdiaz/introduction-to-react-native/blob/reactjs-lima-components/index.ios.js), moverte al branch **reactjs-lima-components** y actualizar tu simulador para verlo en vivo.

![](http://imgur.com/S6jJIHR.jpg)
