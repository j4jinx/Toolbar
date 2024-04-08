import{R as e}from"./index-BBkUAzwr.js";import{P as r}from"./index-YMbfICiA.js";const a=n=>{const{color:g="#ffffff",height:i=56,hideOnScroll:d=!0,children:b,...C}=n,[o,s]=e.useState(!0),[E,T]=e.useState(0),[l,p]=e.useState(0);return e.useEffect(()=>{d?window.addEventListener("scroll",c):(window.removeEventListener("scroll",c),p(0));function c(){return requestAnimationFrame(()=>{p(document.documentElement.scrollTop)})}return function(){window.removeEventListener("scroll",c)}},[d]),e.useEffect(()=>{l>Number(i)+6&&l>E?o&&s(!1):o||s(!0),T(l)},[l]),e.createElement("div",{title:"toolbar",style:{display:"block",position:"fixed",top:0,left:0,right:0,width:"100%",boxShadow:"0px -1px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 5px 0px rgba(0, 0, 0, 0.14), 0px 0px 5px 0px rgba(0, 0, 0, 0.12)",willChange:"transform",transition:"transform 200ms linear",zIndex:1002,textAlign:"left",height:`${Number(i)}px`,transform:o?"translateY(0%)":"translateY(-110%)"},...C},e.createElement("div",{title:"toolbar-container",style:{WebkitUserSelect:"none",userSelect:"none",width:"100%",height:`${Number(i)}px`,display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:`${g}`}},b))};a.propTypes={color:r.string,height:r.number,hideOnScroll:r.bool,children:r.node};a.defaultProps={color:"#ffffff",hideOnScroll:!0,height:56};const u=a;a.__docgenInfo={description:`Minimal Toolbar/Appbar React Component.

@author [Amol Meshram](https://github.com/j4jinx)`,methods:[],displayName:"Toolbar",props:{color:{defaultValue:{value:"'#ffffff'",computed:!1},description:"Toolbar Color",type:{name:"string"},required:!1},hideOnScroll:{defaultValue:{value:"true",computed:!1},description:"Hide Toolbar On Scroll",type:{name:"bool"},required:!1},height:{defaultValue:{value:"56",computed:!1},description:"Toolbar Height",type:{name:"number"},required:!1},children:{description:`Toolbar children, Title, Icon or Button
@ignore`,type:{name:"node"},required:!1}}};const w={component:u,title:"Toolbar",argTypes:{color:{options:["#ffffff","#9e9e9e","#ff9800","#4caf50","#03a9f4","#00bcd4"],control:{type:"select"}}}},x=n=>e.createElement("div",null,e.createElement(u,{...n},e.createElement("h6",{style:{fontSize:"20px",margin:0,marginLeft:16}},"Title")),e.createElement("div",{style:{paddingTop:n.height+4||62}},e.createElement("div",null,"Start Content"),e.createElement("h1",null,"Content 1"),e.createElement("h1",null,"Content 2"),e.createElement("h1",null,"Content 3"),e.createElement("h1",null,"Content 4"),e.createElement("h1",null,"Content 5"),e.createElement("h1",null,"Content 6"),e.createElement("h1",null,"Content 7"),e.createElement("h1",null,"Content 8"),e.createElement("h1",null,"Content 9"),e.createElement("div",null,"End Content"))),t=x.bind({});t.args={color:"#00bcd4",height:56,hideOnScroll:!0};var h,f,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div>
    <Toolbar {...args}>
        <h6 style={{
      fontSize: '20px',
      margin: 0,
      marginLeft: 16
    }}>Title</h6>
    </Toolbar>
    <div style={{
    paddingTop: args.height + 4 || 62
  }}>
        <div>Start Content</div>
        <h1>Content 1</h1>
        <h1>Content 2</h1>
        <h1>Content 3</h1>
        <h1>Content 4</h1>
        <h1>Content 5</h1>
        <h1>Content 6</h1>
        <h1>Content 7</h1>
        <h1>Content 8</h1>
        <h1>Content 9</h1>
        <div>End Content</div>
    </div></div>`,...(m=(f=t.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const O=["Demo"];export{t as Demo,O as __namedExportsOrder,w as default};
