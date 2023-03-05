class StrictEqualityExtension {
 getInfo() {
return {
id: 'eg',
name: '恶搞块',
color1: '#FF0000',
    color2: '#FF0000',
    color3: '#FF0000',
blockIconURI: 'https://www.z4a.net/images/2023/02/02/758b24a9863b83f8ff311ad6493527b818de9494.th.webp',
blocks: [
    {
     opcode: 'a',
     blockType: Scratch.BlockType.COMMAND,
     text: '卡死',
     arguments: {
      a: {},
     }
    },{
     opcode: 'b',
     blockType: Scratch.BlockType.COMMAND,
     text: '诈骗',
     arguments: {}
}
   ]
  };
 }
 a(args) {
  while (true)
  {
  }
 }
 b(args) {
window.open('https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4','_blank');
 }
}
Scratch.extensions.register(new StrictEqualityExtension());
