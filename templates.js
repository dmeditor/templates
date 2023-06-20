var dmeditor = {
styles:[
  {
          blocktype: 'heading',        
          identifier:'gradient-background', 
          name:'Gradient background', 
          css:`
            background-image: linear-gradient(45deg, #7242f7, #ec2eaa);
            padding: 10px;
            color: white;
            letter-spacing: 2px;
            h1, h2, h3, h4, h5{
              text-align:center;
          }`         
      },
  {
        blocktype: 'collapsable_text',
        identifier:'button_center',
        name:'Center button',
        css:`
            margin-bottom: 15px;
            .dme-common-title{
              text-align: center;
              font-weight: bold;
              font-size: 1.1rem;
            }

            .dme-common-title span{
              display:inline-block;
              padding: 5px 10px;
              color: #dd4815;
  border: 1px solid #dd4815;
            }
.dme-common-title span::after{
  color: #dd4815
}
        `
    }
]
}
        
