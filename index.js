class Message{
  constructor(text = '', created = Date.now()){
    this.text = text;
    this.created = created;
  }
  get created(){
    return this._created;
  }
  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Invalid created');
    }
    return this._created = created;
  }
  toString(){
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '',created = Date.now(), 
              url = '',thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString(){
    return `Photo${super.toString()} ` +
           `- Url: ${this.url}` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}

var text = 'Some text';
var created = Date.now();

var duckTypeMessage = {
  text,
  created
};
console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Yesterday Message', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(textMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof ImageMessage);