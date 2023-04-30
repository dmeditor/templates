var dmeditor = {
templates:[
  {
          blocktype: 'heading',        
          identifier:'sample', 
          name:'Block heading', 
          css:`background:#ffcc00; 
          h2{
              text-align:center;
          }`,
          initData: ()=>{
            const data = {type:'heading', settings:{level: 2}};
            return {...data, data:'Hello1', common:{...data.common, color: '#9C27B0' }}
          }, 
      }
]
}
        
