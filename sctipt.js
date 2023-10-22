

const panorama = new PANOLENS.ImagePanorama ('https://images.squarespace-cdn.com/content/v1/54380a61e4b0d17dc4953293/1568738319421-W93W0AJNJJMBY29AVUWY/NewHomeSlides-Taphouse+23x1.jpg?format=2500w');
let imageContainer = document.querySelector('.image-container')

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});
viewer.add( panorama );
container.append(img)


