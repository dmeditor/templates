var dmeditor = {
templates:[
  {
          blocktype: 'heading',        
          identifier:'gradient-background', 
          name:'Gradient background', 
          css:`
            background-image: linear-gradient(45deg, #7242f7, #ec2eaa);
            padding: 10px;
            letter-spacing: 2px;
          h1, h2, h3, h4, h5{
              text-align:center;
              color: white;
          }`,
          initData: ()=>{
            const data = {type:'heading', settings:{level: 2}};
            return {...data, data:'Hello1', common:{...data.common, color: '#9C27B0' }}
          }, 
      }
]
}
        
