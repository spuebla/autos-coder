 const productos=[
    {id:1,
     marca:'Fiat',
     modelo:'Cronos',
     año:'2021',
     color:'Blanco',
     motor:'1.8',
     categoria:'autos',
     img:'https://autoblog.com.ar/wp-content/uploads/2021/07/LANZAMIENTO-FIAT-CRONOS-ATTRACTIVE-1.jpg',
     precio:'$2.300.000'
    },
    {id:2,
     marca:'Volkswagen',
     modelo:'Amarok',
     año:'2021',
     color:'Gris',
     motor:'3.0',
     categoria:'camionetas',
     img:'https://1.bp.blogspot.com/-ZWsXuliMUL4/YD_0kbMFKsI/AAAAAAADdfY/LiehS1b3MtAEQQ_RGnrfL13huo6CTHI-ACNcBGAsYHQ/s1451/vw-amarok-highline-v6-2021.jpg',
     precio:'$9.000.000'},
    {
        id:3,
     marca:'Chevrolet',
     modelo:'Cruze II',
     año:'2021',
     color:'Gris',
     motor:'1.4',
     categoria:'autos',
     img:'https://www.chevrolet.com.ar/content/dam/chevrolet/mercosur/argentina/espanol/index/cars/cruze-5-premier/colorizer-1/02-images-2021/colorizer-cinza-satin-steel.jpg?imwidth=960',
     precio:'$3.100.000'
    
    }
];
export const getProducts = new Promise((res, rej) => {
  setTimeout(() => {
      res(productos)
  }, 2000);
});

