// takePhoto() {
//     this.camera.getPicture({
//       quality: 100,
//       destinationType: this.cameraPlugin.DestinationType.DATA_URL,
//       sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
//       encodingType: this.cameraPlugin.EncodingType.PNG,
//       saveToPhotoAlbum: true
//     }).then(imageData => {
//       this.myPhoto = imageData;
//       this.uploadPhoto();
//     }, error => {
//       console.log("ERROR -> " + JSON.stringify(error));
//     });
//   }

//   selectPhoto(): void {
//     this.camera.getPicture({
//       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       quality: 100,
//       encodingType: this.camera.EncodingType.PNG,
//     }).then(imageData => {
//       this.myPhoto = imageData;
//       this.uploadPhoto();
//     }, error => {
//       console.log("ERROR -> " + JSON.stringify(error));
//     });
//   }

//   private uploadPhoto(): void {
//     this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
//       .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
//       .then((savedPicture) => {
//         this.myPhotoURL = savedPicture.downloadURL;
//       });
//   }
 
//   private generateUUID(): any {
//     var d = new Date().getTime();
//     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
//       var r = (d + Math.random() * 16) % 16 | 0;
//       d = Math.floor(d / 16);
//       return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
//     return uuid;

//   }